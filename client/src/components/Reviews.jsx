import React, {Component} from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Sorting from './Sorting.jsx';
import FeedList from './FeedList.jsx';

class Reviews extends React.Component {
  constructor (props) {
    super (props);
    
    this.state = {
      allReviews: [],
      reviews:[],
      sortBy: 'Newest',
      isClick: false,
      filterNum: 0  
    }

    this.getReviews = this.getReviews.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
 
  componentDidMount() {
    this.getReviews();
  }

  getReviews () {
    axios.get(`/${window.location.href.split('/')[4]}`)
    .then (response => {
      this.setState ({
        allReviews: response.data.sort((a,b) => a.date - b.date),
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
        reviews: this.state.allReviews.sort((a,b) => a.date - b.date)
      })
    }
    if (e.target.value === 'Highest Rating') {
      this.setState({
        reviews: this.state.allReviews.sort((a,b) => a.date - b.date).sort((a,b) => b.overall - a.overall)
      })
    }
    if (e.target.value === 'Lowest Rating') {
      this.setState({
        reviews: this.state.allReviews.sort((a,b) => a.date - b.date).sort((a,b) => a.overall - b.overall)
      })
    }
  }

  handleClick(v) {
    

    if (v === 1) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 1))
      })
    }
    if (v === 2) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 2))
      })
    }
    if (v === 3) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 3))
      })
    }
    if (v === 4) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 4))
      })
    }
    if (v === 5) {
      this.setState({
        filterNum: 5,
        reviews: this.state.allReviews.filter(review => (review.overall === 5))
      })
    }

  }
  

  render () {

    return (
      <div className="content">
        <Ratings handleClick={this.handleClick} value={this.state.allReviews}/>
        <Sorting handleChange={this.handleChange}/>
        <FeedList data={this.state.reviews}/>
      </div>
    )
  }
}


export default Reviews;


