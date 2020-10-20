import React, { useState } from 'react';
import data from '../data';
import styled from "styled-components";

import GlobalStyles from './GlobalStyles';


const Typeahead = (props) => {
    const [value, setValue] = React.useState('');

    return (

        <>
            <Input type="text"
                value={value}
                onChange={(ev) => setValue(ev.target.value)}
                onKeyDown={(ev) => {
                    switch (ev.key) {
                        case "Enter": {
                            props.handleSelect(ev.target.value);
                            return;
                        }
                        case "ArrowUp": {

                        }
                        case "ArrowDown": {

                        }
                    }
                }} />
            <Clear onClick={() => setValue('')}>Clear</Clear>

            <SuggList>
                {props.suggestions.filter((book) => {
                    if (book.title.toLowerCase().includes(value.toLowerCase()) && value.length > 1) {

                        return book;

                    }
                }
                ).map((book) => {
                    const lowercaseSugg = book.title.toLowerCase();
                    const matchstart = lowercaseSugg.indexOf(value.toLowerCase())
                    const matchEnd = matchstart + value.length;
                    const firstHalf = book.title.slice(0, matchEnd)
                    const secondHalf = book.title.slice(matchEnd)



                    return <SuggItem onClick={() => { window.alert(book.title) }}>
                        <Matched>{firstHalf}</Matched><Bold >{secondHalf}</Bold>
                        <Tiny> in </Tiny> <Genre> {props.categories[book.categoryId].name}</Genre> </SuggItem>
                })}
            </SuggList>
        </ >
    )
}

const Clear = styled.button`
    background: darkblue;
    border: none;
    border-radius: 7px;
    color: white;
    padding: 11px 20px;
    margin-left: 10px;
`;

const Input = styled.input`
    height: 2.6em;
    border-radius: 7px;
    border: 2px solid lightgrey;
    width: 250px;

    &:focus {
        border: 3px solid darkcyan;
        outline: none;
    }
`

const SuggList = styled.ul`
width: 330px;
box-shadow: 3px 10px 12px -3px rgba(0,0,0,0.16);
margin-bottom: 100px;
border-radius: 7px;
`

const SuggItem = styled.li`
padding: 10px;
border-radius:10px;
margin: 4px;

&:hover {
    background: lightyellow;
    cursor: pointer;
}
`

const Tiny = styled.span`
    font-size: 14px;
`
const Genre = styled.span`
    font-style:italic;
    color: rgb(189, 0, 189);
`
const Bold = styled.span`
    font-weight: bold;
`;
const Matched = styled.span`
    font-weight: light;
    color: darkslategrey;
`

export default Typeahead