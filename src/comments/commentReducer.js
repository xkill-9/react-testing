import { SAVE_COMMENT } from './constants';

export default function (state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [action.payload];
    default:
      return state;
  }
}
