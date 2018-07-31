import * as React from 'react';
import './index.less';
import {Icon} from "antd";
/**
 *
 */
export default class ApiDocHeader extends React.Component {
  render() {
    return (
      <div className={'api-doc-header'}>
        <div className={'content'}>
          <div className={'logo'}><Icon type="ant-design" /></div>
          <div className={'title'}>接口管理系统</div>
        </div>
      </div>
    );
  }
}
