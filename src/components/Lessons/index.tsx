import * as React from 'react';
import {Card} from 'antd';
const {Meta} = Card;

class Lessons extends React.Component<any, any> {

  render() {
    return (
      <div>
        {
          this.props.data.length ? (
            this.props.data.map((item: any) => (
              <Card
                key={item.id}
                hoverable
                cover={<img alt={item.name} src={item.src}/>}
              >
                <Meta title={item.title} description={item.description}/>
              </Card>
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
