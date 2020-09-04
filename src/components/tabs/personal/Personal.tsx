import React from 'react';
import TabBase from '../TabBase';
import { addPersonalValue, removePersonalValue } from '../store/actions';

const PersonalTab: React.FC = () => {
  return <TabBase title={'Personal Values'} addValue={addPersonalValue} removeValue={removePersonalValue}/>;
};

export default PersonalTab;
