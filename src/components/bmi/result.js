import React from 'react';

import './result.css';

class Result extends React.Component{
    constructor(props){
        super(props);
        this.color_maker = this.color_maker.bind(this);
    }

    render(){
        return(
            <div>
                <p className='bmi_result' style={this.color_maker()}>{this.props.text}</p>
                <p>{this.props.result_text}</p>
            </div>
        );
    }

    color_maker(){
        var value = parseFloat(this.props.text).toFixed(1);
        if(value < 18.5) {
            return {color:'white'};
        }
        if(value >= 18.5 && value <= 24.9) {
            return {color:'green'};
        }
        if(value >= 25 && value <= 29.9) {
            return {color:'yellow'};
        }
        if(value >= 30 && value <= 34.9) {
            return {color:'orange'};
        }
        if(value >= 35 && value <= 39.9) {
            return {color:'red'};
        }
        if(value >= 40) {
            return {color:'black'};
        }
    }
}

Result.defaultProps = {
    text:'0',
    color:'white'
}

export default Result;