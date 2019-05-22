import React, {Component} from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Sorting from './Sorting.jsx';
import Feeds from './Feeds.jsx';

class Reviews extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      reviews: [],
      
      
    }

    this.getReviews = this.getReviews.bind(this);

  }
 
  componentDidMount() {
    this.getReviews(6);
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
        <Ratings data={this.state.reviews}/>
        <Sorting />
        <Feeds />
      </div>
    )
  }
}


export default Reviews;


