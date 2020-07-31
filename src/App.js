import React from "react";
import PhotoList from "./PhotoList"
import "./App.css";
import styled from "styled-components"

const AppBg = styled.div`
  background: gray;
`

function App() {
  return (
    <AppBg className="App">
      <PhotoList />
    </AppBg>
  );
}

export default App;
