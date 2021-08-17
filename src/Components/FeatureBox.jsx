import React from 'react';

 const FeatureBox = (props) => {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2>{props.title}</h2>
                <p>Lorem ipsum is a sample text that is used for various purpose</p>
            </div>
            
        </div>
    )
}
export default FeatureBox;