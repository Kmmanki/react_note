# 리액트 교과서 Chapter08(확장성을 고려한 React 컴포넌트)

## 기본속성
컴포넌트의 개발 시 모든 속성을 주입 받을 시 누락 된다면 해당 컴포넌트는 동작 하지 않을 것 이다.
또한 매번 컴포넌트 사용 시 모든 옵션들을 주입 받는 것 또한 코드가 복잡해진다.

이를 해결하기 위해 컴포넌트 작성 시 기본속성을 작성할 수 있다.
```

class HelloWorld extends React.Component {
  constructor(prop) {
    super(prop)
  }
  
  render() {
    return (
      <div>
        <p >{this.props.title}</p>
      </div>
    )
  }
}

HelloWorld.defaultProps = {
  title: 'Hello World'
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    <HelloWorld title="Hello"></HelloWorld>
    <HelloWorld></HelloWorld>
  </div>
)
```

## 자식컴포넌트 랜더링
컴포넌트에 {this.props.children}를 사용하여 해당 컴포넌트 내부에 있는 자식 컴포넌트를 렌더링 할 수 있다.

```
// 자식 엘리먼트 렌더링
class Content extends React.Component {
  constructor(prop) {
    super(prop)
  }
  
  render() {
    return (
      <div>
        <p >{this.props.title}</p>
        {this.props.children}
      </div>
    )
  }
}

Content.defaultProps = {
  title: 'Content!!'
}
//

const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    <HelloWorld title="Hello"></HelloWorld>
    <HelloWorld></HelloWorld>

    <Content>
      <h1>Content Hi</h1>
    </Content>

    <></>
  </div>
```

## 펼침 연산자의 사용
모든 주입 받은 속성을 펼침 연산자를 사용하여 전달한다.

```
 render() {
    return (
      <a {...this.props} {...this.state}>네이버</a>
    )
  }
```

## 고차 컴포넌트
고차 컴포넌트는 함수의 파라미터로 리액트 컴포넌트를 전달 받아 사용하는 컴포넌트를 말한다.
근래에는 함수형 컴포넌트의 훅(hook)을 사용하기 때문에 많이 사용하지 않는다.

고차컴포넌트에 사용할 컴포넌트(내부 컴포넌트) 정의
Elements.jsx
```
class HiButton extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.handleClick}
      >{this.props.label}</button>
    )
  }
}

class HiLink extends React.Component {
  render() {
    return (
      <a
        onClick={this.props.handleClick}
        href="#"
      >{this.props.label}</a>
    )
  }
}

class Logo extends React.Component {
  render() {
    return (
      <a
        onClick={this.props.handleClick}
        href="#"
      >{this.props.label}</a>
    )
  }
}
```

고차 컴포넌트(외부 컴포넌트) 함수 정의
load-website.jsx
```
// 컴포넌트를 파라미터로 받음
const LoadWebsite = (Component) => {
  class _LoadWebsite extends React.Component {
    constructor(props) {
      super(props)
      // 상태 생성
      this.state = {label: 'Run', handleClick: this.handleClick.bind(this)} 
    }
    // 함수생성
    getUrl() {
      return 'https://facebook.github.io/react/docs/top-level-api.html'
    }
    handleClick(event) {
      document.getElementById('frame').src = this.getUrl()
    }
    componentDidMount() {
      console.log(ReactDOM.findDOMNode(this))
    }
    render() {
      console.log(this.state)
      // 입력받은 컴포넌트 렌더링
      // 상위 컴포넌트의 상태를 하위 컴포넌트의 속성으로 사용
      return <Component {...this.state} {...this.props} />
    }
  }
  _LoadWebsite.displayName = 'EhnancedComponent'

  return _LoadWebsite
}
```

고차 컴포넌트의 사용
HiorContent.jsx
```
// 고차 컴포넌트를 생성하는 함수의 파라미터로 내부 컴포넌트 정의
let EnhancedButton = LoadWebsite(HiButton)
let EnhancedLink = LoadWebsite(HiLink)
let EnhancedLogo = LoadWebsite(Logo)

class HiOrContent extends React.Component {
  render() {
    return (
      <div>
        <EnhancedButton />
        <br />
        <br />
        <EnhancedLink />
        <br />
        <br />
        <EnhancedLogo />
        <br />
        <br />
        <iframe id="frame" src="" width="600" height="500"/>
      </div>
    )
  }
}

let el2 =document.getElementById('hi-content')
var root = ReactDOM.createRoot(el2)

root.render(
  <div>
    <HiOrContent> </HiOrContent>
  </div>
)
```

## 프레젠테이션 컴포넌트와 컨테이너 컴포넌트
데이터를 보여주는 컴포넌트와 데이터를 서버로 부터 불러오는 컴포는트를 분리하여 작성하는 것이
간결한 소스와 유지보수에 유용하다