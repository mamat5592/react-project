import React from 'react';
import './index.css';

import card1 from './media/keshavarzi.jpg';
import card2 from './media/mehre-eghtesade-novin.jpg';
import card3 from './media/meli.jpg';
import card4 from './media/saman.jpg';
import card5 from './media/sina.jpg';
import card6 from './media/tejarat.jpg';

export default class BCComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            card_image : '',
            overlay_content : {
                card_number : '',
                owner_name : '',
                cvv2 : '',
                month : '',
                year: ''
            }
        }
        this.card_number_limiter = this.card_number_limiter.bind(this);
        this.owner_name_limiter = this.owner_name_limiter.bind(this);
        this.choose_image = this.choose_image.bind(this);
    }
    
    
    render(){

        let card_number;
        let owner_name;
        let cvv2;
        let month;
        let year;

        return(
            <div id = 'all_con'>
                <div id='card_image_con'>
                    {this.state.card_image}
                </div>
                <div 
                id='card_info_con' 
                onChange={
                    ()=>{
                        this.setState({card_image:this.choose_image(card_number, owner_name, cvv2, month, year)});
                    }
                }>
                    <input 
                    id='card_number'
                    placeholder = 'xxxx-xxxx-xxxx-xxxx'
                    type='text' minLength='16' 
                    maxLength='16' 
                    onKeyPress={e=>this.card_number_limiter(e)} 
                    ref={a=>card_number=a} />
                    <input 
                    id='owner_name' 
                    placeholder='مصطفی سیفی'
                    type='text' 
                    minLength='5' 
                    maxLength='25' 
                    onKeyPress={e=>this.owner_name_limiter(e)} 
                    ref={a=>owner_name=a} />
                    <div id='mini_con'>
                        <input 
                        id='cvv2'
                        placeholder='cvv2'
                        type='text' 
                        minLength='3' 
                        maxLength='4' 
                        onKeyPress={e=>this.card_number_limiter(e)} 
                        ref={a=>cvv2=a} />
                        <input 
                        id='month'
                        placeholder='ماه'
                        type='text' 
                        minLength='2' 
                        maxLength='2' 
                        onKeyPress={e=>this.card_number_limiter(e)} 
                        ref={a=>month=a} />
                        <p>/</p>
                        <input 
                        id='year'
                        placeholder='سال'
                        type='text' 
                        minLength='2' 
                        maxLength='2' 
                        onKeyPress={e=>this.card_number_limiter(e)} 
                        ref={a=>year=a} />
                    </div>
                </div>
            </div>
        );
    }
    
    card_number_limiter(event){
        if(isNaN(event.key))event.preventDefault();
    }
    
    owner_name_limiter(event){
        var p = /^[\u0600-\u06FF\s]+$/;
        if (!p.test(event.key)) event.preventDefault();
    }
    
    choose_image(b, c, d, e, f){

        let source;

        let card_number = b.value;
        let owner_name = c.value;
        let cvv2 = d.value;
        let month = e.value;
        let year = f.value;

        if(b.value.length >= 6){
            switch(b.value.substring(0,6)){
                case '603799':
                    source = card3;
                    break;
                case '603770':
                    source = card1;
                    break;
                case '627412':
                    source = card2;
                    break;
                case '621986':
                    source = card4;
                    break;
                case '639346':
                    source = card5;
                    break;
                case '627353':
                    source = card6;
                    break;
                default:
                    return 'card not found';
            }
            return (
                <div id='card_info'>
                    <img id='card_image' className='all_chn' src={source} alt='not loaded'/>
                    <p id='overlay_card_number' className='all_chn' >{card_number}</p>
                    <p id='overlay_owner_name' className='all_chn' >{owner_name}</p>
                    <p id='overlay_cvv2' className='all_chn' >cvv2 : {cvv2}</p>
                    <p id='overlay_month' className='all_chn' >{month}</p>
                    <p id='overlay_year' className='all_chn' >14{year}/</p>
                </div>
            );
        }
    }
}