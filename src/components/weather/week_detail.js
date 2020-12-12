import React from 'react';

import './week_detail.css';

export default class DayInWeek extends React.Component{

    render(){
        return(
            <div id='day_in_week'>
                <p id='mini_day_name'>{this.props.day_name}</p>
                <p id='mini_max_temp'>{this.props.max_temp}&deg;</p>
                <p id='mini_min_temp'>{this.props.min_temp}&deg;</p>
            </div>
        );
    }
}