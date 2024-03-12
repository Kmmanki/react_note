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