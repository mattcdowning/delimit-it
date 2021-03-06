import React, { useRef } from "react";
import * as clipboardy from "clipboardy";
import styled from "styled-components";

const InnerWrap = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  label {
    display: block;
    margin-bottom: 15px;
  }
  input {
    width: 300px;
  }
  p {
    user-select: all;
  }
  button {
    background-color: lightblue;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: 400ms ease-in-out;
    &:hover {
      color: white;
      background-color: rebeccapurple;
    }
  }
  button:first-of-type {
    margin-right: 10px;
  }
`;
const OuterWrap = styled.div`
  footer {
    text-align: right;
    a {
      color: rebeccapurple;
    }
  }
`;

export default function App() {
  const [text, setText] = React.useState("");
  const textInput = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    const todelimit = textInput.current.value;
    const splitText = todelimit.trim().split(" ");
    const joined = splitText.join("-");
    clipboardy.write(joined);
    setText(joined);
  }
  function handleReset() {
    setText("");
    textInput.current.focus();
  }
  return (
    <OuterWrap>
      <InnerWrap>
        <h1>Delimit-it!</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <label htmlFor="todelimit">What can I delimit for you?</label>
          <input id="todelimit" type="text" ref={textInput} autoFocus />
          <p>{text}</p>
          <button type="submit">Submit</button>
          <button type="reset">Clear</button>
        </form>
      </InnerWrap>
      <footer>
        <p>
          a <a href="https://twitter.com/mattcdowning">@mattcdowning</a>{" "}
          production
        </p>
      </footer>
    </OuterWrap>
  );
}
