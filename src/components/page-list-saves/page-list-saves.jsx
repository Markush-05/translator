import React, { Component } from 'react';
import ResultTrans from '../result-trans/result-trans';
import './page-list-saves.scss'



import DummyListService from '../../services/dummy-service-liste';
import Navbar from '../navbar/navbar';



const  PageListSaves = ({props,changeItem,updatLest})=> {


       
    const  {listSaves, } = props

    if (listSaves === null || listSaves === undefined) {
        return <Navbar navPrivate />
    }

    const item = listSaves.map( (item)=> 
        <ResultTrans key={item.id}  {... item} ifOnClick={()=> changeItem(item.id) }/> )

    return (
        <>
            <Navbar navPrivate updatLest={updatLest} />            
                {item}
        </>
        

        
   
    )

}
 
export default  PageListSaves




    

