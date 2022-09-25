import React, { Component, useState } from 'react';

import './app.scss';
import { Route,Routes, Link , useNavigate, Navigate } from 'react-router-dom';

import PageTranslator from '../components/page-translator/page-translator';
import PageListSaves from '../components/page-list-saves/page-list-saves';

import Header from '../components/header';


import { privateRoutes, poblicRoutes } from '../routes';

import createStor, {rootReducer} from '../stateStor';

import { StateReduxProvider,SwapiServiceConsumer } from '../components/state-contex';
import { type } from '@testing-library/user-event/dist/type';
import DummyListService from '../services/dummy-service-liste';

import { deletItem, addItem } from '../auxiliary';





  //import DummyListService from '../services/dummy-service-liste';

  // 
  // store = createStor(rootReducer, {})
  // store.subscribe( ()=> console.log("store", store.getState() ))

// const PushUrl = () => {
//   const navigate = useNavigate();


  
//   navigate('/fe');
//   return 
  
// }




function localStor (date) {
  if(!date){
    if(date ==="deleted"){
      localStorage.clear()
    }

    if(localStorage.getItem('DATA')){
      return JSON.parse(localStorage.getItem('DATA') )
    }else{
      return { listSaves: null, statusAuthorization: false }
      
    }
  }

  localStorage.setItem('DATA', JSON.stringify(date))
  
}

export default function App()  {
  const swapiService = new DummyListService();
  const navigate = useNavigate();

  const [state, setState] = useState(
    localStor()
    );


    
  const  updatLest = async (name, password) => {
   
      if(name){
        
          let result = await swapiService.getPseudoList(name).then((e)=> {
            
            if (e) {
              localStor({ listSaves: e.listSaves,statusAuthorization:true})
              setState(localStor())
              navigate('/tans') 
              return true   
            }
            return false
         
            
        })
        return result  
      }else{
        localStor ("deleted")
        setState(localStor())
        navigate('/')
      }

    
      

    }
    
    // componentDidMount() {
    //     // if (state.listSaves === null){
    //     //     updatLest("123")
    //     // }
    // }


    function contents(){
      
      if(state.statusAuthorization ){
        return(
          privateRoutes.map(({path,Component})=> <Route key={String(Component)} path={path} element={
                <Component 
                  props={state} 
                  changeItem={id => setState({ listSaves: deletItem(id,state.listSaves),statusAuthorization:true} )}
                  updatLest={updatLest}/>
                  
                }/> )
        )
      }
      return poblicRoutes.map(({path,Component})=> <Route key={String(Component)} path={path}  element={<Component updatLest={updatLest}/>} /> )
    }



  // render() {
    return (
      <StateReduxProvider  value={state} > 
      <div className='container'>
          <Header/>
          <div className='col'>
            <Routes>
              
              {contents()} 
  
            {/* <Route path="/close" element={ <Navigate to="/"/> } />   */}
            <Route path="*" element={ <Link to='/'>Houm</Link> } />
  
          </Routes>

          </div>
          
         
       </div>
      </StateReduxProvider>

    )

  // }
}

