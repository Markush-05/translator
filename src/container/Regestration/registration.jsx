import Navbar from "../../components/navbar/navbar";
import FormVerification from "../../components/form-verification/form-verification";


const Registration = ()=> {
   
    return (
        <>
            <Navbar />
            <FormVerification nameForm={'Реєстрація'} batunName={"Зареєструватися "} />
        </>
    
    )
    
}

export default Registration;