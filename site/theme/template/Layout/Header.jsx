import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Link } from 'bisheng/router';
import axios from 'axios';
import { Row, Col, Icon, Menu, Button, Modal, Popover, Select } from 'antd';
import * as utils from '../utils';
import { enquireScreen, getLocalizedPathname } from '../utils';
import wetrial from '../../svgs/wetrial.svg';
import wetrialLogo from '../../svgs/wetrial-logo.svg';

const { Option, OptGroup } = Select;

const textSearchUrl = 'https://www.google.com/search?q=site:pro.ant.design+';

// https://www.algolia.com/apps/YEWBNYLVLW/
const searchUrl =
  'https://yewbnylvlw-dsn.algolia.net/1/indexes/antd pro/query?x-algolia-agent=Algolia for vanilla JavaScript 3.21.1&x-algolia-application-id=YEWBNYLVLW&x-algolia-api-key=b42bc1a0c8ab7be447666944228a3176';

const key = 'antd-pro@2.0.0-notification-sent';

class Header extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  state = {
    inputValue: '',
    menuVisible: false,
    menuMode: 'horizontal',
    searchOption: [],
    searching: false,
  };

  componentDidMount() {
    this.context.router.listen(this.handleHideMenu);
    const { searchInput } = this;
    enquireScreen(b => {
      this.setState({ menuMode: b ? 'inline' : 'horizontal' });
    });
    document.addEventListener('keyup', event => {
      if (event.keyCode === 83 && event.target === document.body) {
        searchInput.focus();
      }
    });
    if (localStorage.getItem(key) !== 'true' && Date.now() < new Date('2018/9/5').getTime()) {
      this.infoNewVersion();
    }
  }

  search = (key, success, error) => {
    clearTimeout(this.timer);
    if (!key) {
      success();
      return;
    }

    this.timer = setTimeout(() => {
      this.setState({
        searching: true,
      });
      axios
        .post(searchUrl, {
          params: `query=${key}&hitsPerPage=20&facets=*&maxValuesPerFacet=10&facetFilters=[]`,
        })
        .then(response => {
          this.setState({
            searching: false,
          });
          if (success) {
            success(response);
          }
        })
        .catch(err => {
          this.setState({
            searching: false,
          });
          if (error) {
            error(err);
          }
        });
    }, 200);
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  onMenuVisibleChange = visible => {
    this.setState({
      menuVisible: visible,
    });
  };

  handleSelect = value => {
    location.href = value;
  };

  handleChange = value => {
    this.setState({ inputValue: value });

    this.search(value, data => {
      if (data && data.data && data.data.hits) {
        this.setState({
          searchOption: data.data.hits,
        });
      }
    });
  };

  infoNewVersion = () => {
    const { formatMessage } = this.props.intl;
    Modal.info({
      title: formatMessage({ id: 'app.publish.title' }),
      content: (
        <div>
          <img src={wetrial} alt="Wetrial" />
          <p>
            {formatMessage({ id: 'app.publish.greeting' })}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={formatMessage({ id: 'app.publish.url' })}
            >
              Ant Desgin Pro {formatMessage({ id: 'app.publish.intro' })}
            </a>
            {formatMessage({ id: 'app.publish.tips' })}
            {formatMessage({ id: 'app.publish.old-version-guide' })}
            {formatMessage({ id: 'app.publish.old-version-tips' })}
          </p>
        </div>
      ),
      okText: 'OK',
      onOk: () => localStorage.setItem(key, 'true'),
      className: 'new-version-info-modal',
      width: 470,
    });
  };

  handleLangChange = () => {
    const { pathname } = this.props.location;
    const currentProtocol = `${window.location.protocol}//`;
    const currentHref = window.location.href.substr(currentProtocol.length);

    if (utils.isLocalStorageNameSupported()) {
      localStorage.setItem('locale', utils.isZhCN(pathname) ? 'en-US' : 'zh-CN');
    }

    window.location.href =
      currentProtocol +
      currentHref.replace(
        window.location.pathname,
        utils.getLocalizedPathname(pathname, !utils.isZhCN(pathname))
      );
  };

  render() {
    const { inputValue, menuMode, menuVisible, searchOption, searching } = this.state;
    const { location, intl } = this.props;
    const path = location.pathname;

    const module = location.pathname
      .replace(/(^\/|\/$)/g, '')
      .split('/')
      .slice(0, -1)
      .join('/');
    let activeMenuItem = module || 'home';
    if (/^components/.test(path)) {
      activeMenuItem = 'components';
    } else if (/css/.test(path)) {
      activeMenuItem = 'css';
    } else if (/docs/.test(path)) {
      activeMenuItem = 'docs';
    } else if (path === '/') {
      activeMenuItem = 'home';
    }

    const isZhCN = intl.locale === 'zh-CN';

    const menu = [
      <Menu mode={menuMode} selectedKeys={[activeMenuItem]} id="nav" key="nav">
        <Menu.Item key="home">
          <Link to={getLocalizedPathname('/', isZhCN)}>
            <FormattedMessage id="app.header.menu.home" />
          </Link>
        </Menu.Item>
        <Menu.Item key="docs">
          <Link to={getLocalizedPathname('/docs/introduct', isZhCN)}>
            <FormattedMessage id="app.header.menu.docs" />
          </Link>
        </Menu.Item>
        <Menu.Item key="css">
          <Link to={getLocalizedPathname('/css/index', isZhCN)}>CSS</Link>
        </Menu.Item>
      </Menu>,
    ];

    const componentSearchOption = searchOption
      .filter(v => v.type === 'component')
      .map(d => (
        <Option key={d.url}>
          {d.title} {isZhCN && d.subTitle}
        </Option>
      ));
    const docSearchOption = searchOption
      .filter(v => v.type === 'doc')
      .map(d => <Option key={d.url}>{isZhCN ? d.title : d['title-en'] || d.title}</Option>);

    const cssSearchOption = searchOption
      .filter(v => v.type === 'css')
      .map(d => <Option key={d.url}>{isZhCN ? d.title : d['title-en'] || d.title}</Option>);

    const options = [];

    if (componentSearchOption) {
      options.push(
        <OptGroup label={intl.formatMessage({ id: 'app.header.search.component' })} key="component">
          {componentSearchOption}
        </OptGroup>
      );
    }
    if (docSearchOption) {
      options.push(
        <OptGroup label={intl.formatMessage({ id: 'app.header.search.doc' })} key="doc">
          {docSearchOption}
        </OptGroup>
      );
    }
    if (cssSearchOption) {
      options.push(
        <OptGroup label={intl.formatMessage({ id: 'app.header.search.css' })} key="doc">
          {cssSearchOption}
        </OptGroup>
      );
    }

    if (inputValue) {
      options.push(
        <Option key={`${textSearchUrl}${inputValue}`}>
          <FormattedMessage id="app.header.search.all" />
          {inputValue}
        </Option>
      );
    }

    return (
      <div id="header" className="header">
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon className="nav-phone-icon" type="menu" onClick={this.handleShowMenu} />
          </Popover>
        ) : null}
        <Row>
          <Col xxl={4} xl={5} lg={8} md={8} sm={24} xs={24}>
            <Link id="logo" to="/">
              <img src={wetrial} alt="logo" />
              <img src={wetrialLogo} alt="Wetrial" />
            </Link>
          </Col>
          <Col xxl={20} xl={19} lg={16} md={16} sm={0} xs={0}>
            <div id="search-box">
              <Icon type="search" />
              <Select
                value={inputValue}
                placeholder={intl.formatMessage({ id: 'app.header.search' })}
                notFoundContent=""
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                optionLabelProp="label"
                onSelect={this.handleSelect}
                onChange={this.handleChange}
              >
                {searching && (
                  <Option className="search-loading" key="search">
                    <Icon type="loading" />
                  </Option>
                )}
                {options}
              </Select>
            </div>
            <div className="header-meta">
              {menuMode === 'horizontal' ? <div id="menu">{menu}</div> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default injectIntl(Header);
