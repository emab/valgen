import React from 'react';
import TabBase from '../TabBase';
import { addCurrentValue, removeCurrentValue } from '../store/actions';

const PersonalTab: React.FC = () => {
  return <TabBase title={'Current Organisational Values'} addValue={addCurrentValue} removeValue={removeCurrentValue} />;
};

export default PersonalTab;
