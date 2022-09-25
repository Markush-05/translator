import './button.scss';


import SpriteSvg from '../sprite-svg/sprite-svg';

const Button = ({label, addStyle, ifOnClick, btnOffOn, value,title})=> {
    const classes = addStyle ? "btn btn-outline-hotter" : "btn btn-outline-cold ";
    const styles = btnOffOn ?  classes + " disabled" : classes;

    if (!(ifOnClick === undefined)){
       
        return (
            <button type="button" className={styles}
                onClick={(e)=>{ifOnClick(e)}}
                disabled={btnOffOn} value={value}
                title={title}
                >{label}</button>
    )}

    return (
            <button type="button" className={styles}
                >{label}</button>

    )
}

const ButtonSvg = ({label, addStyle, ifOnClick, btnOffOn, iconName})=> {
    const classes = addStyle ? `btn btn-svg ${addStyle}` : "btn  btn-svg";
    
    return (
            <button type="button" className={classes}
                onClick={ (e)=>{ifOnClick(e)} }>
                    
                    <SpriteSvg id={iconName}  />
            </button>

      

    )
}

export  {ButtonSvg};

export default Button;