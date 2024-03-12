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