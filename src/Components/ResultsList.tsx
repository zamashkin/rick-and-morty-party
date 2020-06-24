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

interface Props {
    inputValue: string;
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
    }
`;

export default function ResultsList(props: Props): JSX.Element {
    const { loading, error, data } = useQuery(GET_RESULTS, { variables: { value: props.inputValue } });

    let content;

    if (loading) {
        content = <CircularProgress />;
    } else if (error) {
        content = <div> Произошла ошибка. Попробуйте поискать что-то другое. </div>;
    } else {
        const results = data.characters.results as Array<{ id: number; name: string; image: string }>;

        content = results.map((item) => {
            return <ResultItem id={item.id} name={item.name} imageUrl={item.image} key={item.id} />;
        });
    }

    return <ResultItems> {content} </ResultItems>;
}
