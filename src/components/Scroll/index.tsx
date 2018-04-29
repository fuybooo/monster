import * as React from 'react';

class Scroll extends React.Component<any, any> {
  timer: any;

  constructor(props: any) {
    super(props);
    this.state = {flag: false};
  }

  /**
   * 在且仅在父组件属性变化时执行
   * 当需要接收父组件传来当dom元素时只能使用此钩子，在componentDidMount钩子中不能获取
   * @param nextProps
   */
  componentWillReceiveProps(nextProps: any) {
    // 事件绑定一次之后就不再进行绑定
    if (nextProps.element && !this.state.flag) {
      nextProps.element.addEventListener('scroll', () => {
        // 节流
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          const {scrollHeight, offsetHeight, scrollTop} = nextProps.element;
          if (!this.props.loading && this.props.hasMore && (offsetHeight + scrollTop + 20 > scrollHeight)) {
            this.props.loadMore();
          }
        }, 50);
      });
      this.setState({flag: true});
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Scroll;
