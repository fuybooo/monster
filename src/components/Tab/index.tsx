import * as React from 'react';
import {NavLink} from "react-router-dom";
import './index.less';
import {Icon} from "antd";
/**
 * 底部导航
 */
export default class Tab extends React.Component {
  navList = [
    {
      exact: true,
      path: '/',
      label: '首页',
      iconType: 'home'
    },
    {
      path: '/lesson',
      label: '我的课程',
      iconType: 'shopping-cart'
    },
    {
      path: '/profile',
      label: '个人中心',
      iconType: 'user'
    },
  ];
  render() {
    return (
      <nav className={'footer'}>
        {
          this.navList.map(item => (
            <NavLink key={item.path} to={item.path} exact={!!item.exact} activeClassName={'active'}>
              <Icon type={item.iconType} />
              <span>{item.label}</span>
            </NavLink>
          ))
        }
      </nav>
    );
  }
}
