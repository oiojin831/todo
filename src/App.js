//https://ko.reactjs.org/docs/react-api.html#createelement
import React from "react";

//<div>안에 또다른 <div>를 넣는건
/*
이런식으로 하고 싶다면
<div>
  <div>hell</div>
  <div>world</div>
</div>
*/
function App() {
  return React.createElement("div", null, [
    React.createElement("div", null, "hello"),
    React.createElement("div", null, "world"),
  ]);
}

export default App;
