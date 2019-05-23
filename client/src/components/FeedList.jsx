import React, {Component} from 'react';
// import ReactStars from 'react-rating-stars-component';
import ReadLess from './ReadLess.jsx';
import ReadMore from './ReadMore.jsx';

class FeedList extends React.Component {
  constructor() {
    super ();
  
    this.state = {
      showText : false 
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle (e) {
    e.preventDefault();
    this.setState({
      showText: !this.state.showText
    });
  }


  render () {
    const isClicked = this.state.showText
    return (
    <div>
      {!isClicked ? 
      (<ReadMore review={this.props.value} toggle={this.toggle}/>)
      :
      (<ReadLess review={this.props.value} toggle={this.toggle}/>)}
    </div>
     
    )
  }
};

export default FeedList;

