import React from 'react';
import TabBase from '../TabBase';
import { addPersonalValue } from '../store/actions';

const PersonalTab: React.FC = () => {
  return <TabBase title={'Personal Values'} addValue={addPersonalValue} />;
};

export default PersonalTab;
