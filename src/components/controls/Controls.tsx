import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Tab } from '../../types/Tab';
import { resetValues } from '../tabs/store/actions';
import ControlButton from './ControlButton';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';
import { clipboard, nativeImage } from 'electron';
import AddValue from '../add-value';

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
  const [showAdd, setShowAdd] = useState(false);
  const dispatch = useDispatch();
  const handleResetValues = () => {
    dispatch(resetValues());
  };

  const toggleShowAdd = () => {
    setShowAdd(!showAdd);
  };

  const saveImage = () => {
    const modelDiv = document.getElementById('modelOutput');
    if (modelDiv) {
      domtoimage.toBlob(modelDiv).then((blob) => saveAs(blob, 'diagram.png'));
    }
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
          <div className="mr-2">
            <Button
              color="secondary"
              variant="contained"
              onClick={handleResetValues}
            >
              Reset
            </Button>
          </div>
          <div className="flex">
            <Button variant="contained" onClick={toggleShowAdd}>
              Add
            </Button>
            <AddValue open={showAdd} handleClose={toggleShowAdd} />
          </div>
        </div>
        {showPreview && (
          <Button variant="contained" color="primary" onClick={saveImage}>
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
