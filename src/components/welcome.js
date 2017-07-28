import React, { Component } from 'react';
import { hashHistory } from 'react-router';
import { connect } from 'dva';
import styles from './welcome.css';
import LogoImg from '../assets/logo.jpg';

class Welcome extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.keyDownListener, false);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownListener, false);
  }
  keyDownListener = (e) => {
    const keynum = window.event ? e.keyCode : e.which;
    switch (keynum) {
      case 37:
        this.props.dispatch({ type: 'menu/changeLanguage', payload: { language: 'chinese' } });
        break;
      case 39:
        this.props.dispatch({ type: 'menu/changeLanguage', payload: { language: 'english' } });
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
      pathname: '/home',
    });
  };
  render() {
    const CBtnSty = this.props.Langluage === 'chinese' ? styles.activeBox : styles.buttonBox;
    const EBtnSty = this.props.Langluage === 'english' ? styles.activeBox : styles.buttonBox;
    return (
      <div>
        <div className={styles.backgroundStyle} />
        <div className={styles.welcomePanel}>
          <div>
            {
              this.props.Langluage === 'chinese'
                ? <span>{this.props.welcomeContent.welcome_ZH}</span>
                : <span>{this.props.welcomeContent.welcome_EN}</span>
            }
            <div className={styles.logo}>
              <img src={LogoImg} alt="" />
              {
                this.props.Langluage === 'chinese'
                  ? <span>{this.props.welcomeContent.hotelTitle_ZH}</span>
                  : <span>{this.props.welcomeContent.hotelTitle_EN}</span>
              }
            </div>
            {
              this.props.Langluage === 'chinese'
                ? <span className={styles.roomNum}>
                  {this.props.welcomeContent.roomNumber_ZH}
                  {this.props.welcomeContent.roomNumber}</span>
                : <span className={styles.roomNum}>
                  {this.props.welcomeContent.roomNumber_EN}
                  {this.props.welcomeContent.roomNumber}</span>
            }
          </div>
          {
            this.props.Langluage === 'chinese'
              ? <p>{this.props.welcomeContent.welcomeSlogan_ZH}</p>
              : <p>{this.props.welcomeContent.welcomeSlogan_EN}</p>
          }
          <div>
            <div>
              <div className={styles.chineseButton}>
                中文
              </div>
              <div className={CBtnSty} />
            </div>
            <div>
              <div className={styles.englishButton}>
                EN
              </div>
              <div className={EBtnSty} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { Langluage, welcomeContent } = state.menu;
  return { Langluage, welcomeContent };
};
export default connect(mapStateToProps)(Welcome);
