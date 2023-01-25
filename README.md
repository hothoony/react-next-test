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

## 프로젝트 생성
`create-next-app` 으로 프로젝트를 생성한다
```bash
npx create-next-app myapp
```

## 프로젝트 실행
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
// next_proj_dir/pages/about.js

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
// next_proj_dir/pages/products/test.js

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
- 브라우저에서는 파일명 url 로 접근한다
```
http://localhost:3000/products/test  (O)
http://localhost:3000/products/test2 (X)
```

## 서브폴더 url 추가하기 2

- 서브 폴더에 소스파일을 생성한다 `pages/products/index.js`
- 파일명이 `index.js` 이다
```javascript
// next_proj_dir/pages/products/index.js

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
// next_proj_dir/mycompo/NavBar.js

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
전체 소스
```javascript
// next_proj_dir/pages/index.js

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
전체 소스
```javascript
// next_proj_dir/mycompo/NavBar.js

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
// next_proj_dir/mycompo/Layout.js

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
// next_proj_dir/pages/_app.js

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
```
- 수정후
```javascript
// next_proj_dir/pages/_app.js

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
글로벌 스타일 파일
```
next_proj_dir/styles/globals.css
```
_app.js 에 등록되어 있음
```javascript
import '../styles/globals.css' // HERE
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

## 컴포넌트에 개별 스타일 적용
css 파일 만들기
```css
/* next_proj_dir/styles/NavBar.module.css */

.text {
    color: blue;
}
```
NavBar.js 에 스타일 적용
```javascript
// import
import styles from '../styles/NavBar.module.css'

// 스타일 적용
<a className={styles.text}>
```
전체 소스
```javascript
// next_proj_dir/mycompo/NavBar.js

import Link from 'next/link'
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <nav>
            {/* <h1>NavBar</h1> */}
            <Link href="/"><a className={styles.text}>Home</a></Link>
            <Link href="/about"><a className={styles.text}>About</a></Link>
            <Link href="/products"><a className={styles.text}>Products</a></Link>
            <Link href="/products/test"><a className={styles.text}>test</a></Link>
        </nav>
    );
}
export default NavBar;
```

## 404 페이지

404 에러 페이지 만들기
```javascript
// pages/404.js

import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Not Found</h1>
            <p><Link href="/"><a>back to Homepage</a></Link></p>
        </div>
    );
}
export default NotFound;
```

404 에러 페이지에 스타일 적용
```css
/* styles/globals.css */

.not-found {
    color: #4979ff;
    text-decoration: underline;
}
```

## Redirect

404 에러 페이지 노출시 3초 경과후에 인덱스로 페이지로 자동 이동하기
- useEffect 사용
- useRouter 사용

```javascript
// pages/404.js

import { useEffect } from 'react'
import { useRouter } from 'next/router'

const router = useRouter();

useEffect(() => {
    setTimeout(() => {
        router.push('/');
    }, 3000);
});
```

## Image

이미지 파일 준비
```
next_proj_dir/public/logo.png
```

img 태그로 이미지 삽입
```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <div>
        <img src="/logo.png" />
      </div>
      <h1>Homepage</h1>
    </div>
  )
}
```

Image 로 이미지 삽입
```javascript
import Image from 'next/Image'

export default function Home() {
  return (
    <div>
      <div>
        <Image src="/logo.png" width={100} height={100} />
      </div>
      <h1>Homepage</h1>
    </div>
  )
}
```

## Metadata

Head 추가
```javascript
import Head from 'next/head'

return (
    <>
        <Head>
            <title>My Website</title>
            <meta name="keywords" content="my homepage" />
        </Head>
    </>
);
```

## fetch Data - items

http://localhost:3000/jsonData

```javascript
// next_proj_dir/pages/items/index.js

export const getStateProps = async () => {
    console.log('getStateProps');

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { items: data }
    };
};

const Items = ({ items }) => {
    console.log('items', items);
    return (
        <div>
            <h1>All items</h1>
            {items && items.map(item => (
                <div key={item.id}>
                    <a>
                        <h3>{item.name}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
}

export default Items;
```

## fetch Data - each item

http://localhost:3000/jsonData/id

```javascript
// next_proj_dir/pages/items/[id].js
```
