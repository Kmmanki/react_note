# 책 리액트 교과서 정리를 위한 깃

ps. jsx 빌드 및 실행 
```
// jsx를 위한 바벨 빌드와 -w옵션으로 변경감지 1~8ch(고차 컴포넌트 이전까지 사용)
.\node_modules\.bin\babel .\jsx -o .\js\script-compield.js -w

// 웹서버 실행
npx http-server -c-1
```

모든 파일 jsx 빌드 8ch 중반(고차컴포넌트 부터)
```
.\node_modules\.bin\babel .\jsx -d .\js --extensions .jsx --copy-files -w
```