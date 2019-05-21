import React, {Component} from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Sorting from './Sorting.jsx';


class Reviews extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      reviews: []
      
    }

    this.getReviews = this.getReviews.bind(this);

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
        <Sorting />
      </div>
    )
  }
}


export default Reviews;


