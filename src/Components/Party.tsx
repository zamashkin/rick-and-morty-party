import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    width: 383px;
    text-align: center;
    font: 30px Roboto;
    font-weight: bold;
    margin 55px auto 20px;
    line-height: 35px;
`;

export default function Party(): JSX.Element {
    return <Header>PARTY</Header>;
}
