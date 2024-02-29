# 리액트 교과서 Chapter06(React에서 이벤트 다루기)

## 이벤트 등록을 하는 방법
함수에 현재 컴포넌트를 bind 해주어야한다.
해당 바인드를 하지 않는 경우는 아래와 같다.

- 함수에서 Component 인스턴스를 사용하지 않을 때
- Arrow 함수를 사용 할 때

--- 

```
class HelloWorld extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      count : 0
    }
    // 바인드 방식 1
    this.minusBtn = this.minusBtn.bind(this)
  }
  plusBtn (event) {
    this.setState({
      count: ++this.state.count
    })
  }
  minusBtn (event) {
    this.setState({
      count: --this.state.count
    })
  }
  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        // 바인드 방식 2
        <button onClick={this.plusBtn.bind(this)} >+</button>
        <button onClick={this.minusBtn} >-</button>
        <button onClick={(event) => {
          this.setState({
            count: 0
          })
          }} >clear</button>
      </div>
    )
  }
}
```

## 합성이벤트
minusBtn (event)함수에서 event가 합성이벤트이다.
event는 표준화를 위한 React 객체다.
내부 프로퍼티 및 함수는 아래와 같다.

- currentTarget: 이벤트를 캡쳐한 요소의 DOMEventTarget(대상 요소 및 부모요소)
- target: DOMEventTarget가 발생한 요소
- preventDefault(): 링크 나 폼 전송 등 기본 동작을 방지하는 메소드
- isDefaultPrevented(): 기본동작이 방지 되었을 때 True를 반환
- stopPropagation(): 이벤트 전파 중단
- isPropagationStopped: 이벤트 전파가 중단되었다면 true 반환
- type: 태그명 문자열
- persist(): 합성 이벤트를 이벤트 풀에서 꺼낸 후 사용자 코드에서 이벤트에 대한 참조를 유지할 수 있도록 한다.
- isPersistent(): 합성 이벤트를 이벤트 풀에서 꺼낸경우 true를 반환 

입력이 된 텍스트 상자의 value를 가져오는 방법
``
...
getNameInputValue(event) {
  console.log(e.target.value)
}
...
``

## 컴포넌트간 통신
컴포넌트간 데이터의 변경을 주고 받아야 한다면 부모 컴포넌트에서 상태를 관리하고 하위에는 변경에 대한 메소드
변경된 값들을 전달하는 것이 좋은 패턴이다.
1. parent -> content로 상태 전달
2. parent -> btn으로 함수전달
3. btn -> parent 함수 호출
4. parent -> content 변경된 상태 전달

```
class Parent extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      counter: 0
    }
  }
  updateCounter(e) {
    console.log('wow')
    this.setState({counter : ++this.state.counter})
  }
  render() {
    return <div>
      <ChildContent counter={this.state.counter}></ChildContent>
      <ChildBtn updateCounter={this.updateCounter.bind(this)}></ChildBtn>
    </div>
  }
}
class ChildContent extends React.Component {
  
  render() {
    return <span>{this.props.counter}</span>
  }
}
class ChildBtn extends React.Component {
  render() {
    console.log(this.props)
    return <button onClick={this.props.updateCounter}>+</button>
  }
}
```

## React가 지원하지 않는 이벤트 처리
resize 이벤트는 React에서 지원하지 않는다.
이를 해결하기 위해 라이프 사이클 메소드를 사용한다.

```
// 동작하지 않음
return <div onResize={this.handleResize}></div>
```

### 동작
1. window에 이벤트 리스너 등록
2. 화면의 크기가 변동되면 상태 갱신
3. 상태 갱신으로 인한 동적 style 갱신
```

class Radio extends React.Component {
  constructor(prop) {
    super(prop)
    this.handleResize = this.handleResize.bind(this)
    let i = 1
    this.state = {
      outerStyle: this.getStyle(4, i),
      innerStyle: this.getStyle(1, i),
      selectedStyle: this.getStyle(2, i),
      taggerStyle: {top: 20, width: 25, height: 25}
    }
  }
  getStyle (i, m){
    let value = i * m
    return { top: value, bottom: value, left: value, right: value}
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }
  handleResize() {
    let w = 1+ Math.round(window.innerWidth / 300)
    this.setState({
      taggerStyle: {top: w*10, width : w*10, height: w*10 },
      textStyle: {left: w*13, fontSize: 7*w}
    })
  }

  render() {
    return <div>
      <div className="radio-tagger" style={this.state.taggerStyle}>
        <input type="radio" name={this.props.name} id={this.props.id} />
        <label htmlFor={this.props.id}>
            <div className="radio-text" style={this.state.textStyle}>{this.props.label}</div>
            <div className="radio-outer" style={this.state.outerStyle}>
              <div className="radio-inner" style={this.state.innerStyle}>
                <div className="radio-selected" style={this.state.selectedStyle}></div>
              </div>
            </div>
        </label>
      </div>
    </div>
  }
}
```
