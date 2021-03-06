import cn from 'classnames';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Controls from './components/controls/Controls';
import Preview from './components/preview';
import TabHandler from './components/tabs/TabHandler';
import store from './store';
import './styles/app.css';
import { Tab } from './types/Tab';
import { ipcRenderer } from 'electron';

const mainElement = document.createElement('div');
mainElement.setAttribute('id', 'root');
document.body.appendChild(mainElement);
const version = document.createElement('p');
version.setAttribute('id', 'version');
document.body.appendChild(version);

ipcRenderer.send('app_version');
ipcRenderer.on('app_version', (event, arg) => {
  ipcRenderer.removeAllListeners('app_version');
  version.innerText = 'Version ' + arg.version;
});

const App = () => {
  const [currentTab, setCurrentTab] = useState(Tab.PERSONAL);
  const [showPreview, setShowPreview] = useState(false);
  const togglePreview = (set?: boolean) => setShowPreview(set ?? !showPreview);

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
        <div
          className={cn('h-full pt-16 overflow-auto', { flex: showPreview })}
          id="test"
        >
          {showPreview ? <Preview /> : <TabHandler tab={currentTab} />}
        </div>
      </div>
    </Provider>
  );
};

render(<App />, mainElement);
