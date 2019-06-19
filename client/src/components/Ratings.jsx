import React, {Component} from 'react';
import ReactStars from 'react-rating-stars-component';
import styled from 'styled-components';

const RatingContent = styled.div`
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  border-bottom: solid 1px #d8d9db;
  height: 539px;
  width: 524px;
`;

const RatingLine1 = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.33;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
  height: 31px;
  width: 519px;
  padding: 16px 0px;
  border: 1px 0px;
  margin: 16px 0px;
`;

const Rating = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 32px;
  height: 269px;
  width: 519px;
`;

const RatingLeft = styled.div`
  height: 269px;
  width: 263px;
`;

const RatingLine2 = styled.div`
  height: 24px;
  width: 263px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
`;

const RatingLine3 = styled.div`
  height: 42px;
  width: 263px;
  padding-top: 8px;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: normal;
  display: block;
`;

const RatingLine4 = styled.div`
  height: 64px;
  width: 263px;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  flex-wrap: nowrap;
`;

const RatingLine5 = styled.div`
  margin: 0 0.5rem 0 0;
  font-weight: 500;
  display: flex;
  align-items: center;
  height: 40px;
  width: 155px; 
`;

const Span1 = styled.span`
  margin: 0 0.25rem;
  height: 20px;
  width: 19.5px;
`;

const Span2 = styled.span`
  margin: 0 0.25rem;
  height: 40px;
  width: 119.5px;
`;

const RatingLine6 = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 39px;
  width: 263px;
`;

const Score1 = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
  height: 39px;
  width: 30px;
  &: after {
    background: #d8d9db;
    content: "";
    display: block;
    height: 2rem;
    position: absolute;
    right: 0;
    width: 1px;
    top: calc(50% - 1rem);
  }
`;

const Score2 = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;    
  justify-content: space-evenly;
  height: 39px;
  width: 45px;
  &: after {
    background: #d8d9db;
    content: "";
    display: block;
    height: 2rem;
    position: absolute;
    right: 0;
    width: 1px;
    top: calc(50% - 1rem);
  }
`;

const Score3 = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;    
  justify-content: space-evenly;
  height: 39px;
  width: 61px;
  &: after {
    background: #d8d9db;
    content: "";
    display: block;
    height: 2rem;
    position: absolute;
    right: 0;
    width: 1px;
    top: calc(50% - 1rem);
  }
`;


const Cat1 = styled.div`
  font-style: normal;
  font-weight: bold;
  line-height: 1.33;
  height: 21px;
  width: 30px;
`;

const Cat2 = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: capitalize;
  white-space: nowrap;
  height: 18px;
  width: 30px;
`;

const Cat3 = styled.div`
  font-style: normal;
  font-weight: bold;
  line-height: 1.33;
  height: 21px;
  width: 45px;
`;

const Cat4 = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: capitalize;
  white-space: nowrap;
  height: 18px;
  width: 45px;
`;

const Cat5 = styled.div`
  font-style: normal;
  font-weight: bold;
  line-height: 1.33;
  height: 21px;
  width: 60px;
`;

const Cat6 = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
  text-transform: capitalize;
  white-space: nowrap;
  height: 18px;
  width: 60px;
`;

const RatingLine7 = styled.div`
  padding-top: 1rem;
  max-width: 100%;
  height: 20px;
  width: 263px;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: inherit;
  height: 18px;
  width: 26px;
`;

const Fa = styled.i`
  height: 1.125rem;
  width: 1.125rem;
  margin-right: 0.5rem;
