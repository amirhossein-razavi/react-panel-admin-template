import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { connect } from 'react-redux';

const Dashboard = ({ publicReducer, ...props }) => {

    return (
        <p>Welcom To Dashboard</p>
    );
}

const mapStateToProps = (state) => ({
    publicReducer: state.publicReducer
});

export default connect(mapStateToProps, {})(Dashboard);