import React from 'react';
import YoutubeItem from './YoutubeItem';
import { YoutubeData } from '../../Data';

const YoutubeList = () => {
    return (
        <div className="youtube-list">
        {YoutubeData.map((item, index) => {
          let newClass = (index === 1 ? 'abc' : '');
          return (
            <YoutubeItem
              image={item.image}
              title={item.title}
              author={item.author}
              author_name={item.author_name}
              className={newClass}
            ></YoutubeItem>
          );
        })}
      </div>
    );
};

export default YoutubeList;