import React from 'react'
import {render} from 'react-dom';

import Media from './src/playlist/components/media';

const app = document.getElementById('app');

// ReactDOM.render(que voy a renderizara, donde lo voy a renderizar)
const holaMundo =<h1>Hola mundo</h1>
//  ReactDOM.render(<Media/>,app)
render(<Media/>,app)

