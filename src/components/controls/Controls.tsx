import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Tab } from '../../types/Tab';
import { resetValues } from '../tabs/store/actions';
import ControlButton from './ControlButton';

interface Props {
  currentTab: Tab;
  setCurrentTab: React.Dispatch<React.SetStateAction<Tab>>;
  showPreview: boolean;
  togglePreview: () => void;
}

const Controls: React.FC<Props> = ({
  currentTab,
  setCurrentTab,
  showPreview,
  togglePreview,
}) => {
  const dispatch = useDispatch();
  const handleResetValues = () => {
    dispatch(resetValues());
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex">
          <div className="mr-2">
            <Button color="primary" variant="contained" onClick={togglePreview}>
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </Button>
          </div>
          <div className="ml-2">
            <Button
              color="secondary"
              variant="contained"
              onClick={handleResetValues}
            >
              Reset
            </Button>
          </div>
        </div>
        {showPreview && (
          <Button variant="contained" color="primary">
            Save
          </Button>
        )}
        {!showPreview && (
          <div>
            <ControlButton
              id={'personal'}
              text="Personal Values"
              highlight={currentTab === Tab.PERSONAL}
              onClick={setCurrentTab}
            />
            <ControlButton
              id={'current'}
              text={'Current Org Values'}
              highlight={currentTab === Tab.CURRENT}
              onClick={setCurrentTab}
            />
            <ControlButton
              id={'ideal'}
              text={'Ideal Org Values'}
              highlight={currentTab === Tab.IDEAL}
              onClick={setCurrentTab}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Controls;
