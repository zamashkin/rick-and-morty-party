import React, { useState } from 'react';

import SearchInput from './Components/SearchInput';
import ResultsList, { Character } from './Components/ResultsList';
import Party from './Components/Party';
import styled from 'styled-components';

const AppWrapper = styled.div`
    margin: 0 auto;
    width: 900px;
`;

function App(): JSX.Element {
    const [inputValue, setInputValue] = useState('');
    const [rickPartyMember, setRickPartyMember] = useState<Character>();
    const [mortyPartyMember, setMortyPartyMember] = useState<Character>();

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function showResults(value: string) {
        if (value.length > 2) {
            sleep(300).then(() => setInputValue(value));
        } else {
            setInputValue('');
        }
    }

    function onResultItemClick(character: Character) {
        if (character.name.includes('Rick')) {
            setRickPartyMember(character);
        } else if (character.name.includes('Morty')) {
            setMortyPartyMember(character);
        }
    }

    return (
        <AppWrapper>
            <SearchInput onValueChange={showResults} />
            <ResultsList onResultItemClick={onResultItemClick} inputValue={inputValue} />
            <Party partyMembers={{ rick: rickPartyMember, morty: mortyPartyMember }} />
        </AppWrapper>
    );
}

export default App;
