import Navbar from "../../components/navbar/navbar";
import FormVerification from "../../components/form-verification/form-verification";

import { useNavigate } from 'react-router-dom';

import {StateReduxConsumer} from '../../components/state-contex/index';

const Authorization = ({updatLest})=> {    
    return (
            // <StateReduxConsumer>{
            //    (store)=> (
               
            //    )
            //    }
            
            // </StateReduxConsumer>

            <>
                <Navbar />
                <FormVerification nameForm={'Авторизація'} batunName={"Увійти"} updatLest={updatLest} />
            </>
    
    )
}

export default Authorization;