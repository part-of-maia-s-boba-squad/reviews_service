import React, {Component} from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Sorting from './Sorting.jsx';
import FeedList from './FeedList.jsx';

class Reviews extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      reviews: [],
      sortBy: 'Newest'     
    }

    this.getReviews = this.getReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
 
  componentDidMount() {
    this.getReviews();
  }

  getReviews () {
    axios.get(`/${window.location.href.split('/')[4]}`)
    .then (response => {
      this.setState ({
        reviews: response.data.sort((a,b) => a.date - b.date)
      })
    })
    .catch( err => {
      console.log('Error: ', err)
    })
  } 

  handleChange(e) {
    e.preventDefault();

    if (e.target.value === 'Newest') {
      this.setState({
        reviews: this.state.reviews.sort((a,b) => a.date - b.date)
      })
    }
    if (e.target.value === 'Highest Rating') {
      this.setState({
        reviews: this.state.reviews.sort((a,b) => a.date - b.date).sort((a,b) => b.overall - a.overall)
      })
    }
    if (e.target.value === 'Lowest Rating') {
      this.setState({
        reviews: this.state.reviews.sort((a,b) => a.date - b.date).sort((a,b) => a.overall - b.overall)
      })
    }
    
  }
  

  render () {

    return (
      <div className="content">
        <Ratings data={this.state.reviews}/>
        <Sorting handleChange={this.handleChange}/>
       
         <FeedList data={this.state.reviews}/>
      </div>
    )
  }
}


export default Reviews;


