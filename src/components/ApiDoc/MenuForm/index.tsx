import * as React from 'react';
import './index.less';
import * as action from "../../../redux/actions/menu-form";
import {connect} from "react-redux";
import {Form, Input, Tree} from 'antd';
import commonModel from '../../../common/common.model';
const FormSimpleItem = Form.Item;
const TreeNode = Tree.TreeNode;

/**
 *
 */
class ApiDocMenuForm extends React.Component<any, any> {
  render() {
    const Wrapper = Form.create()(MenuForm);
    return (
      <Wrapper/>
    );
  }
}

class MenuForm extends React.Component<any, any> {
  onLoadData = (treeNode: any) => {
    if (treeNode.props.type === 1) {
      return this.props.appendMenu({pid: treeNode.props.id}).then((resolve: any) => {
        if (treeNode.props.children) {
          resolve();
          return;
        }
        treeNode.props.dataRef.children = this.props.apiDoc.currentMenuList;
        this.props.afterAppendMenu();
        resolve();
      });
    } else {
      return new Promise(resolve => resolve());
    }
  };

  renderTreeNodes = (data: any) => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        );
      }
      return <TreeNode {...item} dataRef={item} />;
    });
  };

  componentDidMount() {
  }
  handleSubmit(e: any) {
    e.preventDefault();
    this.props.form.validateFields((err: any, values: any) => {
      if (!err) {
        console.log(values);
      }
    });
  }
  render() {
    const formItemLayout = {};
    const {getFieldDecorator} = this.props.form;
    return (
      <div className={'api-doc-menu-form'}>
        {/*<Tree loadData={this.onLoadData}>*/}
        {/*{this.renderTreeNodes(this.props.apiDoc.menuList)}*/}
        {/*</Tree>*/}
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormSimpleItem
            {...formItemLayout}
            label={'上级目录'}
          >
            {getFieldDecorator('email', {
              rules: [{
                required: true, message: commonModel.text.require,
              }],
            })(
              <Input />
            )}
          </FormSimpleItem>
        </Form>
      </div>
    );
  }
}

export default connect(state => ({...state}), action)(ApiDocMenuForm);
