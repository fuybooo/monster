import * as React from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import HomeHeader from '../../components/HomeHeader';
import Carousel from '../../components/Carousel';
import Lessons from '../../components/Lessons';

class Home extends React.Component<any, any> {
  // 子组件向父组件传递数据
  selectMenu = (type: any) => {
    this.props.setCurrentLesson(type);
  };
  componentDidMount() {
    this.props.getSlider();
    this.props.getLesson();
  }
  render() {
    return (
      <div>
        {/*头部*/}
        <HomeHeader selectMenu={this.selectMenu}/>
        {/*内容区域*/}
        <div className={' main-content'}>
          <div>
            <Carousel data={this.props.home.sliders}/>
          </div>
          <div>
            <Lessons data={this.props.home.lesson.list}/>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(state => ({...state}), action)(Home);
