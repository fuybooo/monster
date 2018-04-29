import * as React from 'react';
import {connect} from 'react-redux';
import * as action from '../../redux/actions/home';
import HomeHeader from '../../components/HomeHeader';
import Carousel from '../../components/Carousel';
import Lessons from '../../components/Lessons';
import Scroll from '../../components/Scroll';
import util from '../../common/util';

class Home extends React.Component<any, any> {
  // 子组件向父组件传递数据
  selectMenu = (type: any) => {
    this.props.setCurrentLesson(type);
  };
  loadMore = () => {
    this.props.getLesson();
  };
  /**
   * 组件完成时加载数据
   **/
  componentDidMount() {
    (this.refs.scroll as Element).scrollTop = util.getStorage(util.storageKey.scrollTop);
    if (!this.props.home.lesson.list.length) {
      this.props.getSlider();
      this.props.getLesson();
    } else {
      // 强制更新组件
      this.forceUpdate();
    }
  }
  /**
   * 组件卸载时执行
   **/
  componentWillUnmount() {
    util.setStorage(util.storageKey.scrollTop, (this.refs.scroll as Element).scrollTop);
  }
  render() {
    const {loading, lesson: {hasMore}} = this.props.home;
    return (
      <div>
        {/*头部*/}
        <HomeHeader selectMenu={this.selectMenu}/>
        {/*内容区域*/}
        <div className={' main-content'} ref={'scroll'}>
          <Scroll element={this.refs.scroll}
                  hasMore={hasMore}
                  loading={loading}
                  loadMore={this.loadMore}
          >
            <div>
              <Carousel data={this.props.home.sliders}/>
            </div>
            <div>
              <Lessons data={this.props.home.lesson.list}/>
            </div>
          </Scroll>
        </div>
      </div>
    );
  }
}
export default connect(state => ({...state}), action)(Home);
