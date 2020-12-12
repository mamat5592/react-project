import React from 'react';

import './style.css';
import sound from './heartbeat.mp3';

class MComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            header_context : 20,
            beat : 0.333,
            isPlay : false
        };

        this.playAudio = this.playAudio.bind(this);
        this.pauseAudio = this.pauseAudio.bind(this);
    }

    componentDidUpdate(prevProps,prevState) {
        if(this.state.beat !== prevState.beat){
            clearInterval(this.intervalID);
        }
    }

    componentWillUnmount(){
        clearInterval(this.intervalID);
    }

    render(){

        var _range_ref;
        var _audio_ref;

        return(
            <div className='main'>
                <audio id='audio' ref={(a)=>_audio_ref = a}>
                    <source src={sound} />
                </audio>

                <div id='container' onClick={this.state.isPlay?()=>this.pauseAudio():()=>this.playAudio(_audio_ref,this.state.beat)}>
                    <h1 id='counter'>{this.state.header_context}</h1>
                    <div id='play_container'>
                        <svg id='svg' width="100" height="100">
                            <circle cx="50%" cy="50%" r="60" fill="rgb(59,173,227)"/>
                        </svg>
                        {this.state.isPlay?<i className="fas fa-pause ico" />:<i className="fas fa-play ico" />}
                    </div>
                </div>
                <input 
                type="range" 
                min="20" 
                max="220" 
                defaultValue='20' 
                className="range" 
                ref={(a)=> _range_ref = a} 
                onChange={()=> this.setState({
                    header_context:_range_ref.value,
                    beat:(_range_ref.value/60).toFixed(3),
                    isPlay:false
                })
                }/>
            </div>
        );
    }

    playAudio(x,t) {
        this.intervalID = setInterval(()=>x.play(),t * 1000);
        this.setState({isPlay : true});
    }

    pauseAudio() {
        clearInterval(this.intervalID);
        this.setState({isPlay : false});
    }
}

export default MComponent;