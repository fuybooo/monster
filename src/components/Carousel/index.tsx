import * as React from 'react';
import { Carousel as AntdCarousel } from 'antd';
import {Spin} from 'antd';
class Carousel extends React.Component<any, any> {

  render() {
    return (
      <div>
        {
          this.props.data.length ? (
            <AntdCarousel autoplay>
              {
                this.props.data.map((item: any) => (
                  <div key={item.title}>
                    <img src={item.src} alt={item.title} width={'100%'} height={'100%'}/>
                  </div>
                ))
              }
            </AntdCarousel>
          ) : (
            <Spin/>
          )
        }
      </div>
    );
  }
}
export default Carousel;
