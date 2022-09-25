import React, { Component,Fragment } from 'react';

import Translator from '../translator/translator';
import ResultTrans from '../result-trans/result-trans';
import Button, { ButtonSvg } from '../button/button';
import ErrorBoundery from '../error-boundery/error-boundery';
import { deletItem } from '../../auxiliary';
import Navbar from '../navbar/navbar';

//const post = new SwapiService();

// post.getTranslation().then((roo)=>{console.log(roo.data)})


export default class PageTranslator extends Component {
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

  createTransItem ({primaryLeng,secondaryLeng,textValue,texttrans}) {
    return {
        primaryLeng,
        secondaryLeng,
        textValue,
        texttrans,
        id:  Date.now()
    }
  }


  onAdd = (data) => {
    const newItem = this.createTransItem(data)
    this.setState(({ transData }) => {
      const newArr = [
          newItem , ... transData
      ];
      return{
        transData: newArr
      };
    });
  }

  toSave = (id,data)=>{
    this.props.changeItem(data[0])
    this.setState({transData: deletItem(id, data) })
  }
  

  render() {

    const elements = this.state.transData.map((datd) => {
      return (
        <Fragment key={datd.id}>
          
          <ResultTrans { ... datd }  ifOnClick={()=> this.setState({transData: deletItem(datd.id, this.state.transData) })} />
          <Button label={"Добавити до повторень"}  ifOnClick={() => this.toSave(datd.id,this.state.transData)}/>

        </Fragment>
          )
      });


    return (
        <>
          <ErrorBoundery>
            <Navbar navPrivate updatLest={this.props.updatLest}/>
            <Translator onAdd={this.onAdd}/>
          </ErrorBoundery>
            { elements  }
        </>  
       
      

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