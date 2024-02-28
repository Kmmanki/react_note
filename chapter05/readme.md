# 리액트 교과서 chapter05(React 컴포넌트의 라이프사이클 이벤트)

React는 라이브 사이클 이벤트를 기반으로 컴포넌트의 동작을 제어하고 사용자 정의 할 수 있다.
- 마운팅 이벤트: React 엘리먼트를 DOM노드에 추가할 때 발생
- 갱신이벤트: 속성이나 상태가 변경되어 React 엘리머트를 갱신할 때 발생
- 언마운팅 이벤트 : React 엘리먼트가 DOM에서 제거될 때 발생

마운팅과 언마운팅의 경우 DOM의 추가, 삭제 과정에 동작하므로 1번만 동작하며, 갱신은 상태의 변경에 따라 동작하기 때문에 여러번 동작 될 수 있다.

- contructor: 상태의 초기화 시 사용 된다.
- 마운팅
  - componentWillMount(): DOM에 삽입 전에 실행된다.
  - componentDidMount(): DOM에 삽입 후에 실행된다.
- 갱신
  - componentWillReceiveProps(nextProps): 컴포넌트가 속성을 받기 직전에 실행
  - shoudComponentUpdate(nextProps, nextState): 컴포넌트가 갱신되는 조건을 정의해서 재랜더링을 최적화 할 수 있다. boolean 값을 반환
  - componentWillUpdate(nextProps, nextState): 컴포넌트가 갱신되기 직전에 실행된다.
  - componentDidUpdate(prevProps, prevState): 컴포넌트가 갱신된 후에 실행된다.
- 언마운팅
  - componentWillUnmount(): DOM에서 제거하기 전 실행되며, 구독한 이벤트를 제거하거나 다른 정리작업에 수행 할 수 있다.

  ## 라이프 사이클의 사용 및 관찰
```
  
class Clock extends React.Component {
  
  constructor(props) {
    super(props)
    this.launchClock()
    this.state = {
      currentTime : (new Date()).toLocaleString('kr'),
      testState : 'testState',
      counter : 0 
   }
  }

  launchClock() {
    setInterval(() => {
      this.setState({
        currentTime: (new Date()).toLocaleString('kr'),
        counter: ++this.state.counter
      })
    }, 1000)
  }

  render () {
    if (this.state.counter > 2) {
      return <Logger time={this.state.currentTime}></Logger>
    }
    }
}

class Logger extends React.Component {
  constructor (props) {
    super(props)
    console.log('constructor 실행')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount 실행')
  }
  componentDidMount() {
    console.log('componentDidMount 실행')
  }
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps 실행')
    console.log('새로운 속성', nextProps)
  }
  shoudComponentUpdate(nextProps, nextState) {
    console.log('shoudComponentUpdate 실행')
    console.log('새로운 속성', nextProps)
    console.log('새로운 상태', nextState)
    
  }
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate 실행')
    console.log('새로운 속성', nextProps)
    console.log('새로운 상태', nextState)
  }
  componentDidUpdate(prevProps, prevState){
    console.log('componentDidUpdate 실행')
    console.log('이전 속성', prevProps)
    console.log('이전 상태', prevState)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount 실행')
  }
  render () {
    return <div>{this.props.time}</div>
  }
} 
```

## componentDidMount의 활용
기본적인 템플릿이 mount 된 뒤 데이터 조회
```
  class UserList extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        userList : [{id: '1', username:'1'}]
      }
    }
      componentDidMount() {
        this.getUserList()
      }

      getUserList() {
        fetch('https://jsonplaceholder.typicode.com/users/')
        .then((response) => {return response.json()})
        .then((users) => {
          this.setState({userList : users})
        })
      }
      
      render() {
        return <div>
          <table>
            <tbody>
              {this.state.userList
              .map((user) => 
                <tr key={user.id} id={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
      }
  }
```