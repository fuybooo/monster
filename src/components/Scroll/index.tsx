import * as React from 'react';

class Scroll extends React.Component<any, any> {
  timer: any;

  constructor(props: any) {
    super(props);
    this.state = {flag: false};
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.element && !this.state.flag) {
      nextProps.element.addEventListener('scroll', () => {
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
