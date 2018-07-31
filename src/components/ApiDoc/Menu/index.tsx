import * as React from 'react';
import './index.less';
import * as action from "../../../redux/actions/api-doc";
import {connect} from "react-redux";
import {Tree} from 'antd';

const TreeNode = Tree.TreeNode;

/**
 *
 */
class ApiDocMenu extends React.Component<any, any> {
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
    if (this.props.apiDoc.menuList.length) {
      this.forceUpdate();
    } else {
      // 初始化数据
      this.props.getMenu();
    }
  }
  render() {
    return (
      <div className={'api-doc-menu'}>
        <Tree loadData={this.onLoadData}>
          {/*{this.renderTreeNodes(this.treeData)}*/}
          {this.renderTreeNodes(this.props.apiDoc.menuList)}
        </Tree>
      </div>
    );
  }
}

export default connect(state => ({...state}), action)(ApiDocMenu);
