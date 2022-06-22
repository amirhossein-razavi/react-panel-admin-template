import {
    ON_LOADING
} from './types';

export const turnLoading = (loading: boolean) => async (
    dispatch: Function
) => {
    dispatch({
        type: ON_LOADING, payload: loading
    });
}
