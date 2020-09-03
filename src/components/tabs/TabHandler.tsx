import React from 'react';
import PersonalTab from './personal';
import { Tab } from '../../types/Tab';
import CurrentTab from './current';
import IdealTab from './ideal';

interface Props {
  tab: Tab;
}

const TabHandler: React.FC<Props> = ({ tab }) => {
  switch (tab) {
    case Tab.PERSONAL:
      return <PersonalTab />;
    case Tab.CURRENT:
      return <CurrentTab />;
    case Tab.IDEAL:
      return <IdealTab />;
    default:
      return <div>Woops! Something went wrong!</div>;
  }
};

export default TabHandler;
