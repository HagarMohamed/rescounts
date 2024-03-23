import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import notify from '../useNotifacation';
import loginAction from '../../Redux/actions/loginAction';

const LoginHook = () => {

    const dispatch = useDispatch();
    const response = useSelector(state => state.auth.loginUser)
    


    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    

    const validate = () =>{
        
        if(email === ""){
            notify("enter the email", "error")
            return
        }
        
        if(password.length < 8){
            notify("enter the valid password", "error")
            return
        }

    }

    const onClick = async (e) =>{
        validate();
        setLoading(true)
        await dispatch(loginAction({email: email, password: password}))
            
        setLoading(false)
    }

     useEffect(() =>{
        if(loading === false){
            if(response){
                if(response.data.token){
                     localStorage.setItem("token", response.data.token)
                     toast("Login successful", "success")
                }
                if(response.data.error){
                   const message = response.data.error
                   toast(message, "error")
                }
    
            }
        }
        

    },[loading])
    

    return [email, password, loading, onChangeEmail, onChangePassword, onClick]

}


export default LoginHook
