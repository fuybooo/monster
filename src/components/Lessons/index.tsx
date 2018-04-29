import * as React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom';
const {Meta} = Card;

class Lessons extends React.Component<any, any> {

  render() {
    return (
      <div>
        {
          this.props.data.length ? (
            this.props.data.map((item: any, index: number) => (
              <Link key={index} to={{pathname: '/detail', state: item}}>
                <Card
                  hoverable
                  cover={<img alt={item.name} src={item.src}/>}
                >
                  <Meta title={item.title} description={item.description}/>
                </Card>
              </Link>
            ))
          ) : (
            <span>加载中...</span>
          )
        }
      </div>
    );
  }
}
export default Lessons;
