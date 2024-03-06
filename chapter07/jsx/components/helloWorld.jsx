
class HelloWorld extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      userName: '',
      userNum: ''
    }
    this.changeUserName = this.changeUserName.bind(this)
    this.changeUserNum = this.changeUserNum.bind(this)
    this.submitBtn = this.submitBtn.bind(this)
  }
  
  changeUserName (event) {
    this.setState({
      userName: event.target.value
    })
  }

  changeUserNum (event) {
    let newVal = event.target.value.replace(/[^0-9]/ig, '')

    this.setState({
      userNum: newVal
    })
  }

  submitBtn (event) {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <input value={this.state.userName} onChange={this.changeUserName} ></input>
        <br></br>
        <input value={this.state.userNum} onChange={this.changeUserNum} ></input>
        <br></br>
        <button onClick={this.submitBtn}>submit</button>
      </div>
    )
  }
}


class RadioComp extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      checkboxGroup:[
        {
          item: 'node',
          checked : false
        },
        {
          item: 'react',
          checked : false
        },
        {
          item: 'express',
          checked : false
        },
        {
          item: 'mongoDb',
          checked : false
        }
      ] 
    }
    this.changeRadio = this.changeRadio.bind(this)
  }
  
  changeRadio (event) {
    console.log(event)
    // 값중 일부를 변경하기 위해 객채를 복제
    let obj = Object.assign(this.state.checkboxGroup)

    // 모든 체크를 비활성화
    obj.forEach(element => {
      element.checked = false
    });
    
    // 입력받은 값만 checked를 true로 변경
    let idx = obj.findIndex((element, index, array) => element.item === event.target.value)
    obj[idx] = {item: event.target.value, checked: event.target.checked}

    // checkboxGroup를 변경
    this.setState({
      checkboxGroup: obj
    })
  }

  render() {
    return (
      <div>
        {
          this.state.checkboxGroup.map((checkbox, index) => {
            return (
              <div key={index}>
                <label>{checkbox.item}</label>
                <input type="radio" value={checkbox.item} checked={checkbox.checked} onChange={this.changeRadio} ></input>
              </div>
            )
          })
        
        }
        <button  onClick={this.submitBtn}>submit</button>
      </div>
    )
  }
}

const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)

root.render(
  <div>
    <HelloWorld></HelloWorld>
    <RadioComp></RadioComp>
  </div>
)