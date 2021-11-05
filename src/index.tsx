import React from 'react'
import { render } from 'react-dom'
// @ts-ignore
import App from '@/App'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import './firebase'

render(
  <Provider store={setupStore()}>
     <App/>
  </Provider>,
  document.getElementById('root')
)