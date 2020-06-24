import React, { useState } from 'react';

import SearchInput from './Components/SearchInput';
import ResultsList from './Components/ResultsList';
import Party from './Components/Party';
import styled from 'styled-components';

const AppWrapper = styled.div`
    margin: 0 auto;
    width: 1200px;
`;

function App(): JSX.Element {
    const [inputValue, setInputValue] = useState('');

    function showResults(value: string) {
        setInputValue(value);
    }

    return (
        <AppWrapper>
            <SearchInput onValueChange={showResults} />
            <ResultsList inputValue={inputValue} />
            <Party />
        </AppWrapper>
    );
}

export default App;