`;

const IconTxt1 = styled.div`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
  height: 20px;
  width: 104px;
  padding: 0px;
  &:hover {color: #da3743}
`;

const Ic_Txt = styled.span`
  font-weight: normal;
  height: auto;
  width: auto;
`;

const RatingLine8 = styled.div`
  padding-top: 1rem;
  max-width: 100%;
  height: 40px;
  width: 263px;
  display: flex;
  align-items: center;
`;

const IconTxt2 = styled.div`
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
  height: 40px;
  width: 241px;
  padding: 0px;
  &:hover {color: #da3743}
`;

const RightCol = styled.div`
  padding: 32px;
  height: 237px;
  width: 256px;
`;

const Right = styled.div`
  margin: 0px;
  height: 145px;
  width: 256px;
`;

const Data = styled.div`
  display: flex;
  padding-bottom: 0.5rem;
  align-items: center;
  height: 21px;
  width: 256px;
`;

const DataNum = styled.span`
  margin-right: 0.5rem;
  width: 16px;
  height: 21px;
  text-align: center;
`;

const Bar = styled.div`
  display: block;
  flex: auto;
  height: 1rem;
  border: 1px solid #d8d9db;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: -1px;
  margin-bottom: -2px;
  &:hover {border: 2px solid #da3743;}
`;

const Bar5 = styled.span`
  width: 77%;
  background: #da3743;
  height: 100%;
  display: block;
`;

const Bar4 = styled.span`
  width: 15%;
  background: #da3743;
  height: 100%;
  display: block;
`;

const Bar3 = styled.span`
  width: 5%;
  background: #da3743;
  height: 100%;
  display: block;
`;

const Bar2 = styled.span`
  width: 2%;
  background: #da3743;
  height: 100%;
  display: block;
`;

const Bar1 = styled.span`
  width: 0%;
  background: #da3743;
  height: 100%;
  display: block;
`;

const Span = styled.span`
  height: auto;
  width: auto;
`;

const Content = styled.div`
  height: 112px;
  width: 519px;
`;

const Content1 = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 500;
  display: flex;
  height: 30px;
  width: 519px;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
`;

const Fas = styled.i`
  height: 24px;
  width: 24px;
  margin-left: 4px;
`;

const Temp = styled.div`
  font-size: 1rem;
  font-weight: 500;
  border-radius: .125rem;
  display: flex;
  box-sizing: border-box;
  border: 1px solid #d8d9db;
  background: none;
  margin-right: 1rem;
  margin-top: 1rem;
  padding: 0.5rem 1rem 0.5rem 0.5rem;
  height: 60px;
  width: 220px;
  &:hover {border: 2px solid #da3743;}
`;

const Tem1 = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  width: 180px;
`;

const Trophy = styled.div`
  display: inherit;
  align-self: baseline;
  height: 26px;
  width: 26px;
`;

const Text = styled.div`
  margin: 0px 0px 0px 4px;
  font-weight: 500;
  line-height: 1.43;
  font-size: 0.875rem;
  color: #6f737b;
  height: 20px;
  width: 180px;
`;

const Ext1 = styled.div`
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  height: 20px;
  width: 180px;
`;

const Ext2 = styled.div`
  height: 20px;
  width: 180px;
  font-weight: normal;
  color: #6f737b;
`;

const Link = styled.div`
  padding-top: 20px; 
`;

const Link1 = styled.a`
  color: #da3743;
  text-decoration: none;
  cursor: pointer;
  -webkit-font-smoothing: antialiased;
  font-family: BrandonText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
  height: auto;
  width: auto;
  &:hover {
    text-decoration: underline;
  }
`;

class Ratings extends React.Component {

  render() { 
    
    const allData = this.props.value;
    
    const overall = allData.map(data => {
      return data.overall;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const foods = allData.map(data => {
      return data.foodRating;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const services = allData.map(data => {
      return data.serviceRating;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const ambience = allData.map(data => {
      return data.ambienceRating;
    }).reduce((total, val) => {
      return total + val
    }, 0);

    const value = allData.map(data => {
      return data.value;
    }).reduce((total, val) => {
      return total + val
    }, 0);
    
    return (
    <RatingContent>
      <RatingLine1>What {allData.length} People Are Saying </RatingLine1>

      <Rating>
        <RatingLeft>
          <RatingLine2>Overall ratings and reviews</RatingLine2>
          <RatingLine3>Reviews can only be made by diners who have eaten at this restaurant</RatingLine3>
          <RatingLine4>
          <div className="icons">
            <ReactStars 
            count={5}
            size={18}
            color1={'#da3743'}
            edit={false}
            half={true}
            />
          </div>

          <RatingLine5>
            <Span1>{(overall / allData.length).toFixed(1)}</Span1>
            <Span2>based on recent ratings</Span2>
          </RatingLine5>        
          </RatingLine4>

          <RatingLine6>
            <Score1>
              <Cat1>{(foods/ allData.length).toFixed(1)}</Cat1>
              <Cat2>Food</Cat2>
            </Score1>
            <Score2>
              <Cat3>{(services/ allData.length).toFixed(1)}</Cat3>
              <Cat4>Service</Cat4>
            </Score2>
            <Score3>
              <Cat5>{(ambience/ allData.length).toFixed(1)}</Cat5>
              <Cat6>Ambience</Cat6>
            </Score3>
            <Score1>
              <Cat1>{(value/ allData.length).toFixed(1)}</Cat1>
              <Cat2>Value</Cat2>
            </Score1>  
          </RatingLine6>

          <RatingLine7>
            <Icon>
              <Fa className="fas fa-signal"></Fa>
            </Icon>

            <IconTxt1>
              Noise&nbsp;-&nbsp;
              <Ic_Txt>Moderate</Ic_Txt>
            </IconTxt1>
          </RatingLine7>

          <RatingLine8>
            <Icon>
              <Fa className="far fa-thumbs-up"></Fa>
            </Icon>
            <IconTxt2>
              90% of people&nbsp;
              <Ic_Txt>would recommend it to a friend</Ic_Txt>
            </IconTxt2>
          </RatingLine8>
        </RatingLeft>
      

        <RightCol>
          <Right>
            <Data onClick={() => this.props.handleClick(5)}>
              <DataNum>5</DataNum>
              <Bar>
                <Bar5></Bar5>
                <Span></Span>
              </Bar>
            </Data>

            <Data onClick={() => this.props.handleClick(4)}>
              <DataNum>4</DataNum>
              <Bar>
                <Bar4></Bar4>
                <Span></Span>
              </Bar>
            </Data>

            <Data onClick={() => this.props.handleClick(3)}>
              <DataNum>3</DataNum>
              <Bar >
                <Bar3></Bar3>
                <Span></Span>
              </Bar>
            </Data>

            <Data onClick={() => this.props.handleClick(2)}>
              <DataNum>2</DataNum>
              <Bar>
                <Bar2></Bar2>
                <Span></Span>
              </Bar>
            </Data>

            <Data onClick={() => this.props.handleClick(1)}>
              <DataNum>1</DataNum>
              <Bar>
                <Bar1></Bar1>
                <Span></Span>
              </Bar>
            </Data>
          

          </Right>
        </RightCol>
      </Rating>
      <Content>
        <Content1>
        Loved For
        <Fas className="fas fa-exclamation-circle"></Fas>
        </Content1>

        <Temp>
          <Tem1>
            <Trophy>
              <Fas className="fas fa-trophy"></Fas>
            </Trophy>
            <Text>
              <Ext1>Contemporary American</Ext1>
              <Ext2>San Francisco</Ext2>
            </Text>
          </Tem1>
        </Temp>
      </Content>
      <Link>
        <Link1 href="//www.opentable.com/s/best-restaurants-in-pacific-heights/n42">Best Restaurants in Pacific Heights ></Link1>
      </Link>

    </RatingContent> 
  )}
};

export default Ratings;

