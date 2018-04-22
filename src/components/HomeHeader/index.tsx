import * as React from 'react';
import './index.less';
import {Icon} from "antd";
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const logo = require('../../logo.svg');
export default class HomeHeader extends React.Component<any, any> {
  list = [
    {
      label: 'NodeJs',
      type: 1
    },
    {
      label: 'Angular',
      type: 2
    },
    {
      label: 'React',
      type: 3
    },
    {
      label: 'Vue',
      type: 4
    },
  ];
  switchMenu = () => {
    this.setState({menuShow: !this.state.menuShow});
  };
  selectMenu = (e: any) => {
    this.props.selectMenu(e.target.getAttribute('data-type'));
    this.switchMenu();
  };

  constructor(props: any) {
    super(props);
    this.state = {
      currentMenu: 'NodeJs',
      menuShow: false
    }
  }

  render() {
    return (
      <div className={'home-header'}>
        <div className={'logo-box'}>
          <img src={logo} alt={'logo'} width={40} height={40}/>
          <span>Monster</span>
        </div>
        <div onClick={this.switchMenu}>
          {this.state.menuShow ? (
            <Icon type={'close'}/>
          ) : (
            <Icon type={'ellipsis'}/>
          )}
        </div>
        {/*TransitionGroup需要包裹一个可以变化的块，如list和null的变化区域*/}
        <TransitionGroup className={'menu'}>
          {this.state.menuShow ? (
            <CSSTransition classNames={'fade'} timeout={500}>
              <ul onClick={this.selectMenu}>
                {
                  this.list.map(item => (
                    <li className={'item'} key={item.type} data-type={item.type}>{item.label}</li>
                  ))
                }
              </ul>
            </CSSTransition>
          ) : null}
        </TransitionGroup>
      </div>
    );
  }
}
