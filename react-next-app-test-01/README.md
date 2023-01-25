## Next.js 프로젝트 만들기
- `create-next-app` 사용
```shell
$ npx create-next-app 앱이름
$ npx create-next-app@latest 앱이름
```
- `npm init` 사용
```shell
$ npm init
$ npm install next react react-dom
```

## Next.js + TypeScript 프로젝트 만들기
```shell
$ npx create-next-app --typescript 앱이름
$ npx create-next-app@latest --typescript 앱이름
```

## 프로젝트 실행 (개발서버)
```shell
$ npm run dev
```

## 브라우저 확인
```
http://localhost:3000
```

## 프로젝트 디렉토리 구조
```
.
├── README.md
├── jsconfig.json
├── next.config.js
├── node_modules/
├── package.json
├── public/
└── src
    ├── components
    │   ├── Footer.js
    │   ├── Header.js
    │   ├── Layout.js
    │   └── NavBar.js
    ├── pages
    │   ├── api
    │   │   └── hello.js
    │   ├── members
    │   │   ├── index.js
    │   │   ├── memberAdd.js
    │   │   ├── memberEdit.js
    │   │   └── memberView.js
    │   ├── teams
    │   │   ├── index.js
    │   │   ├── teamAdd.js
    │   │   ├── teamEdit.js
    │   │   └── teamView.js
    │   ├── _app.js
    │   ├── _document.js
    │   ├── about.js
    │   └── index.js
    └── styles
        ├── Home.module.css
        ├── NavBar.module.css
        ├── common.module.css
        └── globals.css
```

# `src/pages` 하위 폴더, 파일명으로 URI 라우팅하기

## URI `/about`
- `접속 URL` http://localhost:3000/about
- `파일 SRC` src/pages/about.js
```javascript
// src/pages/about.js

import styles from '@/styles/common.module.css';

const about = () => {
    return (
        <div className={styles.centerMiddle}>
            <h1>about</h1>
        </div>
    );
}

export default about;
```

## URI `/teams`
- `접속 URL` http://localhost:3000/teams
- `파일 SRC` src/pages/teams/index.js
```javascript
// src/pages/teams/index.js

import styles from '@/styles/common.module.css';

const teamList = () => {
    return (
        <div className={styles.centerMiddle}>
            <h1>teamList</h1>
        </div>
    );
}

export default teamList;
```

## URI `/teams/teamAdd`
- `접속 URL` http://localhost:3000/teams/teamAdd
- `파일 SRC` src/pages/teams/teamAdd.js
```javascript
// src/pages/teams/teamAdd.js

import styles from '@/styles/common.module.css';

const teamAdd = () => {
    return (
        <div className={styles.centerMiddle}>
            <h1>teamAdd</h1>
        </div>
    );
}

export default teamAdd;
```

# Layout 만들기

## Layout 파일 만들기
```javascript
// src/components/Layout.js

import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
    return (
        <div>
            <Header/>
            <NavBar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
```

## Layout 파일 적용하기
```javascript
// src/pages/_app.js

import Layout from '@/components/Layout';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

# API 만들기

## `/api/hello`
- `GET` /api/hello
- `POST` /api/hello
- `PATCH` /api/hello
- `DELETE` /api/hello
```javascript
// src/pages/api/hello.js

import HttpResponse from "./common";

// http://localhost:3000/api/hello
export default function handler(req, res) {
  
  console.log('req', req.method, req.url);

  if (req.method === 'GET') {
    handleGet(req, res);
  }
  else if (req.method === 'POST') {
    handlePost(req, res);
  }
  else if (req.method === 'PATCH') {
    handlePatch(req, res);
  }
  else if (req.method === 'DELETE') {
    handleDelete(req, res);
  }
  else {
    handleBadRequest(req, res);
  }

}

const handleGet = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handlePost = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handlePatch = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handleDelete = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handleNotFound = (req, res) => {
  const resStatus = HttpResponse.status404;
  res
    .status(404)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
    });
}

const handleBadRequest = (req, res) => {
  const resStatus = HttpResponse.status400;
  res
    .status(400)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
    });
}
```

## `/api/world`
- `GET` /api/world
- `POST` /api/world
```javascript
// src/pages/api/world.js

import HttpResponse from "./common";

// http://localhost:3000/api/world
export default function handler(req, res) {
  
  console.log('req', req.method, req.url);

  if (req.method === 'GET') {
    handleGet(req, res);
  }
  else if (req.method === 'POST') {
    handlePost(req, res);
  }
  else {
    handleBadRequest(req, res);
  }

}

const handleGet = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handlePost = (req, res) => {
  const resStatus = HttpResponse.status200;
  res
    .status(200)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
      name: 'paul',
      age: 20
    });
}

const handleBadRequest = (req, res) => {
  const resStatus = HttpResponse.status400;
  res
    .status(400)
    .json({
      status: resStatus.code,
      message: resStatus.message,
      method: req.method,
      url: req.url,
    });
}
```
