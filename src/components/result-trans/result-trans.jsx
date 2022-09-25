import './result-trans.scss';
import Button, { ButtonSvg } from '../button/button';
import { Fragment } from 'react';
import switchLeng from '../../auxiliary'

const ResultTrans = (props)=> {

    const {   ifOnClick,primaryLeng ,secondaryLeng ,textValue,texttrans} = props

    return (
        <Fragment>
            <div className='result-trans'>
                <ButtonSvg ifOnClick={ifOnClick} addStyle={"result-trans__btn"} iconName={"cross"}/>
                
                {itemRender(primaryLeng,textValue)}

                {itemRender(secondaryLeng,texttrans)}

            </div>
            
        </Fragment>

    )
}

export default ResultTrans;


const itemRender = (leng = ' ',text) => {

    return (
        <div className='result-trans__item'>
            <span className='result-trans__pla-hol'>{switchLeng(leng)}</span>
            <h3 className='result-trans__text'>{text}</h3>
        </div>

    )

}
