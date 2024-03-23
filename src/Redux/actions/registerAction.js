
import useInsertData from "../../hooks/useInsertData";
import { REGISTER_DATA } from "../type/type";


const registerAction = (parm) => async (dispatch) =>{

    try{
        const response = await useInsertData('/api/v1/users', parm);
        dispatch({
            type: REGISTER_DATA,
            payload: response,
        
        })
      }catch(e){

        dispatch({
            type: REGISTER_DATA,
            payload: e.response,
        
        })
    
      }

}

export default registerAction;


  