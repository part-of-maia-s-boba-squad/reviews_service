import React, {Component} from 'react';


class Report extends React.Component {

  render () {

    return (
 
      <div className="report_box">
        <div className="report_show">
          <div className="report_header">Report this review as inappropriate?</div>
          <div className="report_body">
          <div className="report_txt">If you believe this review should be removed from OpenTable, please let us know and someone will investigate.</div>
            <form id="form" action="/feedback/reviews/report" method="post">
              <textarea name="reason" id="report_reason" required="required" placeholder="Tell us why you find the review inappropriate"></textarea>
              <div className="report_btn">
                <button id="report" type="submit">Report</button>
                <button onClick={(e) => this.props.handleCancel(e)} id="cancel">Cancel</button>
              </div>
            </form>
          </div>
        </div> 
      </div>     
    )
  }
};

export default Report;