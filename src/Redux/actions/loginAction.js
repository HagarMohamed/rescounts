
import useInsertData from "../../hooks/useInsertData";
import { LOGIN_DATA } from "../type/type";


const loginAction = (parm) => async (dispatch) =>{

    try{
        const response = await useInsertData('/api/v1/users/login', parm);
        dispatch({
            type: LOGIN_DATA, 
            payload: response,
        
        })
      }catch(e){
        console.log( e)

        dispatch({
            type: LOGIN_DATA,
            payload: e.response,
        
        })
    
      }

}

export default loginAction;


  