import React,{Component, Fragment} from 'react';

import './translator.scss';
import Button from '../button/button';
import Textarea from '../textarea/textarea';
import translatorService from '../../services/trans-service'
import switchLeng from '../../auxiliary'
import ChoiceLang from '../choice-lang/choice-lang'
import Spinner from '../spinner';
import { ButtonSvg } from '../button/button';

const transService = new translatorService();

export default class Translator extends Component {    
    state = {
        textValue:'',
        primaryLeng: 'uk',
        secondaryLeng: 'en',
        btnOffOn: true,
        btnSelecLeng: false,
        changeLeng: true,
        loading: false,
        error: false,
    };



    changeValue = (data) => {
        const value = data.target.value
        if (value.length > 1){
            this.setState({ textValue: value, btnOffOn: false });
        }
        else{
            this.setState({ textValue: value, btnOffOn: true });
        }   
    }

    onOffSelecLeng = (data)=> {
        console.log("fr",data)
        this.setState({btnSelecLeng: !(this.state.btnSelecLeng)});  

        if (!(data === undefined) )  {
            this.changeLeng(data.target.value)
            console.log("undefined")
        }    
    }

    changeLeng = (data)=> {
       
        switch (true){
            case (data === '&') :
                const { secondaryLeng , primaryLeng} = this.state
                this.setState({primaryLeng: secondaryLeng , secondaryLeng: primaryLeng });
                break;
            case (data === 'p') :
                this.setState({changeLeng: true });
                break;
            case (data === 's') :
                this.setState({changeLeng: false });
                 break; 
                 
            case (data.length > 1 && (this.state.changeLeng) ) :
                this.setState({primaryLeng: data });
                this.onOffSelecLeng()
                break;
            case (data.length > 1 && !(this.state.changeLeng) ) :
                 this.setState({secondaryLeng: data });
                this.onOffSelecLeng()
                 break; 
    
             default: 
                break;
        }    

    }
    


    onTranslator = (e) => {
        const {primaryLeng,secondaryLeng,textValue } = this.state;
        this.setState({ textValue: '' , btnOffOn: true, loading: true });
        transService.getTranslation(primaryLeng,secondaryLeng,textValue).then((text) => {
            const texttrans = text.data
            this.props.onAdd({primaryLeng,secondaryLeng,textValue,texttrans});
            this.setState({ loading: false });
        }).catch(error => {
            this.setState({ error: true });
        })
        

    }

    render (){
        const  { textValue,primaryLeng,secondaryLeng, btnOffOn,btnSelecLeng,loading,error } = this.state;

        if (error){
            this.foo.bar = 100000000 
        }

        if (loading){
            return  <Spinner/>
        }

        const selectionLeng = btnSelecLeng ? <ChoiceLang changeLeng={this.changeLeng} ifOnClick={this.onOffSelecLeng}/> : null;

        return (
            <Fragment>
                 {selectionLeng}

                 <div className='btn-trans'>
                    <Button label={switchLeng(primaryLeng)} addStyle={true} value={'p'}  ifOnClick={this.onOffSelecLeng}/>  
                    <ButtonSvg ifOnClick={()=> this.changeLeng('&')} iconName={'arrows'} />                  
                    <Button label={switchLeng(secondaryLeng)} value={'s'}  ifOnClick={this.onOffSelecLeng}/>
                 </div>
                
                 <Textarea textValue={textValue}
                    changeValue={this.changeValue}/>
                 <Button label={"Перекласти"} ifOnClick={this.onTranslator}  btnOffOn={btnOffOn} title={"Від 2 символів"}/>

           </Fragment>
        )

    }

}





