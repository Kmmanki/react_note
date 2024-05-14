# 2부 React 아키택쳐
# 리액트 교과서 Chapter12(Webpack)

# Webpack의 역할
자바스크립트를 작성을 하다보면 많은 js 파일을 생성하게 된다.
이러한 js 파일들을 적은 수의 js로 합쳐주며 이를 통해 js 요청의 횟수를 줄여준다.

또한 A.jsx와 B.jsx가 모두 Multiutil이라는 유틸리티 모듈을 사용 할 경우 중복하여 요청을 할 수 있다. 이러한 상황에서 Webpack의 도움을 받을 수 있다.

Webpack은 의존성을 분석하여 다음과 같은 작업을 진행한다.
- 모든 의존 모듈을 올바른 순서로 불러오도록 한다.
- 모든 의존 모듈을 한 번ㅆ기만 불러오도록 한다.
- 자바스크립트 파일이 가능한 적은 파일로 묶여지도록 한다.(이를 정적자원이라고 부른다.)

그 외에도 
- JS, Jade, CoffeScript 파일을 js파일로 변환한다.
- ES6 미지원 브라우저를 대응하기 위해 ES6+ 코드를 ES5 코드로 변환한다.
- 스프라이트 이미지를 하나의 PNG 파일이나 JPG 파일 또는 인라인 데이터 URI 이미지로 최적화 한다.

- npm 의존 모듈을 관리하고 번들링하여 일일이 인터넷에서 내려받거나 HTML의 script 태그를 추가하지 않아도 사용할 수 있도록 한다.
- 핫 모듈 대체를 적용한다(?)
- 개발용 웹 서버를 실행한다.

# Webpack의 적용
- Webpack: 번들로 도구
- 로더: 스타일, CSS, 핫 모듈 대체, Babel, JSX 전처리기(style-loader, css-loader, react-hot-loader, babel-loader, babel-core, babel-preset-react)
- Webpack 개발 서버: Express 기반의 서버로 HMR 기능을 사용할 수 있다.


npm init -y
npm i -D babel-loader css-loader react-hot-loader webpack webpack-dev-server html-webpack-plugin react-dom react babel/preset-react @babel/plugin-syntax-jsx babel/syntax-dynamic-import  --force
npm install -D @webpack-cli/generators
npx webpack init --force

babel.config.js
```
module.exports = {
    presets:[
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```