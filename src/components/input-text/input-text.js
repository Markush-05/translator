import React,{Component} from 'react';

import './input-text.css';


export default class InputText extends Component {

      state = {
        term: '',
        emphasis: false
    };

    valueText = (e) => {
      const term = e.target.value;
      this.setState({ term });
      //this.props.onSearchChange(term)

      if ("enables" === term ){
          this.setState({ emphasis: true });
          new Audio('https://noisefx.ru/noise_base/zvon/01070.mp3').play(); 
          console.log('enables ')
          this.props.onAdd()

      }
    }

 
    complianceTest = () => {

    }
  
 

    render (){

    //  console.log(this.props.children)

      const styl = this.state.emphasis ? 'form-control form-control-lg is-valid' :'form-control form-control-lg '

      return (
        <div className="form-group col">
          <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge">Кількість повторень <span>{this.props.children}</span> / 5</label>
          <input className={styl} type="text" placeholder="Введіть переклад"
              onChange={this.valueText} value={this.state.term} id="inputLarge"/>
        </div>
      );

    }

};


