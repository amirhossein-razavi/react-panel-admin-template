import React from 'react';
import styles from './loading.module.css';
import { connect } from 'react-redux';
import { Spin } from 'antd';

const Loading = ({ loading }: any) => {

    return (
        loading.loading &&
        <div className={[styles.loadingContainer, 'display_flex_column_center'].join(" ")}  >
            <Spin className='customSpin' spinning={true} size="large" />
        </div>
    );
}

const mapStateToProps = (state: any) => ({
    loading: state.loading,
});

export default connect(mapStateToProps, {})(Loading);