import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

import ResultItem from './ResultItem';

const ResultItems = styled.div`
    width: 840px;
    display: flex;
    flex-wrap: wrap;
    margin 30px auto;
    justify-content: center;
`;

const ErrorMessage = styled.div`
    font: 30px Roboto;
`;

interface Props {
    inputValue: string;
    onResultItemClick: (character: Character) => void;
}

interface CharacterQueryVars {
    value: string;
}

export interface Character {
    id: number;
    name: string;
    image: string;
}
interface CharacterQuery {
    characters: {
        results: Character[];
    };
    excludedCharactersIds: number[];
}

const GET_RESULTS = gql`
    query getResultForInputValue($value: String!) {
        characters(filter: { name: $value }) {
            results {
                id
                name
                image
            }
        }

        excludedCharactersIds @client
    }
`;

export default function ResultsList(props: Props): JSX.Element {
    const { loading, error, data } = useQuery<CharacterQuery, CharacterQueryVars>(GET_RESULTS, {
        variables: { value: props.inputValue },
    });

    let content;

    if (loading) {
        content = <CircularProgress />;
    } else if (error) {
        content = <ErrorMessage> An error occured. Try to search something else. </ErrorMessage>;
    } else if (data) {
        const { results } = data.characters;

        content = results
            .filter((char) => !data.excludedCharactersIds.includes(char.id))
            .map((char) => {
                return (
                    <ResultItem
                        onResultItemClick={props.onResultItemClick}
                        character={char}
                        key={char.id}
                    />
                );
            });
    }

    return <ResultItems> {content} </ResultItems>;
}
