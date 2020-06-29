import React from 'react';
import styled from 'styled-components';
import { Character } from './ResultsList';
import EmptyPartyMember from './EmptyPartyMember';

const PartyImg = styled.img`
    width: 180px;
    margin: 15px;
`;

const Header = styled.div`
    width: 383px;
    text-align: center;
    font: 30px Roboto;
    font-weight: bold;
    margin 55px auto 5px;
    line-height: 35px;
`;

const PartyWrapper = styled.div`
    width: 420px;
    margin: 0 auto 142px;
    display: flex;
`;

interface Props {
    partyMembers: {
        rick?: Character;
        morty?: Character;
    };
}

export default function Party(props: Props): JSX.Element {
    const { rick, morty } = props.partyMembers;

    return (
        <>
            <Header>PARTY</Header>
            <PartyWrapper>
                {rick ? (
                    <PartyImg src={rick.image} alt={rick.name} />
                ) : (
                    <EmptyPartyMember characterName={'RICK'} />
                )}
                {morty ? (
                    <PartyImg src={morty.image} alt={morty.name} />
                ) : (
                    <EmptyPartyMember characterName={'MORTY'} />
                )}
            </PartyWrapper>
        </>
    );
}
