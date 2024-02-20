# React 교과서 chapter02
## 엘리먼트의 중첩
```
const el =document.getElementById('content')
// 랜더링 할 root 태그 가져와서 React 객체로 생성
var root = ReactDOM.createRoot(el)

// h1 태그 생성
var h1 = React.createElement('h1', null, null, 'Hello World')

//div 태그 생성후 h1 태그를 복수개 append 
var div = React.createElement('div', null, null, h1, h1)

// root React 인스턴스 랜더링
root.render(div)
```

----

## React 컴포넌트 클래스
```
  // 재사용할 태그 생성
  let h1 = React.createElement('h1', null, null, 'Hello World')

  // React.Component 를 상속
  class HelloWorld extends React.Component {
    render() {

      // 반환할 react Component 구성
      return React.createElement('div', null, h1, h1)
    }
  }


  const el =document.getElementById('content')
  var root = ReactDOM.createRoot(el)

  // 랜더링 할 Class를 React Component로 생성
  root.render(
    React.createElement(HelloWorld, null)
  )
```
## 리액트의 속성 사용
```
// 두번 째 인자는 해당 태그의 속성 값을 받을 수 있다.
let h1 = React.createElement('a', {href: 'http://naver.com'}, '네이버')

class HelloWorld extends React.Component {
  render() {
    return React.createElement('div', {id: 'test'}, h1)
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  React.createElement(HelloWorld, null)
)
```

## props의 속성 사용
```
class HelloWorld extends React.Component {
  render() {
    // HelloWorld 컴포넌트를 사용하는 시점의 속성을 props로 사용 사용
    return React.createElement('a', {href: this.props.href}, '네이버')
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  // HelloWorld 컴포넌스 생성시 넘겨울 속성
  React.createElement(HelloWorld, {href: 'https://naver.com'})
)
```

## props 모든 속성 사용
```
class HelloWorld extends React.Component {
  render() {
    //h1의 속성을 prop 받은 모든 속성.
    return React.createElement('h1', this.props, 'hello '+ this.props.title + ' world')
  }
}

const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  // 하위의 다른 HelloWorld를 감싸기 위한 div 를 구성
  React.createElement('div', null, 
    React.createElement(HelloWorld, {title:'React Framework', id: 'react'}),
    React.createElement(HelloWorld, {title:'Vue Framework', id: 'vue'})
  )
)

)
```
