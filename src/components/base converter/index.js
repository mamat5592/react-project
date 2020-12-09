import React from 'react';
import {convertBase} from 'simple-base-converter';

import './index.css';

class BComponent extends React.Component{
    constructor(){
        super();

        this.state = {
            base : new Array(15).fill(0)
        }

        this.change = this.change.bind(this);
        this.input_limiter = this.input_limiter.bind(this);
    }

    render(){
        let b = new Array(15);
        return(
            <div id='base_con' >
                {
                    this.state.base.map((val,index) => (
                        <div id='single_base_con' key={index} >
                            <label>base {index+2} </label>
                            <input 
                            type='text' 
                            placeholder={val}
                            ref={a=>b[index]=a}
                            onChange={()=>b[index].value!==''?this.change(b[index].value, index):null} 
                            onKeyPress={(e)=>this.input_limiter(e, index)}
                            onBlur={()=>{console.log(b[index]);b[index].value=''}}
                            />
                        </div>
                    ))
                }
            </div>
        );
    }

    change(value, index){

        var array = new Array(this.state.base.length);
        for(var i = 0; i < this.state.base.length; i++){
            if(value.includes('.')){ 
                var before = value.split('.')[0];
                var after = value.split('.')[1];

                if(before === ''){
                    array[i] = '.' + convertBase(after, index+2, i+2);
                }else if(after === ''){
                    array[i] = convertBase(before, index+2, i+2) + '.';
                }else{
                    array[i] = convertBase(before, index+2, i+2) + '.' + convertBase(after, index+2, i+2);
                }
            }else array[i] = convertBase(value, index+2, i+2);
        }

        this.setState({base:[...array]})
    }

    input_limiter(event, index){
        switch(index){
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
                if((isNaN(event.key) || event.key > index +  1) && event.key!=='.' ){
                    event.preventDefault();
                }
                break;
            case 9:
                if(!'0123456789.a'.includes(event.key)){
                    event.preventDefault();
                }
                break;
            case 10:
                if(!'0123456789.ab'.includes(event.key)){
                    event.preventDefault();
                }
                break;
            case 11:
                if(!'0123456789.abc'.includes(event.key)){
                    event.preventDefault();
                }
                break;
            case 12:
                if(!'0123456789.abcd'.includes(event.key)){
                    event.preventDefault();
                }
                break;
            case 13:
                if(!'0123456789.abcde'.includes(event.key)){
                    event.preventDefault();
                }
                break;
            case 14:
                if(!'0123456789.abcdef'.includes(event.key)){
                    event.preventDefault();
                }
                break;
            default:
                return "don't worry";
        }
    }
}





export default BComponent;