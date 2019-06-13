import React from 'react';
import PropTypes from 'prop-types';

const CommentSection = props => {
  return (
    <div>
    {console.log(props.username)}
    {console.log(props.text)}
        <h4>{props.username}</h4>
        <p>{props.text}</p>
    </div>
);
}
Comment.propTypes = {
  username: PropTypes.string.isRequired
}

export default CommentSection;