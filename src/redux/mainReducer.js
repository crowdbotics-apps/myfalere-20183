import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth5100155Reducer from '../features/EmailAuth5100155/redux/reducers';
import Dashboard16100154Reducer from '../features/Dashboard16100154/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth5100155: EmailAuth5100155Reducer,
Dashboard16100154: Dashboard16100154Reducer,

});