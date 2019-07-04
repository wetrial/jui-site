import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Row, Col, Badge } from 'antd';
import * as utils from '../utils';

class Footer extends React.Component {
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
    const { pathname } = this.props.location;
    const isZhCN = utils.isZhCN(pathname);
    return (
      <footer id="footer">
        <div className="footer-wrap">
          <Row>
            <Col md={12} sm={24} xs={24}>
              <div className="footer-center">
                <h2>相关资源</h2>
                <div>
                  <a href="https://github.com/wetrial">GitHub</a>
                </div>
                <div>
                  <a href="http://jui-site.wetrial.com">
                    <FormattedMessage id="app.footer.online-document" />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={12} sm={24} xs={24}>
              <div className="footer-center">
                <h2>
                  <img
                    className="title-icon"
                    src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                    alt="AFX Cloud"
                  />
                  <FormattedMessage id="app.footer.more-product" />
                </h2>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="http://www.wetrial-pv.com">
                    PV
                  </a>
                  <span> - </span>
                  药物警戒系统
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.wetrial.com/">
                    CTMS
                  </a>
                  <span> - </span>
                  CTMS管理系统
                </div>
                <div>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.wetrial-edc.com">
                    EDC
                  </a>
                  <span> - </span>
                  临床试验电子病例系统
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-bar">
          Made with <span className="heart">❤</span> by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.yuque.com/wetrial/front-end/xuyan"
          >
            湖南微试云-前端技术团队
          </a>
        </div>
      </footer>
    );
  }
}

export default injectIntl(Footer);
