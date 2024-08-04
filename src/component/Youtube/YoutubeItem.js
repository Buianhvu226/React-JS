import React from 'react';

const YoutubeItem = (props) => {
    return (
        <div className={`youtube-item ${props.className}`}>
        <div className="youtube-image">
          <img src={props.image} alt="youtube-thumbnail" />
        </div>
  
        <div className="youtube-content">
          <img src={props.author} alt="" />
          <div className="youtube-content-info">
            <h3>{props.title}</h3>
            <h4>{props.author_name}</h4>
          </div>
        </div>
      </div>
    );
};

export default YoutubeItem;