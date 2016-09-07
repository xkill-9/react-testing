import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const propTypes = {
  comments: PropTypes.array,
};

function CommentList(props) {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
  return (
    <ul className="comment-list">{list}</ul>
  );
}

CommentList.propTypes = propTypes;

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
