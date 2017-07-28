import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'dva';
import styles from './menu.less';
import leftIcon from '../assets/left.svg';
import rightIcon from '../assets/right.svg';

const ImgBox = ({ src, style, index, text }) => (
  <div className={styles.tab}>
    <div>
      <div key={index} className={style}>
        <img src={src} alt="" />
      </div>
      <p>{text}</p>
    </div>
  </div>
);
const Abstract = ({ text }) => (
  <div className={styles.abstract}>
    <p>{text}</p>
  </div>
);
class Menu extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyEventListener, false);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyEventListener, false);
  }
  keyEventListener = (e) => {
    const keyNum = window.event ? e.keyCode : e.which;
    const currentIndexAdd = this.props.currentIndex + 1;
    const currentIndexMinus = this.props.currentIndex - 1;
    switch (keyNum) {
      case 37:
        if (currentIndexMinus >= 0) {
          this.props.dispatch({ type: 'menu/changeCurrentIndex', payload: { index: currentIndexMinus } });
        }
        break;
      case 39:
        if (currentIndexAdd < 6) {
          this.props.dispatch({ type: 'menu/changeCurrentIndex', payload: { index: currentIndexAdd } });
        }
        break;
      case 13:
        this.enterKeyDownListenr();
        break;
      default:
        break;
    }
  };
  enterKeyDownListenr = () => {
    hashHistory.push({
      pathname: '/menu/menuinfor',
    });
  };
  render() {
    return (
      <div className={styles.menuBox}>
        <div className={styles.titleIcon}>
          <span />
          <span>
            {this.props.Langluage === 'chinese' ? '酒店' : 'HOTEL'}
          </span>
        </div>
        <div className={styles.tabsBox}>
          {
            this.props.currentIndex !== 0
              ? <div className={styles.directLeft}><img src={leftIcon} alt="" /></div>
              : <div className={styles.directLeft} />
          }
          <div className={styles.tabsContent}>
            {this.props.usedMenuList.map((obj, index) =>
              (index === this.props.LiCurrentIndex  /* 判断当前遍历对象是否为活动对象 */
                ? this.props.Langluage === 'chinese' /* 是活动对象，再判断当前活动对象所要展示的语言是不是中文 */
                  ? <ImgBox key={index} src={obj.img} text={obj.name_ZH} style={styles.active} />
                  : <ImgBox key={index} src={obj.img} text={obj.name_EN} style={styles.active} />
                : this.props.Langluage === 'english' /* 不是活动对象，再判断当前活动对象所要展示的语言是不是英文 */
                  ? <ImgBox key={index} src={obj.img} text={obj.name_EN} style={styles.imgShell} />
                  : <ImgBox key={index} src={obj.img} text={obj.name_ZH} style={styles.imgShell} />
              ),
            )}
          </div>
          {
            this.props.currentIndex !== 5
              ? <div className={styles.directRight}><img src={rightIcon} alt="" /></div>
              : <div className={styles.directRight} />
          }
        </div>
        {
          this.props.Langluage === 'chinese'
            ? <Abstract text={this.props.usedMenuList[this.props.LiCurrentIndex].abstract_ZH} />
            : <Abstract text={this.props.usedMenuList[this.props.LiCurrentIndex].abstract_EN} />
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { Langluage, currentIndex, menuList } = state.menu;
  let LiCurrentIndex = 0;
  let usedMenuList = [];
  menuList.map(obj => usedMenuList.push(obj));
  if (currentIndex < 4) {
    LiCurrentIndex = currentIndex;
    usedMenuList = usedMenuList.slice(0, 4);
  } else {
    LiCurrentIndex = 3;
    usedMenuList = usedMenuList.slice(currentIndex - 3, currentIndex + 1);
  }
  return {
    Langluage,
    currentIndex,
    LiCurrentIndex,
    usedMenuList,
  };
};

export default connect(mapStateToProps)(Menu);
