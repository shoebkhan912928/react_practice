// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import React from 'react';
// import  ThemeContext  from './components/Heading';
import Second from './components/Welcome';
import ProductCard from './components/ProductCard';
import Counter, { Props } from './components/Counter';
import LoginStatus from './components/LoginStatus';
import Product from './components/Product';
import PasswordInput from './components/PasswordInput';
import Products from './components/Products';
import Counterss from './components/Reducer';
import Searchbox from './components/Searchbox';
import Usememo_filtering from './components/Usememo_filtering';
import NetworkStatus from './components/UseONlineStatus';
import Login from './components/Login';
import useid from './components/Useid';
// import Heading from './components/Heading';
// imoort ProductCard from './components/ProductCard';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Usememo from './components/Usememo';
import Calcu from './components/Reducers';
import Useid from './components/Useid';
import Clickevent from './components/Clickevent';
import Onchangevent from './components/Onchangevent';
import Tr from './components/Ternaryoperator';
import { Logicaland} from './components/Ternaryoperator'
import Listmethod from './components/Listmethod';
import { Filters } from './components/Filters';
import { Search } from './components/Search';
import { Logins } from './components/Logins';
import { Fetchdata } from './components/Fetchdata';
import { Reduxcomponent } from './components/Reduxcomponent';
// import productss from './components/filter';
function Home() {
  return(
    <>
     <h1>Home page </h1>
      {/* <h1 name="akhter" prince={5694}>Shob khanhrtfhyrft</h1> */}
      <Props name="akhter" price={3589345}/>
    </>
 
  )
}
function About() {
  return (
  
  <h1> About Page</h1>
)

}
function App() {
  function handleClick() {
    alert("Product added to carrt successfully");
  }
  return (
  


    <BrowserRouter>
    <Reduxcomponent/>
    <Fetchdata/>
    <Logins/>
    <Search/>
    <Filters/>
    {/* <productss/> */}
    <Listmethod/>
    <Logicaland/>
    <Tr/>
    {/* <Ternaryoperator/> */}
    <Onchangevent/>
    <Clickevent/>
  
    <Calcu/>
    <Useid/>
    {/* <useid/> */}
    {/* <Usememo/> */}
    <Props/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>



      <Login />
      <NetworkStatus />
      {/* <Usememo_filtering products={Products}/> */}
      <Searchbox />
      <Counterss />
      {/* <ThemeContext.Provider value="dark">
        <Heading />
      </ThemeContext.Provider> */}
      <Products />
      <PasswordInput />
      <Product />
      <LoginStatus isLoggedIn={false} />
      <Counter />
      <button onClick={handleClick} >Add to Cart  </button>
      <Second />
      <h1>here products section starts</h1>
      <ProductCard name="LallanmTop" price={50000} />
      <h1>Tech shop </h1>
      <ProductCard />
    </BrowserRouter>

  );
}

export default App;