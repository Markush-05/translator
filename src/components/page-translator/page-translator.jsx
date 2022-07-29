import React, { Component } from 'react';

import Translator from '../translator/translator';
import ResultTrans from '../result-trans/result-trans';


//const post = new SwapiService();

// post.getTranslation().then((roo)=>{console.log(roo.data)})


export default class PageTranslator extends Component {

  maxId = 100;

  state = {
    
    transData: [
      this.createTransItem({
      primaryLeng: "uk",
      secondaryLeng: "en",
      textValue: "Привіт світd",
      texttrans: "Hello world"}
     ),
    ],
  }

  createTransItem (props) {
    const {   primaryLeng,secondaryLeng,textValue,texttrans} = props
    return {
        primaryLeng,
        secondaryLeng,
        textValue,
        texttrans,
        id: this.maxId++
    }
  }


  onAdd = (data) => {
    const newItem = this.createTransItem(data)
    this.setState(({ transData }) => {
      const newArr = [
          ... transData,newItem
      ];
      return{
        transData: [... transData,newItem ]
      };
    });
  }

  deletItem = (id) => {
    this.setState(({ transData }) => {
      const idx = transData.findIndex((el) => el.id === id);

      const newMash = [
          ... transData.slice(0, idx), 
          ...transData.slice(idx + 1)
      ];

      return{
        transData: newMash
      };
  });
  }
  

  render() {

    const elements = this.state.transData.map((datd) => {

      return <ResultTrans { ... datd } key={datd.id} ifOnClick={()=> this.deletItem(datd.id)} />
      });


    return (

      
          <div className='col'>
            <Translator onAdd={this.onAdd}/>
              { elements  }
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