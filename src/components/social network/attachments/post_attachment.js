import React from 'react';

import './post_attachment.css';

class PostAttachment extends React.Component{
    render(){
        return(
            <div className='attachment_con'>
                <img className='docked_profile_image' src={this.props.docked_profile_image} alt='temp' />
                {this.props.attached_post_image !== 'undefind'?<img className='attachment_post_image' src={this.props.attached_post_image} alt='temp' />:null}
                <h4 className='attachment_post_title'>{this.props.attached_post_title}</h4>
                <p className='attachment_post_text'>{this.props.attached_post_text}</p>
            </div>
        );
    }
}

export default PostAttachment;