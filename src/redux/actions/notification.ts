import {
    ON_NOTIFICATION
} from './types';

export const turnNotification = ({ title, description, duration, show, type }: any) => async (
    dispatch: Function
) => {
    dispatch({
        type: ON_NOTIFICATION, payload: {
            title,
            description,
            duration,
            show,
            type
        }
    });
}

