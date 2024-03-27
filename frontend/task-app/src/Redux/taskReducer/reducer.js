import { GET_TASK_SUCCSESS, POST_TASK_SUCCSESS, TASK_REQUEST } from "./actionType"

const initialState={
    isLoading:false,
    tasks:[],
    isError:false
}

export const taskReducer=(state=initialState,{type,payload})=>{
    console.log(type,payload)
    switch(type){
        case TASK_REQUEST:
            return {...state,isLoading:true,isError:false}

        case POST_TASK_SUCCSESS:
            return {...state,isLoading:false,tasks:payload,isError:false}

        case GET_TASK_SUCCSESS:
            return {...state,isLoading:false,tasks:payload,isError:null}
        default:
            return state
    }
    
}