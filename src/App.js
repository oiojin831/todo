//https://ko.reactjs.org/docs/react-api.html#createelement
import React from "react";

// createElement(,, "children")
// 새개의 arguments를 넣어서 함수를 실행시키는데
// 첫번째: "html 요소랑 똑같이 생긴 react component 이름"
// 두번째: "props" -> html에서 attribute라고 부르고 -> react에서 properties라고 하는 것들 -> onClick이나 className같은 것들
// 세번째: "children" -> 오프닝테그와 클로징테그 사이에 있는애들 -> div를 예를 들면 -> <div>여기에 있는애들</div>
function App() {
  return React.createElement("div", null, "Hello world");
}

// React.createElement('div', null, `Hello ${this.props.toWhat}`)
// 위 함수가 실행되면
// jsx 문법에 따라
// <div>Hello world</div>
// 가 생성된다.

export default App;
