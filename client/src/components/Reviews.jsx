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
    this.getReviews();
  }

  getReviews () {
    axios.get(`/${window.location.href.split('/')[4]}`)
    .then (response => {
      this.setState ({
        reviews: response.data
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
        <Feeds data={this.state.reviews}/>
      </div>
    )
  }
}


export default Reviews;


