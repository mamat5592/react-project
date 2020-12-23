import React from 'react';
import axios from 'axios';

import SingleDay from './day_detail';
import DayInWeek from './week_detail';
import loading from './media/day_detail_placeholder.gif';
import './main.css';

export default class WComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            weather_json : {},
            single_day_content : {}
        }
        this.day_detail_fetch = this.day_detail_fetch.bind(this);
        this.count_duplicate = this.count_duplicate.bind(this);
        this.single_day_detail_fetch = this.single_day_detail_fetch.bind(this);
    }

    componentDidMount(){
        axios.get(
            "https://api.openweathermap.org/data/2.5/forecast?q=ilam&appid=59d9fa0cf6743e3b7d170bf7ba5ff223&units=metric"
        ).then(({data}) => {
            this.setState({weather_json:data})
        });
    }

    render(){
        if(!this.state.weather_json.hasOwnProperty('cod')){
            return(
                <div id = 'loading_con'>
                    <img src={loading} alt='hich'/>
                    <p>Loading...</p>
                </div>
            );
        }

        return(
            <div id='holder' >
                <div>
                    <SingleDay id = 'bigcard' object={this.state.single_day_content}/>
                </div>
                <div id='mini_days_con'>
                    <div id='inner_con'>
                        {this.day_detail_fetch().map((item, index)=>(
                            <div key={index} onClick={()=>this.setState({single_day_content:this.single_day_detail_fetch(index)})}>
                                <DayInWeek 
                                day_name={item['day_name']} 
                                max_temp={item['max_temp']} 
                                min_temp={item['min_temp']} 
                                />
                            </div>
                            
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    single_day_detail_fetch(index){
        var arr = new Array(40);
        var temp_arr = new Array(40);

        var i;
        for(i = 0 ;i < 40;i++){
            arr[i] = this.state.weather_json.list[i];
            temp_arr[i] = new Date(this.state.weather_json.list[i].dt_txt).getDate();
        }

        var number_of_every_day = this.count_duplicate(temp_arr);
        var list_of_str_keys = Object.keys(number_of_every_day);
        var list_of_int_keys = list_of_str_keys.map((e)=>parseInt(e));

        var new_arr = [];
        for(i = 0 ;i < 40;i++){
            if(list_of_int_keys[index] === temp_arr[i]){
                new_arr.push(arr[i]);
            }
        }
        
        var obj = [];
        new_arr.forEach(element => {
            obj.push({
                time:element.dt_txt.split(' ')[1],
                max_temp:element.main.temp_max,
                min_temp:element.main.temp_min,
                icon:element.weather[0].description,
            })
        });
        return obj;
    }

    day_detail_fetch(){

        var arr = new Array(40);
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var i;
        var j;

        for(i = 0 ;i < arr.length;i++){
            arr[i] = new Date(this.state.weather_json.list[i].dt_txt).getDate();
        }
        var number_of_every_day = this.count_duplicate(arr);
        var list_of_str_keys = Object.keys(number_of_every_day);
        var list_of_int_keys = list_of_str_keys.map((e)=>parseInt(e));

        var obj;

        if(list_of_int_keys.length < 6){
            obj =[
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                }
            ]
            
            j = 0;
            for(i = 0 ;i < number_of_every_day[list_of_int_keys[0]];i++,j++){
                obj[0].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[0].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[0].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[0].max_temp = (obj[0].max_temp / number_of_every_day[list_of_int_keys[0]]).toFixed(1);
            obj[0].min_temp = (obj[0].min_temp / number_of_every_day[list_of_int_keys[0]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[1]];i++,j++){
                obj[1].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[1].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[1].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[1].max_temp = (obj[1].max_temp / number_of_every_day[list_of_int_keys[1]]).toFixed(1);
            obj[1].min_temp = (obj[1].min_temp / number_of_every_day[list_of_int_keys[1]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[2]];i++,j++){
                obj[2].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[2].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[2].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[2].max_temp = (obj[2].max_temp / number_of_every_day[list_of_int_keys[2]]).toFixed(1);
            obj[2].min_temp = (obj[2].min_temp / number_of_every_day[list_of_int_keys[2]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[3]];i++,j++){
                obj[3].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[3].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[3].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[3].max_temp = (obj[3].max_temp / number_of_every_day[list_of_int_keys[3]]).toFixed(1);
            obj[3].min_temp = (obj[3].min_temp / number_of_every_day[list_of_int_keys[3]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[4]];i++,j++){
                obj[4].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[4].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[4].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[4].max_temp = (obj[4].max_temp / number_of_every_day[list_of_int_keys[4]]).toFixed(1);
            obj[4].min_temp = (obj[4].min_temp / number_of_every_day[list_of_int_keys[4]]).toFixed(1);

        }else{
            obj =[
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                },
                {
                    day_name: '',
                    max_temp: 0,
                    min_temp: 0
                }
            ]
            
            j = 0;
            for(i = 0 ;i < number_of_every_day[list_of_int_keys[0]];i++,j++){
                obj[0].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[0].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[0].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[0].max_temp = (obj[0].max_temp / number_of_every_day[list_of_int_keys[0]]).toFixed(1);
            obj[0].min_temp = (obj[0].min_temp / number_of_every_day[list_of_int_keys[0]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[1]];i++,j++){
                obj[1].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[1].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[1].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[1].max_temp = (obj[1].max_temp / number_of_every_day[list_of_int_keys[1]]).toFixed(1);
            obj[1].min_temp = (obj[1].min_temp / number_of_every_day[list_of_int_keys[1]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[2]];i++,j++){
                obj[2].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[2].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[2].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[2].max_temp = (obj[2].max_temp / number_of_every_day[list_of_int_keys[2]]).toFixed(1);
            obj[2].min_temp = (obj[2].min_temp / number_of_every_day[list_of_int_keys[2]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[3]];i++,j++){
                obj[3].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[3].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[3].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[3].max_temp = (obj[3].max_temp / number_of_every_day[list_of_int_keys[3]]).toFixed(1);
            obj[3].min_temp = (obj[3].min_temp / number_of_every_day[list_of_int_keys[3]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[4]];i++,j++){
                obj[4].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[4].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[4].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[4].max_temp = (obj[4].max_temp / number_of_every_day[list_of_int_keys[4]]).toFixed(1);
            obj[4].min_temp = (obj[4].min_temp / number_of_every_day[list_of_int_keys[4]]).toFixed(1);

            for(i = 0 ;i < number_of_every_day[list_of_int_keys[5]];i++,j++){
                obj[5].day_name = days[new Date(this.state.weather_json.list[j].dt_txt).getDay()];
                obj[5].max_temp += this.state.weather_json.list[j].main.temp_max;
                obj[5].min_temp += this.state.weather_json.list[j].main.temp_min;
            }
            obj[5].max_temp = (obj[5].max_temp / number_of_every_day[list_of_int_keys[5]]).toFixed(1);
            obj[5].min_temp = (obj[5].min_temp / number_of_every_day[list_of_int_keys[5]]).toFixed(1);
        }
        return obj;
    }
    
    count_duplicate(a){
        let counts = {}
    
        for(let i =0; i < a.length; i++){ 
            if (counts[a[i]]){
            counts[a[i]] += 1
            } else {
            counts[a[i]] = 1
            }
        }
        return counts;
   }
}