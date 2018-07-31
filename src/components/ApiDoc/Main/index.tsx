import * as React from 'react';
import './index.less';
import ApiDocMenu from "../Menu";
/**
 *
 */
export default class ApiDocMain extends React.Component {
  render() {
    return (
      <div className={'api-doc-main'}>
        <ApiDocMenu/>
        <div className={'main-body'}>
          main-body
        </div>
      </div>
    );
  }
}
