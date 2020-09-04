import React, { useState } from 'react';
import { render } from 'react-dom';
import TabHandler from './components/tabs/TabHandler';
import Controls from './components/controls/Controls';
import { Tab } from './types/Tab';
import './styles/app.css';

import { Provider } from 'react-redux';
import store from './store';
import Preview from './components/preview';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);

const App = () => {
  const [currentTab, setCurrentTab] = useState(Tab.PERSONAL);
  const [showPreview, setShowPreview] = useState(false);
  const togglePreview = () => setShowPreview(!showPreview);

  return (
    <Provider store={store}>
      <div className="h-screen overflow-hidden">
        <div className="h-16 w-full bg-gray-300 p-3 fixed z-10">
          <Controls
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
            showPreview={showPreview}
            togglePreview={togglePreview}
          />
        </div>
        <div className="h-full pt-16">
          {showPreview ? <Preview /> : <TabHandler tab={currentTab} />}
        </div>
      </div>
    </Provider>
  );
};

render(<App />, mainElement);
