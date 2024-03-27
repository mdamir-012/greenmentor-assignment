import { AUTH, POST_USER_ERROR, POST_USER_REQUEST, POST_USER_SUCCESS } from "./actionType"


const initialState={
    isLoading:false,
    isLogin:false,
    token:null,
    isError:false
    
}

export const userReducer=(state=initialState,{type,payload})=>{
    console.log(type,payload)
    switch(type){
        case AUTH:
            return {...state,isLoading:true,isError:false,token:null,isLogin:payload}

        case POST_USER_REQUEST:
            return {...state,isLoading:true,token:null}

        case POST_USER_SUCCESS:
            return {...state,isLoading:false,token:payload}

        case POST_USER_ERROR:
            return {...state,isLoading:false,isError:true,token:null}

        default:
            return state
    }
    
}