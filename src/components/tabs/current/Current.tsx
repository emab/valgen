import React from 'react';
import TabBase from '../TabBase';
import { addCurrentValue } from '../store/actions';

const PersonalTab: React.FC = () => {
  return <TabBase title={'Current Organisational Values'} addValue={addCurrentValue} />;
};

export default PersonalTab;
