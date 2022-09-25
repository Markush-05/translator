import './form-verification.scss';
import React, { useState } from 'react';
import Button from '../button/button';

function FormVerification  ({updatLest,batunName,nameForm}) {
    const  [classEfekt,setclassEfekt] = useState('form-control');
    
    let emeil = '', password = ''
    const dispatch = () =>{
        updatLest(emeil,password).then((result)=> {
            if(!result){
                setclassEfekt('form-control shaking')


             }
        })
        
    }

     

    return (
        <div className="authorization">
            <label className="form-label ">{nameForm}</label>

                <div className="form-floating">
                    <label htmlFor="floatingInput">Email address</label>
                    <input type="email" className={classEfekt} id="floatingInput" placeholder="name@example.com" onChange={(e)=> emeil = e.target.value} onClick={ ()=> setclassEfekt('form-control') } ></input>
                
                </div>

                <div className="form-floating">
                    <label htmlFor="floatingPassword">Password</label>
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=> password = e.target.value}></input>

                </div>
                <Button label={batunName} ifOnClick={dispatch}/>
        </div>

    )

}


export default FormVerification ;