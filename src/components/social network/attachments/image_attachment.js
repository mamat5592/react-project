import './image_attachment.css';

function ImageAttachment(props){
    return(
        <div id='attachment_con'>
            <img id='attachment_image' src={props.image} alt='temp' />
        </div>
    );
}

export default ImageAttachment;