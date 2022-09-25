import React, { Component } from 'react';

import icon from './eror.png';

export default class ErrorBoundery extends Component{
    state= {
        hasError: false
    }

    componentDidCatch(){
        this.setState({
            hasError: true
        })

    }

    render() {

        if (this.state.hasError){
            return (
                <div Style={"text-align: center;"} >
                    <h3 Style={"color: red"}>ERRORE</h3>
                    <img src={icon} alt='error icon'></img>
                </div>
              
            )
        }

        return this.props.children;
        
    }

}