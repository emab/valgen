import React from 'react';
import ControlButton from './ControlButton';
import { Tab } from '../../types/Tab';

interface Props {
  setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
}

const Controls: React.FC<Props> = ({ setCurrentTab }) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <ControlButton text="Save Diagram" colour="primary" />
          <ControlButton text="Reset" colour="secondary" />
        </div>
        <div>
          <ControlButton
            id={'personal'}
            text="Personal Values"
            onClick={setCurrentTab}
          />
          <ControlButton
            id={'current'}
            text="Current Org Values"
            onClick={setCurrentTab}
          />
          <ControlButton
            id={'ideal'}
            text="Ideal Org Values"
            onClick={setCurrentTab}
          />
        </div>
      </div>
    </>
  );
};

export default Controls;
