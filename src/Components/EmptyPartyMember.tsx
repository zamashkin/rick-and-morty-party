import React from 'react';
import styled from 'styled-components';

const Dummy = styled.div`
    background-color: #dadada;
    display: inline-block;
    width: 180px;
    height: 180px;
    margin: 15px;
`;

const DummyName = styled.div`
    text-align: center;
    margin: 125px auto 0px;
    font: 24px Roboto;
    color: white;
`;

export default function EmptyPartyMember(props: { characterName: string }): JSX.Element {
    return (
        <Dummy>
            <DummyName>{props.characterName}</DummyName>
        </Dummy>
    );
}
