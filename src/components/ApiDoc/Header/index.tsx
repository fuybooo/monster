import * as React from 'react';
import './index.less';
import {Icon, Button, Modal} from "antd";
import MenuForm from '../MenuForm';
import * as action from '../../../redux/actions/header';
import {connect} from 'react-redux';

/**
 *
 */
class ApiDocHeader extends React.Component<any, any> {
  clickCreate() {
    this.props.changeModelVisible();
  }
  handleOk() {
    this.setState({isSubmit: true})
  }
  handleCancel() {
    this.props.changeModelVisible(false);
  }
  render() {
    const modalProps = {
      title: '创建',
      visible: this.props.header.modalVisible,
      onOk: this.handleOk.bind(this),
      onCancel: this.handleCancel.bind(this),
      okButtonProps: { disabled: true },
    };
    return (
      <div className={'api-doc-header'}>
        <div className={'content'}>
          <div className={'logo'}><Icon type="ant-design" /></div>
          <div className={'title'}>接口管理系统</div>
          <div className={'ml20'}><Button className={'btn-create'} type={'primary'} onClick={this.clickCreate.bind(this)}>创建</Button></div>
          <Modal {...modalProps}>
            <MenuForm/>
          </Modal>
        </div>
      </div>
    );
  }
}
export default connect(state => ({...state}), action)(ApiDocHeader);