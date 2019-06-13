import React from 'react';

import PropTypes from 'prop-types';

const PostContainer = props => {
  return (


        <div className="data">
            {props.data.map(item => (
            <div>
                <div key={item.username}>
              <h1>{item.username}</h1>
              <img src={item.thumbnailUrl} alt=""/>
              <h4>{item.likes}</h4>
              <h4>{item.timestamp}</h4>
              
            </div>
            </div>
          ))}
      </div>
      
    
  )
}
      
PostContainer.propTypes = {
    item: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        img: PropTypes.string,
        likes: PropTypes.number.isRequired,
        timestamp: PropTypes.string,
        comments: PropTypes.arrayOf(
          PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
          })
        )
      })
    )
  }
 
  export default PostContainer;












