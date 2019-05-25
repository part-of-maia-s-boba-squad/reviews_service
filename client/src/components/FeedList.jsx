import React, {Component} from 'react';
import Feed from './Feed.jsx'

class FeedList extends React.Component {


  render() { 
    const data = this.props.data;


    return (
      <div className="review_content">
      {data.map((review, index) => 
      <Feed value={review} key={index} />
      )}
        
      </div>
    )
  }
}

export default FeedList;