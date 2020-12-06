import React from 'react';

import Post from './post';
import profile_picture from './media/profile-picture.jpg';
import docked_profile_image from './attachments/media/docked.png';
import attached_post_image from './attachments/media/reactjs.jpg';
import attached_image from './attachments/media/network.jpg';
import './container.css';

class SNComponent extends React.Component{
    render(){
        var text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        return(
            <div className='posts_con' >
                <Post 
                    profile_picture={profile_picture}
                    user_name='Mohammad tanhaei'
                    user_id='uisoftware'
                    post_date='2020-12-04'
                    post_title='react learning course'
                    post_text={text}
                    attachment_type='post'
                    docked_profile_image={docked_profile_image}
                    attached_post_image={attached_post_image}
                    attached_post_title='react toturial'
                    attached_post_text={text}
                    comments={['bah bah che post khargholadeii man in post shoma ro pasandidam va be hamin dalil an ra milikam','soltan post ha']}
                    retweet_number={47}
                    like_number={190}
                />

                <Post 
                    profile_picture={profile_picture}
                    user_name='MohammadReza Valizade'
                    user_id='valizade'
                    post_date='2020-12-05'
                    post_title='machine learning'
                    post_text={text}
                />

                <Post 
                    profile_picture={profile_picture}
                    user_name='Mozafar BagMohammadi'
                    user_id='bagmohammadi'
                    post_date='2020-12-04'
                    post_title='Network learning'
                    post_text={text}
                    attachment_type='image'
                    attached_image={attached_image}
                    like_number={2727527}
                />
            </div>
        );
    }
}

export default SNComponent;