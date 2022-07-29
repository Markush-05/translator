import './textarea.css';

const Textarea = ({textValue, changeValue})=> {

    return (         
        <div className="form-row">
            <textarea className="form-row__input" type="text" cols="30" rows="10" maxLength="110"
                placeholder="Введіть текст ..."
                onChange={(e) => {changeValue(e)}} 
                onKeyPress={(e)=> console.log(e.code)}
                 value= {textValue} ></textarea>
        </div>

    )
}

export default Textarea;