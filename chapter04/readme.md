# 리액트 교과서 chapter04(React 컴포넌트의 상태)

## React 컴포넌트의 상태
현재까지는 props를 사용하여 뷰를 갱신하였다. 하지만 pros(속성)은 컴포넌트의 생성시에 전달 받는 값이기 때문에 변경을 감지하여 뷰를 갱신 할수 없다.

React 컴포넌트의 상태를 이용하여 이러한 문제를 해결 할수 있다. 상태(state)는 컴포넌트에 데이터를 저장하고 데이터의 변경에 따라 자동으로 뷰를 갱신하도록 하는 핵심 개념이다.

## 초기 상태(state) 설정
```
class Clock extends React.Component {
  constructor(props) {
    super(props)
    // 초기상태 세팅
    this.state = {currentTime : (new Date()).toLocaleString('') }
  }
  ...
}
```

## 상태(state)의 사용
```
...
render () {
    return <span >Current Time is : {this.state.currentTime}... </span>  
    }
```

## 상태(state)의 변경
setState를 사용하지 않은변경은 적용되지 않는 안티패턴이다.
setState에 포함된 데이터만 변경된다. 즉
```
class Clock extends React.Component {
  
  constructor(props) {
    super(props)
    this.launchClock()
    // 두 state를 초기화
    this.state = {
      currentTime : (new Date()).toLocaleString('kr'),
      testState : 'testState'
   }
  }

  launchClock() {
    // 1초마다 state의 currentTime를 갱신
    setInterval(() => {
      console.log('updating time...')
      this.setState({
        // currentTime state만 변경
        currentTime: (new Date()).toLocaleString('kr') 
      })
    }, 1000)
  }

  render () {
    return <div className="block">
      // setState를 통해 상태변경
      <span className="block">{this.state.testState}</span>
      <span className="block">Current Time is : {this.state.currentTime}... </span>  
    </div>
    }
}
```

## 상태 객체와 속성
상태 객체와 속성은 모두 클래스의 멤버이며 각각 this.state, this.props를 말한다.
차이점
1. 상태 객체는 변경이 가능하지만 속성은 변경이 불가능하다.
2. props는 부모 컴포넌트로 부터 전달하지만, 상태 객체는 해당 컴포넌트가 정의한다.
