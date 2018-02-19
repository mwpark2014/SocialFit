import React, { Component } from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import styles
import styles from './DashPostBox.css';

// Actions
import { addPostRequest } from '../../Post/PostActions';

export class DashPostBox extends Component {
  constructor(props) {
    super(props);

    this.state = { content: '' };
    this.handlePostSubmit = this.handlePostSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handlePostSubmit = () => {
    this.props.addPostRequest({ author: this.props.author,
        content: this.state.content,
        target: this.props.target,
      });
  }

  handleInputChange(event) {
    this.setState({
      content: event.target.value,
    });
  }

  render() {
    return (
      <div className={`${styles.container} ${styles.clearfix}`}>
        <textarea
          className={styles.postBox} onChange={this.handleInputChange} value={this.state.content}
          placeholder="Post something on your wall!" required
        />
        <Button className={styles.postButton} onClick={this.handlePostSubmit}>Post</Button>
      </div>
    );
  }
}

DashPostBox.propTypes = {
  addPostRequest: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default connect(null, { addPostRequest })(DashPostBox);
