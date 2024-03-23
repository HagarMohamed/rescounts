import { REGISTER_DATA, GET_ERORR, LOGIN_DATA } from "../type/type";

const initial = {
  
    loginUser : null,
    registerUser: null,
    loading : false,
    error: null
}

const authReducer = (state = initial, action) => {
    switch(action.type){
        case REGISTER_DATA:
            return {
                ...state,
                registerUser: action.payload,
                loginUser: null,
                loading: false,
                error: null
            }
         case LOGIN_DATA:
            return {
                ...state,
                loginUser: action.payload,
                registerUser: null,
                loading: false,
                error: null
            }
            case GET_ERORR:
        return{
            user: [],
            loading: false,
            error: action.payload,
        }
        default:
            return state;
    }
    

}

export default authReducer;