import { useState } from 'react';
import './style.css';

function BGComponent(){

  const [bg_color,bg_color_set] = useState('#838bfc');
  var _input_ref;

  return(
    <div className='area' style={{background:bg_color}}>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <div id="swatch">
        <input type="color" id="color" name="color" value={bg_color} ref={(a)=>_input_ref =a} onChange={()=>bg_color_set(_input_ref.value)}/>
      </div>

      <div id="description">
        <p id="res">
          {bg_color}
        </p>
      </div>
      
    </div>
  );
}

export default BGComponent;