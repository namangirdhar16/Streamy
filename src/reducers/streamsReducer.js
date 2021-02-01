import * as _ from 'lodash';

export default (state = [] , action) => {
     switch(action.type)
     {    case 'FETCH_STREAMS':
          return {...state , ..._.mapKeys(action.payload , 'id')};
          case 'FETCH_STREAM':
          return { ...state , [action.payload.id]: action.payload} ;
          case 'EDIT_STREAM ': 
          // const newState = { ...state };
          // newState[action.payload.id] = action.payload;
          // return newState;
          return {
               ...state , [action.payload.id]: action.payload // ES6 key interpolation syntax 
          }
          case 'CREATE_STREAM':
               return {
                    ...state , [action.payload.id]: action.payload
               }
          case 'EDIT_STREAM':
               return {
                    ...state , [action.payload.id]: action.payload 
               }
          case 'DELETE_STREAM':
               return _.omit(state , [action.payload]);
          default: 
          return state;
     } 

}