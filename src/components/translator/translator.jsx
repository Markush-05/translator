import React,{Component, Fragment} from 'react';

import './translator.css';
import Button from '../button/button';
import Textarea from '../textarea/textarea';
import SpriteSvg from '../sprite-svg/sprite-svg';
import translatorService from '../../services/trans-service'
import switchLeng from '../../auxiliary'
import ChoiceLang from '../choice-lang/choice-lang'

const transService = new translatorService();

export default class Translator extends Component {    
    state = {
        textValue:'',
        primaryLeng: 'uk',
        secondaryLeng: 'en',
        texttrans: '',
        offOn: true,
        selecLeng: false,
        changeLeng: true
    };

    changeValue = (data) => {

        const value = data.target.value
 
        if (value.length > 1){
            this.setState({ textValue: value, offOn: false });
        }
        else{
            this.setState({ textValue: value, offOn: true });
        }   
    }

    onOffSelecLeng = (data)=> {
        this.setState({selecLeng: !(this.state.selecLeng)});  

        if ( !(data === undefined))  {
            this.changeLeng(data)
        }    
    }

    changeLeng = (data)=> {
        console.log(data)

        switch (true){
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
        transService.getTranslation(primaryLeng,secondaryLeng,textValue).then((text) => {
            const texttrans = text.data
            this.props.onAdd({primaryLeng,secondaryLeng,textValue,texttrans});
        })
        this.setState({ textValue: '' , offOn: true});

    }




    render (){
        const  { textValue,primaryLeng,secondaryLeng, offOn,selecLeng } = this.state;

        const selectionLeng = selecLeng ? <ChoiceLang changeLeng={this.changeLeng} ifOnClick={this.onOffSelecLeng}/> : null;

        return (
            <Fragment>
    
                 <h2>{textValue}</h2> 
                 {selectionLeng}

                 <div className='btn-trans'>
                    <Button text={switchLeng(primaryLeng)} styl={true} value={'p'}  ifOnClick={this.onOffSelecLeng}/> 
                    <SpriteSvg id={'arrows'} />                     
                    <Button text={switchLeng(secondaryLeng)} value={'s'}  ifOnClick={this.onOffSelecLeng}/>
                 </div>
                
                 <Textarea textValue={textValue}
                    changeValue={this.changeValue}/>

                 <Button text={"Перекласти"} ifOnClick={this.onTranslator}  offOn={offOn} />

           </Fragment>
        )

    }

}





