# Next.js

- framework for creating pre-rendered react websites
- offers us both SSR & SSG

## 용어
- CSR (Client Side Rendering)
- SSR (Server Side Rendering)
- SSG (Static Site Generation)
- SEO (Search Engine Optimization)

## SSG & SSR Benefits
- pre-rendering improves performance
- better search engine optimization (SEO)

## 프로젝트 생성 & 실행
프로젝트 생성
```bash
npx create-next-app myapp
```

프로젝트 실행
```bash
npm run dev
```

사이트 접속
```
http://localhost:3000
```

## `/about` url 추가하기

소스 파일 생성 `about.js`
```javascript
// myapp/pages/about.js

const About = () => {
    return (
        <div>
            <h1>About123</h1>
        </div>
    );
}

export default About;
```

브라우저에서 확인 `/about`
```
http://localhost:3000/about
```

## 서브폴더 url 추가하기

- 서브 폴더 하위에 소스 파일을 생성한다 `pages/products/test.js`
- 파일명 `test.js` 과 소스안에 함수명 `Test2` 를 다르게 작성한다
```javascript
// myapp/pages/products/test.js

const Test2 = () => {
    return (
        <div>
            <h1>Test2</h1>
        </div>
    );
}

export default Test2;
```

브라우저에서 확인
```
http://localhost:3000/products/test2 로는 접속이 안된고
http://localhost:3000/products/test 로 접속된다
```

브라우저에서 접속시에는 URI 가 파일명 기준이다

## 서브폴더 url 추가하기 2

- 서브 폴더에 소스파일을 생성한다 `pages/products/index.js`
- 파일명이 `index.js` 이다
```javascript
// myapp/pages/products/index.js

const Products = () => {
    return (
        <div>
            <h1>Products</h1>
        </div>
    );
}
export default Products;
```

파일명이 `index.js` 인 경우 브라우저에서는 아래 폴더명까지만 입력해서 접속한다
```
http://localhost:3000/products
```

## 컴포넌트 만들기 & 사용하기

컴포넌트 만들기
```javascript
// myapp/mycompo/NavBar.js

const NavBar = () => {
    return (
        <nav>
            <h1>NavBar</h1>
            <a>Home</a>
            <a>About</a>
            <a>Products</a>
        </nav>
    );
}
export default NavBar;
```

컴포넌트 사용하기
```javascript
// import 추가
import NavBar from '../mycompo/NavBar'

// 컴포넌트 추가
<NavBar />
```
적용 소스
```javascript
// myapp/pages/index.js

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../mycompo/NavBar'

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Homepage</h1>
    </div>
  )
}
```

## NavBar 에 링크 달기
```javascript
// Link import
import Link from 'next/link'

// <Link> 사용
<Link href="/"><a>Home</a></Link>
```
적용 소스
```javascript
// myapp/mycompo/NavBar.js

import Link from 'next/link'

const NavBar = () => {
    return (
        <nav>
            <h1>NavBar</h1>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/products"><a>Products</a></Link>
        </nav>
    );
}
export default NavBar;
```

## 레이아웃 적용하기

Layout.js 만들기
```javascript
// myapp/mycompo/Layout.js

import NavBar from '../mycompo/NavBar'
import Footer from '../mycompo/Footer'

const Layout = ({ children }) => {
    return (
        <div className="content">
            <NavBar />
            { children }
            <Footer />
        </div>
    );
}

export default Layout;
```

_app.js 수정하기

- 수정전
```javascript
// myapp/pages/_app.js

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```
- 수정후
```javascript
// myapp/pages/_app.js

import '../styles/globals.css'
import Layout from '../mycompo/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```

## 글로벌 스타일 적용
```
myapp/styles/globals.css
```
