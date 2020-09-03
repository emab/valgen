import React from 'react';
import TabBase from '../TabBase';
import { addIdealValue } from '../store/actions';

const PersonalTab: React.FC = () => {
  return (
    <TabBase title={'Ideal Organisational Values'} addValue={addIdealValue} />
  );
};

export default PersonalTab;
