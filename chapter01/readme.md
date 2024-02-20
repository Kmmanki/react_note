# React 교과서 chapter01
## cdn으로 react, reactDom 불러오기
```
<head>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
  </head>
```

## react를 사용한 태그 생성
index.html
```
<script src="./js/components/helloWorld.js" type="text/javascript">
```

helloWorld.js
```
const el =document.getElementById('content')
var root = ReactDOM.createRoot(el)
var h1 = React.createElement('h1', null, null, 'Hello World')
root.render(h1)
```

## 실행 방법
1. 노드설치
2. npm install http-server
http-server 설치
3. npx http-server
4. 127.0.0.1 접속