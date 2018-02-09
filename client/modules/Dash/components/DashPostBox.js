import React from 'react';
import { Button } from 'react-bootstrap';

// Import styles
import styles from './DashPostBox.css';

export function DashPostBox(props) {
  // handleCommentSubmit(comment) {
  //     let comments = this.state.data;
  //     comment.id = Date.now();
  //     let newComments = comments.concat([comment]);
  //     this.setState({ data: newComments })
  //     axios.post(this.props.url, comment)
  //         .catch(err => {
  //             console.error(err);
  //             this.setState({ data: comments })
  //         });
  // }
  return (
    <div>
      <textarea className={styles.postBox} rows="1" placeholder="Post something on your wall!" required></textarea>
      <Button>Post</Button>
    </div>
  );
}
export default DashPostBox;
