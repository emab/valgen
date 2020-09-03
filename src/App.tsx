import React from 'react'
import { render } from 'react-dom'
import Tab from './components/tabs/Tab'
import Controls from './components/controls/Controls'
import './styles/app.css'

import { Provider } from 'react-redux'
import store from './store'

const mainElement = document.createElement('div')
mainElement.setAttribute('id', 'root')
document.body.appendChild(mainElement)

const App = () => {
  return (
    <Provider store={store}>
      <Controls />
      <Tab />
    </Provider>
  )
}

render(<App />, mainElement)
