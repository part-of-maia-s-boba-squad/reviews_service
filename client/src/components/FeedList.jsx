import React, {Component} from 'react';
import Feed from './Feed.jsx';
import styled from 'styled-components';

const Content = styled.div`
  margin-bottom: 100px;
  width: 519px;
`;


class FeedList extends React.Component {

  render() { 
    const data = this.props.data;


    return (
      <Content>
      {data.map((review, index) => 
      <Feed value={review} key={index} />
      )}
        
      </Content>
    )
  }
}

export default FeedList;