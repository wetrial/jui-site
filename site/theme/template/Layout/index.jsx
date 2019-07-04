import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { addLocaleData, IntlProvider } from 'react-intl';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import enLocale from '../../en-US';
import cnLocale from '../../zh-CN';
import * as utils from '../utils';

import Header from './Header';
import Footer from './Footer';


if (typeof window !== 'undefined') {
  /* eslint-disable global-require */
  require('../../static/style');

  // Expose to iframe
  window.react = React;
  window['react-dom'] = ReactDOM;
  window.antd = require('antd');
  /* eslint-enable global-require */
}

let isMobile;
utils.enquireScreen(b => {
  isMobile = b;
});
export default class Layout extends React.PureComponent {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const { pathname } = props.location;
    const appLocale = utils.isZhCN(pathname) ? cnLocale : enLocale;
    addLocaleData(appLocale.data);

    this.state = {
      appLocale,
      isMobile,
    };
  }

  componentDidMount() {
    utils.enquireScreen(b => {
      this.setState({
        isMobile: !!b,
      });
    });
  }

  render() {
    const { children, ...restProps } = this.props;
    const { pathname } = this.props.location;
    const { appLocale } = this.state;

    return (
      <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
        <LocaleProvider locale={enUS}>
          <div
            className={`page-wrapper ${(pathname === '/' || pathname === 'index-cn') &&
              'index-page-wrapper'}`}
          >
            <Header {...restProps} />
            {React.cloneElement(children, { ...children.props, isMobile: this.state.isMobile })}
            <Footer {...restProps} />
          </div>
        </LocaleProvider>
      </IntlProvider>
    );
  }
}
