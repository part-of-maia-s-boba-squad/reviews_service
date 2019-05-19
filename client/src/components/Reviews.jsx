import React, {Component} from 'react';
import axios from 'axios';

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
        Hello World!
      </div>
    )
  }
}


export default Reviews;


