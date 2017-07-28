import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './menu.less';

class MenuInformation extends Component {
  render() {
    return (
      <div className={styles.menuBox}>
        <div className={styles.titleIcon}>
          <span />
          <span>
            {
              this.props.Langluage === 'chinese'
              ? '酒店 / '.concat(this.props.menuList[this.props.currentIndex].name_ZH)
              : 'HOTEL / '.concat(this.props.menuList[this.props.currentIndex].name_EN)
            }
          </span>
        </div>
        <div className={styles.InforContent}>
          <div>
            <img src={this.props.menuList[this.props.currentIndex].img} alt="" />
          </div>
          <div>
            <h2>
              {this.props.Langluage === 'chinese'
                ? this.props.menuList[this.props.currentIndex].name_ZH.concat('介绍')
                : this.props.menuList[this.props.currentIndex].name_EN.concat(' Introduce')}
            </h2>
            <p>
              {this.props.Langluage === 'chinese'
                ? this.props.menuList[this.props.currentIndex].abstract_ZH
                : this.props.menuList[this.props.currentIndex].abstract_EN}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { Langluage, currentIndex, menuList } = state.menu;
  return {
    Langluage,
    currentIndex,
    menuList,
  };
};
export default connect(mapStateToProps)(MenuInformation);
