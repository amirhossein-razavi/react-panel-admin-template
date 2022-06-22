import {
    ON_CHANGE_BREAKPOINT,
    ON_UI_CHANGE,
} from './types';

export const changeBreakPoint = (breakPoint: any) => async (
    dispatch: Function
) => {
    dispatch({
        type: ON_CHANGE_BREAKPOINT, payload: breakPoint
    });
}

export const onPublicChange = (prop: any, value: any) => async (
    dispatch: Function
) => {
    dispatch({
        type: ON_UI_CHANGE, payload: { prop, value }
    });
}
