import './button.css';


import SpriteSvg from '../sprite-svg/sprite-svg';

const Button = ({text, styl, ifOnClick, offOn, value})=> {

    const classes = styl ? "btn btn-outline-hotter" : "btn btn-outline-cold ";
    const styles = offOn ?  classes + " disabled" : classes;
   // const disableBtn = offOn ? disabled : null;
   

    if (!(ifOnClick === undefined)){
        return (
            <button type="button" className={styles}
                onClick={(e)=>{ifOnClick(e.target.offsetParent.value)}}
                disabled={offOn} value={value}
                ><span>{text}</span></button>
    )}

    return (
            <button type="button" className={styles}
                ><span>{text}</span></button>

    )
}

const ButtonSvg = ({text, styl, ifOnClick, offOn})=> {

    const classes = styl ? "btn btn-outline-cold " : "btn  btn-svg";
   

    return (
            <button type="button" className={classes}
                onClick={ (e)=>{ifOnClick(e)} }>
                    
                    <SpriteSvg id={"cross"}  />
            </button>

      

    )
}

export  {ButtonSvg};

export default Button;