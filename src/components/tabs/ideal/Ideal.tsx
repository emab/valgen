import React from 'react';
import TabBase from '../TabBase';
import { addIdealValue, removeIdealValue } from '../store/actions';

const PersonalTab: React.FC = () => {
  return (
    <TabBase title={'Ideal Organisational Values'} addValue={addIdealValue} removeValue={removeIdealValue}/>
  );
};

export default PersonalTab;
