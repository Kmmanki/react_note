class Link extends React.Component{
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ','-')
    return (
      <a href={url}>{this.props.label}</a>
    )
  }
}
