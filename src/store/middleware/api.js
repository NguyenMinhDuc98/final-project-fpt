import axios from "axios";
import * as actions from '../api';

const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, headers, method, data, onSuccess, onError, onStart } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);


    try {
        const response = await axios.request({
            baseURL: 'https://fixit-back-end.herokuapp.com',
            url,
            headers,
            method,
            data
        });

        //General
        dispatch(actions.apiCallSuccess(response.data.results));

        //Specific
        if (onSuccess) dispatch({ type: onSuccess, payload: response.data.results });
    } catch (error) {
        dispatch(actions.apiCallFailed(error));
        if (onError) dispatch({ type: onError, payload: error });
    }

};

export default api;