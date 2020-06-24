import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    position: relative;
    width: 180px;
    margin: 15px;
    padding: 0px;
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
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

interface Props {
    name: string;
    imageUrl: string;
    id: number;
}

export default function ResultItem(props: Props): JSX.Element {
    return (
        <ItemWrapper>
            <Img src={props.imageUrl} alt={props.name} onClick={() => console.log('image button')} />
            <ExcludeButton onClick={() => console.log('exclude button click')} />
        </ItemWrapper>
    );
}
