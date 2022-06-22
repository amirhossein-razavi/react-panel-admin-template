import {
    ON_CHANGE_BREAKPOINT,
    ON_UI_CHANGE
} from '../actions/types';

const initialState = {
    breakPoint: '',
    breakPointSymbol: '',
    drawer: false,
    sideBarCollapsed: false,
    openAddButton: false,
    theme: 'rtl',
    lang: 'fa',
};

export default function (state = initialState, action: any) {
    switch (action.type) {

        case ON_CHANGE_BREAKPOINT: {
            const data: any = parseInt(action.payload)
            return {
                ...state,
                breakPoint: data,
                breakPointSymbol: (data < 991.98) ? 'xs' : 'xl',
                sideBarCollapsed: data < 1000 ? true : false
            }
        }

        case ON_UI_CHANGE: {
            const { prop, value }: any = action.payload
            return {
                ...state,
                [prop]: value
            }
        }
        default:
            return state;
    }
}
