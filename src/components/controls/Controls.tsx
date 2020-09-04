import React, { useMemo } from 'react';
import ControlButton from './ControlButton';
import { Tab } from '../../types/Tab';
import { connect, useDispatch } from 'react-redux';
import { State } from '../../types/State';
import { Button } from '@material-ui/core';
import { resetValues } from '../tabs/store/actions';

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
        <div>
          <Button color="primary" variant="contained" onClick={togglePreview}>
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleResetValues}
          >
            Reset
          </Button>
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

const mapStateToProps = (state: State) => ({
  state: state,
});

export default connect(mapStateToProps)(Controls);
