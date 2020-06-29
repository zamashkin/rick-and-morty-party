import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    onValueChange: (value: string) => void;
}

const Input = styled.input`
    width: 783px;
    height: 80px;
    display: block;
    margin: 141px auto 30px;
    font: 30px Roboto;
    font-weight: 300;
    line-height: 35px;
    padding-left: 27px;
    text-transform: uppercase;
`;

export default function SearchInput(props: Props): JSX.Element {
    const [inputValue, setInputValue] = useState('');

    function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
        const { value } = e.currentTarget;

        setInputValue(value);
        props.onValueChange(value);
    }

    return <Input onChange={handleInputChange} value={inputValue} />;
}
