import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { notification } from 'antd';
import { turnNotification } from '../../redux/actions/notification'

const Notification = ({ state, turnNotification }) => {

    const openNotification = () => {

        notification[state.type]({
            message: state.title,
            description: state.description,
            duration: state.duration,
            placement: 'bottomLeft',
            onClose: () => {
                turnNotification({
                    title: "",
                    description: "",
                    duration: 3,
                    show: false,
                    type: ""
                })
            }
        });

    };

    return (
        <>
            {state.show && openNotification()}
        </>
    )
}

const mapStateToProps = (state: any) => ({
    state: state.notification
});

export default connect(mapStateToProps, { turnNotification })(Notification);