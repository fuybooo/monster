import * as React from 'react';

class Detail extends React.Component<any, any> {
  componentWillMount() {
    if (!this.props.location.state) {
      this.props.history.push('/');
    }
  }
  render() {
    const data = this.props.location.state;
    return (
      data ? (
        <div>
          <img src={data.src} alt={data.title}/>
          {data.title}
        </div>
      ) : (<div/>)
    );
  }
}
export default Detail;
