import React, {Component} from 'react';
import ReactStars from 'react-rating-stars-component';
import Report from './Report.jsx';

class ReadLess extends React.Component {
  constructor () {
    super ();

    this.state = {
      likeCount: false,
      showRep: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.showReport = this.showReport.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      likeCount: !this.state.likeCount
    })
  }

  showReport(e) {
    e.preventDefault();
    this.setState({
      showRep: !this.state.showRep
    })
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({
      showRep: !this.state.showRep
    })
  }

  render () {
    const review = this.props.review;
    
    return (
     <div className="review_full_list" >
        <div className="rev_left">
          <div className="rev_icon">
            <div className="ic_text">{review.firstName[0]}</div> 
          </div>
          <div className="username">
            <span className="vip">VIP</span>
            <span className="name">
              {review.firstName}
            </span>
          </div>
          <span className="loc">{review.location}</span>
          <div className="total_reviews">
            <i className="far fa-comment-alt"></i>
            <span className="ic_rev">{review.total_reviews} reviews</span>
          </div>
        </div>

        <div className="rev_right">
          <div className="rev_star">
            <div className="ic_stars">
              <div className="ic">
                <ReactStars 
                count={5}
                size={18}
                color1={'#da3743'}
                edit={false}
                half={true} />
              </div>
              <div className="text">Dined {review.date} days ago</div>
            </div>
              
            <div className="rev_categories">
              <span className="rv_1">Overall</span>
              <span className="rv_num">{review.overall}</span>

              <span className="rv_text">Food</span>
              <span className="rv_num">{review.food}</span>

              <span className="rv_text1">Service</span>
              <span className="rv_num">{review.service}</span>

              <span className="rv_text2">Ambience</span>
              <span className="rv_num1">{review.ambience}</span>
            </div>
          </div>
          <div className="rev_full_text">
            <p>{review.text}</p>
           
        
          </div>
          <div className="rev_footer">
            <div className="ic_rp">
            {/* show/hide Read Less button */}
            {review.text.length > 150 ? (<a href="#"  
            className="reviewReadMore" onClick={(e) => this.props.toggle(e)}>- Read less</a>) 
            : (<div className="hide"></div>)}

            </div>
           <div className="report">
              <div className="test1">
              <i className="far fa-flag"></i>
                <div onClick={(e) => this.showReport(e)} className="fa_txt">Report</div>
                {(this.state.showRep) ? <Report handleCancel={this.handleCancel}/> : <div className="report_hide"></div>}  
              </div>
              
              <div className="test2">
                <i className="far fa-caret-square-up"></i>
                {(!this.state.likeCount) ? 
                  (<div onClick={(e) => this.handleClick(e)} className="fa_txt">Helpful</div>) 
                  : (<div onClick={(e) => this.handleClick(e)} className="fa_txt">Helpful(1)</div>)} 
              </div>

            </div>
          </div>
        </div> 
      </div>
    )
  }
};

export default ReadLess;


