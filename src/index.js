import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from "./App"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






// function Cards(props) {
//   return   <div>
//     <img src={ props.url} />
//   <div>
//       <h3>{ props.title}</h3>
//       <span>₽ { props.price}</span>
//       <a href="" class="button">В корзину</a>
//   </div>
//   </div>
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Cards url={ data.url} title={data.title} price={data.price} />)
// ReactDOM.createRoot(document.getElementById("root")).render(<App />)