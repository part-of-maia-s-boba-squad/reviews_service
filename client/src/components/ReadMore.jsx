import React, {Component} from 'react';
import ReactStars from 'react-rating-stars-component';

class ShowHalfText extends React.Component {
    constructor () {
        super ();
    
        this.state = {
          likeCount: false
        }
    
        this.handleClick = this.handleClick.bind(this);
      }
    
    handleClick(e) {
        e.preventDefault();
        this.setState({
          likeCount: !this.state.likeCount
        })
      }

  render () {
    const review = this.props.review

    return (
     <div className="review_half_list" >
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
          <div className="rev_half_text">
            <p>{review.text}</p>        
          </div>
          <div className="rev_footer">
            <div className="ic_rp">
            {/* show/hide Read More button */}
            {review.text.length > 150 ? (<a href="#"  
            className="reviewReadMore" onClick={(e) => this.props.toggle(e)}>+ Read more</a>) 
            : (<div className="hide"></div>)}

            </div>
            <div className="report">
              <div className="test1">
                <i className="far fa-flag"></i>
                <div className="fa_txt">Report</div>
              </div>
              <div className="test2">
                <i className="far fa-caret-square-up"></i>
                {(!this.state.likeCount) ? 
                  (<div onClick={(e) => this.handleClick(e)}className="fa_txt">Helpful</div>) 
                  : (<div onClick={(e) => this.handleClick(e)}className="fa_txt">Helpful(1)</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ShowHalfText;