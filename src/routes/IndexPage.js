import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({ children }) {
  return (
    <div className={styles.welcome}>
      {children || ''}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);

