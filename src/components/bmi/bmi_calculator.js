import React from 'react';

import Result from './result';
import './bmi_calculator.css';

class BMIComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            weight:0,
            height:0
        };

        this.BMICalculate = this.BMICalculate.bind(this);
        this.range_conector = this.range_conector.bind(this);
        this.input_limiter = this.input_limiter.bind(this);
    }
    
    componentDidUpdate() {
        this.BMICalculate();
    }

    render(){
        return(
            <div className='container'>
                <svg width="200" height="200" style={{position:'absolute'}}>
                    <circle cx="50" cy="50" r="80" fill="#457b9d"/>
                </svg>
                <svg width="200" height="200" style={{position:'absolute',left:'25vh'}}>
                    <circle cx="50" cy="50" r="20" fill="#457b9d"/>
                </svg>
                <svg width="200" height="200" style={{position:'absolute',top:'20vh'}}>
                    <circle cx="50" cy="50" r="40" fill="#457b9d"/>
                </svg>

                <div className='bmi'>
                    {this.BMICalculate()}
                    <form className='bmi_form' onReset={()=>this.setState({weight:0,height:0})}>
                        <div className='f_container'>
                            <input 
                                type='text' 
                                maxLength='3' 
                                className ='1 text_inputs' 
                                ref={(a) => this._weight_text = a} 
                                onChange={(e)=>{this.setState({weight:e.target.value});this.range_conector(e)}} 
                                onKeyPress={(e)=>this.input_limiter(e)}
                            />
                            <div>
                            <i className="fas fa-weight" style={{color:'#495057'}} />
                            </div>
                            <input 
                                type='range' 
                                className ='1 range_inputs'
                                ref={(a) => this._weight_range = a} 
                                defaultValue='20' min='20' max='300' 
                                onChange={(e)=>{this.setState({weight:e.target.value});this.range_conector(e)}}
                            />
                        </div>
                        <div className='s_container'>
                            <input 
                                type='text' 
                                maxLength='3' 
                                className ='2 text_inputs' 
                                ref={(a) => this._height_text = a} 
                                onChange={(e)=> {this.setState({height:e.target.value});this.range_conector(e)}} 
                                onKeyPress={(e)=>this.input_limiter(e)}
                            />
                            <div>
                            <i className="fas fa-ruler" style={{color:'#495057'}} />
                            </div>
                            <input 
                                type='range' 
                                className ='2 range_inputs' 
                                ref={(a) => this._height_range = a} 
                                defaultValue='50' 
                                min='50' 
                                max='300' 
                                onChange={(e)=>{this.setState({height:e.target.value});this.range_conector(e)}}
                            />
                        </div>
                        <input type='reset' className ='reset_input' value='reset' />
                    </form>

                    
                </div>

                <div className='description'>
                    <div className='description_items' id='sel01'>
                        <p>Underweight</p>
                        <svg height='30' >
                            <rect  width='5%' height='100%' x='95%'/>
                        </svg>
                    </div>
                    <div className='description_items' id='sel02'>
                        <p>Healthy Weight</p>
                        <svg height='30' >
                            <rect  width='5%' height='100%' x='95%'/>
                        </svg>
                    </div>
                    <div className='description_items' id='sel03'>
                        <p>Overweight</p>
                        <svg height='30' >
                            <rect  width='5%' height='100%' x='95%'/>
                        </svg>
                    </div>
                    <div className='description_items' id='sel04'>
                        <p>Obese</p>
                        <svg height='30' >
                            <rect  width='5%' height='100%' x='95%'/>
                        </svg>
                    </div>
                    <div className='description_items' id='sel05'>
                        <p>Severely Obese</p>
                        <svg height='30' >
                            <rect  width='5%' height='100%' x='95%'/>
                        </svg>
                    </div>
                    <div className='description_items' id='sel06'>
                        <p>Morbidly Obese</p>
                        <svg height='30' >
                            <rect  width='5%' height='100%' x='95%'/>
                        </svg>
                    </div>

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 1440 200" 
                        style={{position:'absolute',bottom:0}}
                    >
                        <path 
                            fill="#457b9d" 
                            fillOpacity="1" 
                            d="M0,32L48,48C96,64,192,96,288,138.7C384,181,480,235,576,245.3C672,256,768,224,864,181.3C960,139,1056,85,1152,90.7C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                        </path>
                    </svg>
                </div>
            </div>
        );
    }

    input_limiter(event){
        if(isNaN(event.key)){
            event.preventDefault();
        }
    }
    
    range_conector(event){
        if(event.target.className[0] === '1'){
            if(event.target.type === 'text'){
                this._weight_range.value = event.target.value;
            }else{
                this._weight_text.value = event.target.value;
            }
        }else{
            if(event.target.type === 'text'){
                this._height_range.value = event.target.value;
            }else{
                this._height_text.value = event.target.value;
            }
        }
    }
    
    BMICalculate(){
        if(this.state.weight && this.state.height){
            var w = this.state.weight;
            var h = this.state.height/100;
            var text = (w/(h*h)).toFixed(1);
            return <Result text={text}/>
        }else{
            return <Result />
        }
    }
}

export default BMIComponent;