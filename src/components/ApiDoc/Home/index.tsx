import * as React from 'react';
import ApiDocHeader from "../Header";
import ApiDocMain from "../Main";
import './index.less';
/**
 * 
 */
export default class ApiDocHome extends React.Component {
  render() {
    return (<div className={'api-doc-layout'}>
      <ApiDocHeader/>
      <ApiDocMain/>
    </div>);
  }
}
