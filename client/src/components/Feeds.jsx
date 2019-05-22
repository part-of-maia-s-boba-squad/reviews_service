import React, {Component} from 'react';
import ReactStars from 'react-rating-stars-component';

class Feeds extends React.Component {


  render() { 
    return (
      <div className="review_content">
        <div className="review_list">
          <div className="rev_left">
            <div className="rev_icon">
              <div className="ic_text">M</div> 
            </div>
            <div className="username">
              <span className="vip">VIP</span>
              <span className="name">
                <span >Meshman</span>
              </span>
            </div>
            <span className="loc">Boise</span>
            <div className="total_reviews">
              <i className="far fa-comment-alt"></i>
              <span className="ic_rev">7 reviews</span>
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
                <div className="text">Dined 3 days ago</div>
              </div>
              
              <div className="rev_categories">
                <span className="rv_1">Overall</span>
                <span className="rv_num">5</span>

                <span className="rv_text">Food</span>
                <span className="rv_num">5</span>

                <span className="rv_text1">Service</span>
                <span className="rv_num">5</span>

                <span className="rv_text2">Ambience</span>
                <span className="rv_num1">5</span>
              </div>
            </div>
            <div className="rev_text">
              <p className="rv_txt">We always love our dinner and time with everyone on the staff 👍</p>
            </div>
            <div className="rev_footer">
              <div className="ic_rp">
                <div className="report">
                  <i className="far fa-flag"></i>
                  <div className="fa_txt">Report</div>

                  <i className="far fa-caret-square-up"></i>
                  <div className="fa_txt">Helpful</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Feeds;