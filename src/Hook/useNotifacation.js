import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  const notify = (msg, type) =>{
    if(type === "success"){
        toast.success(msg);
    }else if (type === "error") {

      toast.error(msg);
    } else{
        toast.warn(msg);
    }
  }

  export default notify;

