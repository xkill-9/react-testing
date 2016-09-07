import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './commentActions';

const propTypes = {
  saveComment: PropTypes.func,
};

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        >
        </textarea>
        <button type="submit" >Submit Comment</button>
      </form>
    );
  }
}

CommentBox.propTypes = propTypes;

export default connect(null, actions)(CommentBox);
