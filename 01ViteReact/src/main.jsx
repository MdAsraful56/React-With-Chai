import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// function MyApp() {
//   return (
//     <div>
//       <h1>Custom App  !!!</h1>
//     </div>
//   )
// }



// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me'
// };


// const anotherElement = (
//   <a href="https://google.com" target='_blank' >Visit Google </a>
// )

// const reactElement = React.createElement(
//   'a',
//   { href: 'https://google.com', target: '_blank' },
//   'Click me to Visit Google',
//   anotherElement
// )


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MyApp /> */}
    {/* <reactElement />  This is not work  */}
    {/* < anotherElement /> */}
    {/* <reactElement /> */}

    
  </StrictMode>,
)
