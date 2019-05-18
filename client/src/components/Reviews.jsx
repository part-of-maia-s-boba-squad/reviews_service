import React, {Component} from 'react';
import axios from 'axios';

class Reviews extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      reviews: [],
      users: []
    }

    this.getReviews = this.getReviews.bind(this);

  }

  componentDidMount() {
    this.getReviews(3)
  }

  getReviews (restaurant_id) {
    axios.get(`/restaurant?id=${restaurant_id}`)
    .then (data => {
      console.log('data received: ',data.data)
      this.setState ({
        reviews: data.data
      })
    })
    .catch( err => {
      console.log('Error: ', err)
    })
  } 
  

  render () {
    
    return (
      <div className="overall_content">
        <h2>What 1293 People Are Saying </h2>
        {/* create a line with css for h3 element */}
        <div className="rating_left_col">
          <div>Overall ratings and reviews</div>
          <div>Reviews can only be made by diners who have eaten at this restaurant</div>
          <div id="stars">4.7 based on recent ratings</div>        
        {/* use css to create stars here */}
        <div className="categories_score">4.6 | 4.6 | 4.6 | 4.3 </div>
        <div className="categories_name">Food | Service | Ambience | Value</div>
        </div>
        <div className="rating_right_col">

        </div>
        <div className="reviews_section">
        
       </div>
      </div>
    )
  }
}


export default Reviews;