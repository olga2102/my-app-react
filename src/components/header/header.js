import React from 'react';
import './header.css';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  h1 {
    font-size: 26px;
    color: ${props => props.colored ? "red" : "black"};

    :hover {
      color: blue;
    }
  }

  p {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header colored>
            <h1>Olga Iakushina</h1>
            <p>{allPosts} записей, из них понравилось {liked}</p>
        </Header>
    )
}

export default AppHeader;