import React, { Component } from 'react';

import './app.scss';

import PageTranslator from '../page-translator/page-translator.jsx';

import Header from '../header/header';

import Translator from '../translator/translator';
import ResultTrans from '../result-trans/result-trans';


//const post = new SwapiService();

// post.getTranslation().then((roo)=>{console.log(roo.data)})


export default class App extends Component {


  render() {



    return (

      <div className='container'>
        <Header/>

        <div className='row'>
          
         <PageTranslator/>
         <PageTranslator/>
         <PageTranslator/>
        </div>
      
  
      </div>
      

    );
  }
}


/*

 <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.css"/>
    <link rel="stylesheet" href="https://bootswatch.com/5/quartz/bootstrap.css"/>

  <div className='row justify-content-center align-items-center'>
          <div className='col '>
            <ShowWord props={'дозволяє'}>{false}</ShowWord>
          </div>
          
          <div className='col '>
            <AudioPlay/>
          </div>
        </div>
        <InputText onAdd={this.onAdd} >{this.state.repetitions}</InputText>
        <button type="button" className="btn btn-secondary disabled ">Next</button>
       
*/