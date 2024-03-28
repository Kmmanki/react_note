class Menu extends React.Component {

  render() {
    const menu = [ 'Home',
      'About',
      'Service',
      'Portfolio',
      'Contact us'
    ]
    return (
      <div>
        {menu.map((x, i) => {
          return <div key={i}>
            <Link label={x}></Link>
            <br></br>
          </div>
        })}
      </div>

    ) 
  }
}