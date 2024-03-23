import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import notify from '../useNotifacation';
import loginAction from '../../Redux/actions/loginAction';
import { isEmail } from 'validator';

const LoginHook = () => {

    const dispatch = useDispatch();
    const response = useSelector(state => state.auth.loginUser)
    


    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [Errors, setErrors] = useState({
        emailError:"",
        passwordError: ""
    });
    const [loading, setLoading] = useState(false);

    
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
        setErrors({
            ...Errors,
             emailError : ""
            })
    }
    
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
        setErrors({
            ...Errors,
             passwordError : ""
            })
    }
    

    const validate = () =>{
        const newError = {}
        var valid = true;

        if(email === ""){
            newError.emailError = "Email is required"
            // notify("enter the email", "error")
            valid = false;
        
        }
        if(!isEmail(email)){
            newError.emailError = "Email is Not Valid"
            // notify("enter the email", "error")
            valid = false;
        }
        
        if(password.length < 8){
            newError.passwordError = "Password is required"
            // notify("enter the valid password", "error")
            valid = false;
            
        }
        setErrors(newError);
        return valid;

    }

    const onClick = async (e) =>{
       if (validate()){
        setLoading(true)
        await dispatch(loginAction({email: email, password: password}))
            
        setLoading(false)

       }
        
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
    

    return [email, password, Errors, loading, onChangeEmail, onChangePassword, onClick]

}


export default LoginHook
