
import './day_detail.css';
import icon from './media/wi-cloudy.svg';

export default function SingleDay(props){
    if(!props.object.hasOwnProperty(0)){
        return(
            <div className="houre_rec"><p>choose one</p></div>
        );
    }
    return(
        <div id="top_div">
            {show(props.object)}
        </div>
    );
}

function show(obj){
    var tag = new Array(obj.length);
    for(var i = 0;i<tag.length;i++){
        if(i === tag.length -1 ){
            tag[i] = 
            <div key={i}>
                <div className="houre_rec">
                    <img src={icon} alt={obj[i].description} id="ico"/>
                    <p id="time">{obj[i].time}</p>
                    <p id="temp1">{obj[i].max_temp}&deg;</p>
                    <p id="temp2">{obj[i].min_temp}&deg;</p>
                </div>
            </div>;
            break;
        }
        tag[i] = 
        <div key={i}>
            <div className="houre_rec">
                <img src={icon} alt={obj[i].description} id="ico"/>
                <p id="time">{obj[i].time}</p>
                <p id="temp1">{obj[i].max_temp}&deg;</p>
                <p id="temp2">{obj[i].min_temp}&deg;</p>
            </div>
            <hr style={{border:0,borderTop: '1px solid #DDDDDD',margin:0}} />
        </div>;
    }
    return tag;
}