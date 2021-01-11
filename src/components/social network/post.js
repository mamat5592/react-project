import React from 'react';
import {connect} from 'react-redux';

import { addComment } from './redux/actions';
import PostAttachment from './attachments/post_attachment';
import ImageAttachment from './attachments/image_attachment';
import './post.css';

class Post extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comments:[],
            comment_number : this.props.content.length,
            is_commented: false,
            retweet_number : this.props.retweet_number,
            is_retweeted : false,
            like_number : this.props.like_number,
            is_liked : false,
        }
    }

    render(){
        let b;
        let comments;
        return(
            <div className='post_con' >
                <div className='info_con'>
                    <img className='profile_picture'  src={this.props.profile_picture} alt='temp' />
                    <h3 className='user_name'>{this.props.user_name}</h3>
                    <h4 className='user_id'>@{this.props.user_id}</h4>
                </div>

                <hr style={{border:0,borderTop: '1px solid #DDDDDD',margin:0}} />
                
                <div className='post_content'>
                    <h4 className='post_title'>{this.props.post_title}</h4>
                    <p className='post_text'>{this.props.post_text}</p>
                    {this.insert_attachment()}
                </div>

                <hr style={{border:0,borderTop: '1px solid #DDDDDD',margin:0}} />

                <div className='comments' ref={a=>comments = a}>
                    {
                    // this.props.content.map((comment, index) => (
                    //     <p key={index}>{comment}</p>
                    // ))
                    }
                    <form onSubmit={(e)=>this.add_comment(e, b)} >
                        <input id='inp_field' type='text' ref={a=>b=a} minLength='2' required/>
                        <input id='inp_submit' type='submit' value='send' />
                    </form>
                </div>
                
                <hr style={{border:0,borderTop: '1px solid #DDDDDD',margin:0}} />

                <div className='opt_con'>
                    <div 
                    className='comment footer_opt' 
                    title='comment' 
                    onClick={
                        ()=>{
                            if(this.state.is_commented){
                                comments.style = 'display:none';this.setState({is_commented:false})
                            }
                            else{
                                comments.style = 'display:inline-block';
                                this.setState({is_commented:true})
                            }
                        }
                    }>
                        <div className="far fa-comment fa-lg" style={this.state.comment_number === 0?{color: 'gray'}:{color: '#339af0'}} />
                        <h5>{this.state.comment_number}</h5>
                    </div>
                    <div 
                    className='retweet footer_opt' 
                    title='retweet' 
                    onClick={
                        ()=>{
                            if(this.state.is_retweeted){
                                this.setState({retweet_number:this.state.retweet_number - 1,is_retweeted:false})
                            }else{
                                this.setState({retweet_number:this.state.retweet_number + 1,is_retweeted:true})
                            }
                        }
                    }>
                        <div className='fas fa-retweet fa-lg' style={this.state.is_retweeted?{color: '#20c997'}:{color: 'gray'}}/>
                        <h5>{this.state.retweet_number}</h5>
                    </div>
                    <div 
                    className='like footer_opt' 
                    title='like' 
                    onClick={
                        ()=>{
                            if(this.state.is_liked){
                                this.setState({like_number:this.state.like_number - 1,is_liked:false})
                            }else{
                                this.setState({like_number:this.state.like_number + 1,is_liked:true})
                            }
                        }
                    }>
                        <div className={this.state.is_liked?'fas fa-heart fa-lg':'far fa-heart fa-lg'} style={{color: '#ff6b6b'}}/>
                        <h5>{this.state.like_number}</h5>
                    </div>
                    <h5 className='post_date'>{this.props.post_date}</h5>
                </div>
            </div>
        );
    }

    add_comment(event, input_field){
        event.preventDefault();
        this.props.addComment(input_field.value, this.props.ind)
        input_field.value = '';
    }

    insert_attachment(){
        if(this.props.attachment_type === 'post'){
            return(
                <PostAttachment
                    docked_profile_image={this.props.docked_profile_image}
                    attached_post_image={this.props.attached_post_image}
                    attached_post_title={this.props.attached_post_title}
                    attached_post_text={this.props.attached_post_text}
                />
            );
        }else if(this.props.attachment_type === 'image'){
            return <ImageAttachment image={this.props.attached_image} />;
        }
    }
}

Post.defaultProps = {
    comments: [],
    comment_number : 0,
    retweet_number : 0,
    like_number : 0
}

const mapStateToProps = state => {
    return state.add_comment;
}

export default connect(
    mapStateToProps,
    { addComment }
)(Post);