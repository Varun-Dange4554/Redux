// $ herw we are create the action

import { useEffect, useReducer } from "react";


const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = ' FETCH_SUCCESS';
const FETCH_FAILURE =  'FETCH_FAILURE';

// & here we have the initial value...

const initiaValue = {
     data: [],
      isLoading: false,
      isError : false,
};

// # here we are create the reducer...

const Reducer = (oldState,{type,payload}) =>{
    switch (type) {
        case FETCH_REQUEST:
            return {
                ...oldState,
                isLoading:true,
            };

            case FETCH_SUCCESS:
                return {
                    ...oldState,
                    isLoading:false,
                    data:payload,
                };
               
           case FETCH_FAILURE:
            return {
                ...oldState,
                isLoading:false,
                isError:true,
            };
            
            default:
                return oldState;
    }
};
 
export const useFetch = (url) =>{
    const [state,dispatch] = useReducer(Reducer,initiaValue);

    useEffect(()=>{
        dispatch({type:FETCH_REQUEST})

        fetch(url)
        .then((res)=>res.json())
        .then((res) => dispatch({type:FETCH_SUCCESS,payload:res}))
        .catch(()=> dispatch({type:FETCH_FAILURE}))

    },[]);
    return state;
}
