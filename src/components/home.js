import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'dva';
import styles from './home.less';
import leftIcon from '../assets/left.svg';
import rightIcon from '../assets/right.svg';

const Item = ({ style, src, icon, text }) => (
  <div className={style}>
    <img src={src} alt="" />
    <div className={styles.itemNameBg} />
    <div className={styles.itemName}>
      <img className={styles.itemIcon} src={icon} alt="" />
      <span>{text}</span>
    </div>
  </div>
);
class Home extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyEventListener, false);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyEventListener, false);
  }
  keyEventListener = (e) => {
    const keyNum = window.event ? e.keyCode : e.which;
    const homeMenuIndexAdd = this.props.homeMenuIndex + 1;
    const homeMenuIndexMinus = this.props.homeMenuIndex - 1;
    switch (keyNum) {
      case 37:
        if (homeMenuIndexMinus >= 0) {
          this.props.dispatch({ type: 'menu/changeHomeMenuIndex', payload: { index: homeMenuIndexMinus } });
        }
        break;
      case 39:
        if (homeMenuIndexAdd < 6) {
          this.props.dispatch({ type: 'menu/changeHomeMenuIndex', payload: { index: homeMenuIndexAdd } });
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
      pathname: '/menu',
    });
  };
  render() {
    return (
      <div className={styles.background}>
        <div className={styles.homeMenu}>
          <div className={styles.DirectIcon}>
            {this.props.homeMenuIndex > 0
              ? <img src={leftIcon} alt="" />
              : ''}
          </div>
          <div className={styles.itemContent}>
            {this.props.usedHomeList.map((obj, index) => (
              index === this.props.CurrentIndex
                ? this.props.Langluage === 'chinese'
                  ? <Item style={styles.active} src={obj.src} icon={obj.icon} text={obj.title_ZH} key={index} />
                  : <Item style={styles.active} src={obj.src} icon={obj.icon} text={obj.title_EN} key={index} />
                : this.props.Langluage === 'chinese'
                  ? <Item style={styles.item} src={obj.src} icon={obj.icon} text={obj.title_ZH} key={index} />
                  : <Item style={styles.item} src={obj.src} icon={obj.icon} text={obj.title_EN} key={index} />
            ))}
          </div>
          <div className={styles.DirectIcon}>
            {this.props.homeMenuIndex < 5
              ? <img src={rightIcon} alt="" />
              : ''}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { Langluage, homeMenuIndex, homeList } = state.menu;
  let CurrentIndex = 0;
  let usedHomeList = [];
  homeList.map(obj => usedHomeList.push(obj));
  if (homeMenuIndex < 5) {
    CurrentIndex = homeMenuIndex;
    usedHomeList = usedHomeList.slice(0, 5);
  } else {
    CurrentIndex = 4;
    usedHomeList = usedHomeList.slice(homeMenuIndex - 4, homeMenuIndex + 1);
  }
  return {
    Langluage,
    homeMenuIndex,
    CurrentIndex,
    usedHomeList,
    homeList,
  };
};

export default connect(mapStateToProps)(Home);
