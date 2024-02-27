
class HelloWorld extends React.Component {
  render() {
    return (
      <h1>hello world</h1>
    )
  }
}

class DateTimeNow extends React.Component {
  render () {
    let dateTimeNow = new Date().toLocaleTimeString()
    return <span >Current Time is : {dateTimeNow}... </span>  
    }
}

class Profile extends React.Component {
  render () {
    return <a className="block" href={this.props.url}>{this.props.userName}</a>
  }
}

class Profile2 extends React.Component {
  getUrl() {
    return 'http://www.naver.com'
  }
  render () {
    return <a className="block" href={this.getUrl()}>{this.props.userName}</a>
  }
}


const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    <HelloWorld></HelloWorld>
    <DateTimeNow></DateTimeNow>
    <Profile url="http://www.naver.com" userName="김만기"></Profile>
    <Profile2 userName="김만기"></Profile2>
  </div>
)