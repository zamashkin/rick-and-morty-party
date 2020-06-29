import React from 'react';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Character } from './ResultsList';

const ItemWrapper = styled.div`
    position: relative;
    width: 180px;
    height: 180px;
    margin: 15px;
    padding: 0px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

const ExcludeButton = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;
    opacity: 0.9;
    background-color: #fff;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    cursor: pointer;
    &:before,
    &:after {
        position: absolute;
        left: 14px;
        top: 8px;
        content: ' ';
        height: 14px;
        width: 2px;
        background-color: black;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

const ADD_TO_EXCLUDED_MUTATION = gql`
    mutation($id: Int!) {
        addCharacterIdToExcluded(id: $id) @client
    }
`;

interface Props {
    character: Character;
    onResultItemClick: (character: Character) => void;
}

export default function ResultItem(props: Props): JSX.Element {
    const { character, onResultItemClick } = props;
    const [addCharacterIdToExcluded] = useMutation(ADD_TO_EXCLUDED_MUTATION, {
        variables: { id: character.id },
    });

    return (
        <ItemWrapper>
            <Img
                src={character.image}
                alt={character.name}
                onClick={() => onResultItemClick(character)}
            />
            <ExcludeButton onClick={() => addCharacterIdToExcluded()} />
        </ItemWrapper>
    );
}
