import React, { useState } from 'react';
import { render } from 'react-dom';
import Tab from './components/tabs/Tab';
import Controls from './components/controls/Controls';
import './styles/app.css';

import { Provider } from 'react-redux';
import store from './store';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden">
        <div className="h-16 bg-gray-700 p-3">
          <Controls />
        </div>
        <div className="h-full overflow-hidden">
          <Tab id={currentTab} />
        </div>
      </div>
    </Provider>
  );
};

render(<App />, mainElement);
