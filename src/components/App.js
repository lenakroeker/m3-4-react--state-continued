import React from 'react';
import data from '../data';
import styled from "styled-components";
import GlobalStyles from './GlobalStyles';
import Typeahead from "./Typeahead"

const App = (props) => {
  return (
    <Formdiv>
      <GlobalStyles />
      <div>
        <Typeahead suggestions={data.books}
          categories={data.categories}
          handleSelect={(suggestion) => {
            window.alert(suggestion)
          }}
        />
      </div>
    </Formdiv>
  );
};

const Formdiv = styled.div`
  margin-top: 100px;
  margin-left: calc(50vw - 160px);
`


export default App;
