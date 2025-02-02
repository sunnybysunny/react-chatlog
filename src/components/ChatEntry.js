import React from 'react';
import './ChatEntry.css';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const currentYear = new Date().getFullYear();
  const year = currentYear - new Date(props.timeStamp).getFullYear();

  const changeLike = props.liked ? '❤️' : '🤍';

  return (
    <div className="chat-entry local">
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">{year} years ago</p>
        <button
          className="like"
          onClick={() => props.setUpdateLikes(props.id, !props.liked)}
        >
          {changeLike}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  setUpdateLikes: PropTypes.func.isRequired,
};

export default ChatEntry;
