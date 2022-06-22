import {
  ON_LOADING
} from '../actions/types';

const initialState = {
  loading: false
};

export default function (state = initialState, action: any) {
  switch (action.type) {

    case ON_LOADING: {
      return {
        loading: action.payload
      }
    }
    default:
      return state;
  }
}
