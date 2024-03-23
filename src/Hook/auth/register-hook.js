import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import registerAction from '../../Redux/actions/registerAction';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import notify from '../useNotifacation';
import { isEmail } from 'validator';
import { isValidPhoneNumber } from 'react-phone-number-input';

const RegisterHook = () => {

    const dispatch = useDispatch();
    const response = useSelector(state => state.auth.registerUser)
    


    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        fNameError : "",
        lNameError : "",
        emailError : "",
        phoneError : "",
        passwordError : ""

    })
    const [loading, setLoading] = useState(false);

    const onChangeFname = (e) =>{
        setFname(e.target.value)
        setErrors({
            ...errors,
             fNameError : ""
            })
    }

    const onChangeLname = (e) =>{
        setLname(e.target.value)
        setErrors({
            ...errors,
             lNameError : ""
            })
    }
    const onChangeEmail = (e) =>{
        setEmail(e.target.value)
        setErrors({
            ...errors,
             emailError : ""
            })
        
    }
    const onChangePhone = (e) =>{
        setPhone(e.target.value)
        setErrors({
            ...errors,
             phoneError : ""
            })
    }
    const onChangePassword = (e) =>{
        setPassword(e.target.value)
        setErrors({
            ...errors,
             passwordError : ""
            })
    }
    

    const validate = () =>{

        const newError = {};
        var valid = true;

        if(fName === ""){
           newError.fNameError = "The FirstName is required"
            valid = false;
        }
        if(lName === ""){
            newError.lNameError = "The LastName is required"
            valid = false;
        }
        if(email === ""){
            newError.emailError = "The Email is required"
            valid = false;
        }
        if(!isEmail(email)){
            newError.emailError = "The Email is Not valid"
            valid = false;
        }
        if(password.length < 8){
            newError.passwordError = "The Password at least 8 character"
            valid = false;
        }
        if(phone === ""){
            newError.phoneError = "The PhoneNumber is required"
            valid = false;
        }
        if(!isValidPhoneNumber(phone)){
            newError.phoneError = "The PhoneNumber is Not valid"
            valid = false;
        }

        setErrors(newError);
        return valid;

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
    

    return [fName, lName, email, phone, password, errors, loading, onChangeFname, 
        onChangeLname, onChangeEmail, onChangePhone, onChangePassword, onClick]

}


export default RegisterHook
