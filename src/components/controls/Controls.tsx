import React, { useMemo } from 'react';
import ControlButton from './ControlButton';
import { Tab } from '../../types/Tab';

interface Props {
  currentTab: Tab;
  setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
}

const Controls: React.FC<Props> = ({ currentTab, setCurrentTab }) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <ControlButton text="Preview" colour="primary" />
          <ControlButton text="Reset" colour="secondary" />
        </div>
        <div>
          <ControlButton
            id={'personal'}
            text="Personal Values"
            highlight={currentTab === Tab.PERSONAL}
            onClick={setCurrentTab}
          />
          <ControlButton
            id={'current'}
            text={"Current Org Values"}
            highlight={currentTab === Tab.CURRENT}
            onClick={setCurrentTab}
          />
          <ControlButton
            id={'ideal'}
            text={"Ideal Org Values"}
            highlight={currentTab === Tab.IDEAL}
            onClick={setCurrentTab}
          />
        </div>
      </div>
    </>
  );
};

export default Controls;
