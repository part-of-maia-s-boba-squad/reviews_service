import React, {Component} from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';

class Reviews extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      reviews: []
      
    }

    this.getReviews = this.getReviews.bind(this);

  }

  componentDidMount() {
    this.getReviews(3)
  }

  getReviews (restaurant_id) {
    axios.get(`/restaurant?id=${restaurant_id}`)
    .then (data => {
      
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
      <div className="content">
        <Ratings />
      </div>
    )
  }
}


export default Reviews;


