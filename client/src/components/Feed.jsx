import React, {Component} from 'react';
import ReadLess from './ReadLess.jsx';
import ReadMore from './ReadMore.jsx';

class Feed extends React.Component {
  constructor() {
    super ();
  
    this.state = {
      showText : false,
    }
    // this.toggle = this.toggle.bind(this);
  }

  // toggle (e) {
  //   e.preventDefault();
  //   this.setState({
  //     showText: !this.state.showText
  //   });
  // }

  render () {
    const isClicked = this.state.showText;
    return (
    // <div>
    //   {!isClicked ? 
    //   (<ReadMore review={this.props.value} toggle={this.toggle}/>)
    //   :
    //   (<ReadLess review={this.props.value} toggle={this.toggle}/>)}
    
    // </div>

    <div>
      {!isClicked ? 
      (<ReadMore review={this.props.value} lengthh={this.props.lengthh}/>)
      :
      (<ReadLess review={this.props.value} lengthh={this.props.lengthh}/>)}
    
    </div>
     
    )
  }
};

export default Feed;

