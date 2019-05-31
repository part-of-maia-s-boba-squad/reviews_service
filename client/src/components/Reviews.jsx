import React, {Component} from 'react';
import axios from 'axios';
import Ratings from './Ratings.jsx';
import Sorting from './Sorting.jsx';
import FeedList from './FeedList.jsx';
import styled from 'styled-components';

const Content = styled.div`
  height: 8906px 0px;
  width: 524px 0px;
  background-color: #fff;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

`;

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
    axios.get(`/API/restaurant/review/${window.location.href.split('/')[4]}`)
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

  handleClick(value) {
    
    if (value === 1) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 1))
      })
    }
    if (value === 2) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 2))
      })
    }
    if (value === 3) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 3))
      })
    }
    if (value === 4) {
      this.setState({
        reviews: this.state.allReviews.filter(review => (review.overall === 4))
      })
    }
    if (value === 5) {
      this.setState({
        filterNum: 5,
        reviews: this.state.allReviews.filter(review => (review.overall === 5))
      })
    }

  }
  

  render () {

    return (
      <Content>
        <Ratings handleClick={this.handleClick} value={this.state.allReviews}/>
        <Sorting handleChange={this.handleChange}/>
        <FeedList data={this.state.reviews}/>
      </Content>
    )
  }
}


export default Reviews;


