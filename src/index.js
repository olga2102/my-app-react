import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
// import reportWebVitals from './reportWebVitals';

// const elem = (
//   <div>
//         <h2>Hello, World</h2> 
//         <input type="text" placeholder="Type here"/>
//         <button/>
// </div>
// )

// const Header = () => {
//   return <h2>Hello, World</h2> 
// }

// const Field = () => {
//   const holder ="Enter here"
//   const styledField = {
//     width: '300px',
//   }
//   return <input 
//                 style = {styledField}
//                 className="first"
//                 type="text" 
//                 placeholder={holder}/> 
// }

// const Btn = () => {
//   // const text = "Log in"
//   const res = () => {
//     return "Log in, please"
//   }
//   const logged = false;
//   return <button>{logged ? "Enter" : res()}</button>
// }

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Field/>
//       <Btn/>
//     </div>
//   )
// }

// const elem = React.createElement('h2', null, 'Hello World!!!') 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
