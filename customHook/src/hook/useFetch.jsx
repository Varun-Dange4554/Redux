// $ herw we are create the action


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

const Reducer = (oldState = initiaValue,{type,payload}) =>{
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
                    data:[...oldState.data,payload],
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
}
