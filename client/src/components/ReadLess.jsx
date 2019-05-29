import React, {Component} from 'react';
import ReactStars from 'react-rating-stars-component';
import Report from './Report.jsx';
import style from 'styled-components';

const Full = style.div`
  display: flex;
  flex-direction: row;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: solid 1px #d8d9db;
  color: #2d333f;
  height: 250px;
  width: 512px;
`;

const FullTxt = style.div`
  overflow: visible;
  text-overflow: inherit;
  -webkit-line-clamp: inherit;
  max-height: inherit;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;

const Para = style.p`
  margin-bottom: 0;
  margin-top: 0;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: normal;
`;

const Left = style.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1rem;
  margin-left: 1rem;
  width: 96px;
  height: 148px;
  position: relative;
  flex: none;
`;

const Icon = style.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  height: 48px;
  width: 48px;
  background: #bb6acd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconTxt = style.div`
  color: #ffffff;
  font-weight: 500;
  text-transform: capitalize;
  height: 22px;
  width: 13px;
  padding: 0px;
  margin: 0px;
`;

const Username = style.div`
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 0.25rem;
  color: #2d333f;
  word-break: break-word;
  height: 18px;
  width: 70px;
`;

const Vip = style.span`
  text-transform: uppercase;
  position: absolute;
  background-color: #fdaf08;
  padding: 2px 0.5rem;
  font-size: 12px;
  border-radius: 1rem;
  font-weight: 700;
  top: -2px;
  color: #fff;
  left: 0;
`;

const Name = style.span`
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
  color: #2d333f;
  word-break: break-word;
  width: auto;
  height: auto;
`;

const Loc = style.span`
  line-height: 1.43;
  color: #6f737b;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  text-align: center;
`;

const Total = style.div`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.43;
  flex: none;
  white-space: nowrap;
  color: #6f737b;
  height: 17px;
  width: 68px;
`;

const Fa = style.i`
  display: inline-block;
  position: relative;
  height: 16px;
  width: 16px;
  flex: none;
  margin-right: 0.25rem;
`;

const Right = style.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: inherit;
`;

const Star = style.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 48px;
  width: 384px;
`;

const IconStar = style.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  height: 20px;
  width: 391px;
  padding: 0px;
  margin: 0px;
`;

const Text = style.div`
font-size: 0.875rem;
line-height: 1.43;
margin: 8px;
font-weight: 500;
align-items: center;
`;

const Category = style.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  height: 20px;
  width: 391px;
`;

const Rev1 = style.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  height: 20px;
  width: 45px;
  text-transform: capitalize;
  margin: 0 0.5rem 0 0;
`;

const RevNum = style.span`
  color: #da3743;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  height: 20px;
  width: 23px;
  &: after {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    color: #2d333f;
    height: auto;
    width: auto;
  }
`;

const RevTxt = style.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  text-transform: capitalize;
  margin: 0 0.5rem 0 0;
  height: 20px;
  width: 30px;
`;

const RevTxt1 = style.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  text-transform: capitalize;
  margin: 0 0.5rem 0 0;
  height: 20px;
  width: 49px;
`;

const RevTxt2 = style.span`
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.43;
  text-transform: capitalize;
  margin: 0 0.5rem 0 0;
  height: 20px;
  width: 65px;
`;

const Footer = style.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Rep = style.div`
  display: flex;
  position: relative;
  align-self: flex-start;
  width: 143px;
  height: 50px;
`;

const RevMore = style.a`
  color: #da3743;
  text-decoration: none;
  font-weight: normal;
  font-size: inherit;
  height: 24px;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Hide = style.div`
  display: none;
`;

const Test = style.div`
  display: flex;
  align-items: center;
`;

const Flag = style.i`
  display: inherit;
  height: 16px;
  width:16px;
`;

const FaTxt = style.div`
  margin: 0 10px;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
  height: 20px;
  width: 62px;
  cursor: pointer;
  &:hover {
    color: #da3743;
  }
`;

const RepHide = style.div`
  position: absolute;
  background: #ffffff;
  z-index: 1000;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(51,51,51,.2);
  bottom: 2.5rem;
  right: -5.5rem;
  max-width: 25rem;
  height: 320px;
  width: 400px;
  display: none;
`;

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
     <Full>
        <Left>
          <Icon>
            <IconTxt>{review.firstName[0]}</IconTxt> 
          </Icon>
          <Username>
            <Vip>VIP</Vip>
            <Name>
              {review.firstName}
            </Name>
          </Username>
          <Loc>{review.location}</Loc>
          <Total>
            <Fa className="far fa-comment-alt"></Fa>
            <span>{review.total_reviews} reviews</span>
          </Total>
        </Left>

        <Right>
          <Star>
            <IconStar>
              <div className="ic">
                <ReactStars 
                count={5}
                size={18}
                color1={'#da3743'}
                edit={false}
                half={true} />
              </div>
              <Text>Dined {review.date} days ago</Text>
            </IconStar>
              
            <Category>
              <Rev1>Overall</Rev1>
              <RevNum>{review.overall}</RevNum>

              <RevTxt>Food</RevTxt>
              <RevNum>{review.food}</RevNum>

              <RevTxt1>Service</RevTxt1>
              <RevNum>{review.service}</RevNum>

              <RevTxt2>Ambience</RevTxt2>
              <RevNum>{review.ambience}</RevNum>
            </Category>
          </Star>

          <FullTxt>
            <Para>{review.text}</Para>        
          </FullTxt>

          <Footer>
            <Rep>
            {/* show/hide Read Less button */}
            {review.text.length > 150 ? (<RevMore href="#" onClick={(e) => this.props.toggle(e)}>- Read less</RevMore>) 
            : (<Hide></Hide>)}

            </Rep>
           <Rep>
              <Test>
              <Flag className="far fa-flag"></Flag>
                <FaTxt onClick={(e) => this.showReport(e)} >Report</FaTxt>
                {(this.state.showRep) ? <Report handleCancel={this.handleCancel}/> : <RepHide></RepHide>}  
              </Test>
              
              <Test>
                <Flag className="far fa-caret-square-up"></Flag>
                {(!this.state.likeCount) ? 
                  (<FaTxt onClick={(e) => this.handleClick(e)}>Helpful</FaTxt>) 
                  : (<FaTxt onClick={(e) => this.handleClick(e)}>Helpful(1)</FaTxt>)} 
              </Test>

            </Rep>
          </Footer>
        </Right> 
      </Full>
    )
  }
};

export default ReadLess;


