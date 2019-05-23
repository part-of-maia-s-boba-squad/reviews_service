import React, {Component} from 'react';
import FeedList from './FeedList.jsx'

class Feeds extends React.Component {


  render() { 
    const data = this.props.data;
    
    console.log('feeds: ', data)

    return (
      <div className="review_content">
      {data.map((review, index) => 
      <FeedList value={review} key={index} />
      )}
        
      </div>
    )
  }
}

export default Feeds;