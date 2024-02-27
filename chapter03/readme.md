# React 교과서 chapter03(JSX)
## JSX
챕터2 까지의 Element 생성은 React의 createElement 함수에 각각의 인자를 넣는 방식으로 개발을 하였다.
해당 Element가 적고 복잡하지 않다면 크게 문제가 없지만 복잡해질 수록 가독성이 떨어진다는 단점이 있다.
이를 보안하기 위한 것이 JSX이다.
JSX는 기존의 HTML태그를 사용하는것과 매우 유사하다.

JSX 방식
```
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>hello world</h1>
    )
  }
}

const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  React.createElement(HelloWorld, null)
)
```
## JSX의 설치
1. npm init: pagkage.json 생성
2. package.json에 babel 추가:
  "barbel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },
3. npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react: 설치

## JSX의 컴파일
.\node_modules\.bin\babel .\jsx -o .\js\script-compield.js
jsx 디렉토리의 모든 파일을 js디렉토리의 script-compield.js로 변환
.\node_modules\.bin\babel .\jsx -o .\js\script-compield.js -w
-w 옵션은 해당 파일의 변경을 감지하여 자동 빌드

## index.html 소스 수정

```
<script src="./js//script-compield.js" type="text/javascript">
```


## JSX의 변수의 출력

```
class DateTimeNow extends React.Component {
  render () {
    let dateTimeNow = new Date().toLocaleTimeString()
    return <span>Current Time is : {dateTimeNow}... </span>
  }
}
```

## JSX의 속성 사용
```
class Profile extends React.Component {
  render () {
    return <a href={this.props.url}>{this.props.userName}</a>
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    <HelloWorld></HelloWorld>
    <DateTimeNow></DateTimeNow>
    <Profile url="http://www.naver.com" userName="김만기"></Profile>
  </div>
)
```

## JSX의 apthem 메소드 사용
```
class Profile2 extends React.Component {
  getUrl() {
    return 'http://www.naver.com'
  }
  render () {
    return <a className="block" href={this.getUrl()}>{this.props.userName}</a>
  }
}
```