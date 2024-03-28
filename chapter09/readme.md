# 리액트 교과서 Chapter09(Menu 컴포넌트)

## 빌드를 간편하게 하기위한 스크립트 정리
packge.json에 빌드 스크립트를 추가
npm build를 사용하여 jsx -> js로 변환한다.
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": ".\\node_modules\\.bin\\babel .\\jsx -d .\\js --extensions .jsx --copy-files -w"
  },
```

### 메뉴 컴포넌트 작성
menu.jsx
```
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
```

### Link 컴포넌트 작성
Link.jsx
```
class Link extends React.Component{
  render() {
    const url = '/' + this.props.label.toLowerCase().trim().replace(' ','-')
    return (
      <a href={url}>{this.props.label}</a>
    )
  }
}

```

### script 작성
script.jsx
```
let menu = document.getElementById('menu')
let root = ReactDOM.createRoot(menu)

root.render(
  <Menu></Menu>
)
```

### 해당 컴포넌트들을 html에서 로드
/menu/index.html
만약 menu가 하나의 jsx에 작성되어 있다면 하나의 js만 불러와도 될듯.
```
    <script src="../js/components/menu/Menu.js" type="text/javascript"></script>
    <script src="../js/components/common/Link.js" type="text/javascript"></script>
    <script src="../js/components/script.js" type="text/javascript"></script>
    
```