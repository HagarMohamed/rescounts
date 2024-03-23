import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import registerAction from '../../Redux/actions/registerAction';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import notify from '../useNotifacation';

const RegisterHook = () => {

    const dispatch = useDispatch();
    const response = useSelector(state => state.auth.registerUser)
    


    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const onChangeFname = (e) =>{
        setFname(e.target.value)
    }

    const onChangeLname = (e) =>{
        setLname(e.target.value)
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    const onChangePhone = (e) =>{
        setPhone(e.target.value)
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
    }
    

    const validate = () =>{
        if(fName === ""){
            notify("enter the first name", "error")
            return false
        }
        if(lName === ""){
            notify("enter the last name", "error")
            return false
        }
        if(email === ""){
            notify("enter the email", "error")
            return false
        }
        if(phone.length <= 10){
            notify("enter the valid number", "error")
            return false
        }
        return true

    }

    const onClick = async (e) =>{
        if(validate()){
            setLoading(true)
        await dispatch(registerAction({firstName: fName, lastName: lName, email: email, 
            phoneNumber: phone, password: password, "allowsPromotions": true, "allowsSMS": true,}))
            
        setLoading(false)

        }
        
    }

     useEffect(() =>{
        if(loading == false){
            if(response){
                if(response.data.token){
                     localStorage.setItem("token", response.data.token);
                     toast("register sucess", "sucess")
                }
                if(response.data.error){
                   const message = response.data.error
                   toast(message, "error")
                }
                setLoading(true)
    
            }
        }
        

    },[loading])
    

    return [fName, lName, email, phone, password, loading, onChangeFname, 
        onChangeLname, onChangeEmail, onChangePhone, onChangePassword, onClick]

}


export default RegisterHook
