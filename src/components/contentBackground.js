import React, { Component } from 'react';
import styles from './menu.less';

class ContentBackground extends Component {
  render() {
    return (
      <div className={styles.backgroundPage}>
        <div className={styles.backgroundPanel} />
        {this.props.children}
      </div>
    );
  }
}

export default ContentBackground;
