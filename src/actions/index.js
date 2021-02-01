import streams from '../apis/streams';
import history from '../history';
const FETCH_STREAMS = 'FETCH_STREAMS';
const FETCH_STREAM = 'FETCH_STREAM';
const DELETE_STREAM = 'DELETE_STREAM';
const EDIT_STREAM = 'EDIT_STREAM';

export const signIn = (userId) => {

    return {
        type : 'SIGN_IN',
        payload : userId,
    };

}

export const signOut = (userId) => {
    return {
        type : 'SIGN_OUT',
        payload : userId,
    };
}


export const createStream = (formValues) => {
    return async (dispatch , getState)=> {
       
       const { userId } = getState().auth;
       const response = await  streams.post('/streams ' , { ...formValues , userId}); 
       console.log(response);
       dispatch({ type : 'CREATE_STREAM' , payload : response.data }); 
       // doing some programmatic navigation 
       history.push('/');

    }
}

export const fetchStreams = () => {
    return async (dispatch ) => {
        const response = await streams.get('/streams');
        
        dispatch({ type : FETCH_STREAMS , payload : response.data}) ;

    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);

        dispatch({ type : FETCH_STREAM , payload : response.data}) ;
    }
}

export const editStream = (id , formValues) => async (dispatch) => {
      
    const response = await streams.patch(`/streams/${id}` , formValues);

    dispatch({ type: EDIT_STREAM , payload : response.data}) ;
    history.push('/');

};

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({type : DELETE_STREAM , payload : id });
    }
}