
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>hello world</h1>
    )
  }
}

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
        this.setState({userList : [{id: '1'}]})
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

const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    {/* <Clock></Clock> */}
    <UserList></UserList>
  </div>
)