import './result-trans.scss';
import Button, { ButtonSvg } from '../button/button';
import { Fragment } from 'react';
import switchLeng from '../../auxiliary'

const ResultTrans = (props)=> {

    const {   ifOnClick,primaryLeng,secondaryLeng,textValue,texttrans} = props

    
    
    return (
        <Fragment>
            <div className='result-trans'>
                <ButtonSvg ifOnClick={ifOnClick}/>
                <div className='result-trans__item'>
                    <span className='result-trans__pla-hol'>{switchLeng(primaryLeng)}</span>
                    <h3 className='result-trans__text'>{textValue}</h3>
                </div>
                <div className='result-trans__item'>
                    <span className='result-trans__pla-hol'>{switchLeng(secondaryLeng)}</span>
                    <h3 className='result-trans__text'>{texttrans}</h3>
                </div>
            </div>
            <Button text={"Добаби до повторень"} />
        </Fragment>

    )
}

export default ResultTrans;