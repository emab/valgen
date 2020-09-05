import { Checkbox } from '@material-ui/core';
import cn from 'classnames';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { State } from '../../types/State';
import { Tab } from '../../types/Tab';
import { Value } from '../../types/Value';

interface Props {
  title: string;
  addValue: Function;
  removeValue: Function;
  tab: Tab;
  state: State;
  values: Value[];
}

const TabBase: React.FC<Props> = ({
  title,
  addValue,
  removeValue,
  tab,
  state,
  values,
}) => {
  const dispatch = useDispatch();
  const onToggleValue = (evt: React.ChangeEvent, checked: boolean) => {
    if (canSelectValue() || !checked) {
      const valueToToggle = values.find((val) => val.name === evt.target.id);
      if (checked) {
        dispatch(addValue(valueToToggle));
      } else {
        dispatch(removeValue(valueToToggle));
      }
    }
  };

  const canSelectValue = (): boolean => {
    return getCheckedValues().length < 10;
  };

  const getCheckedValues = () => {
    if (state) {
      switch (tab) {
        case Tab.PERSONAL:
          return state.personal.values;
        case Tab.CURRENT:
          return state.current.values;
        case Tab.IDEAL:
          return state.ideal.values;
      }
    }
    return [];
  };

  return (
    <div className={cn('h-full', { ['bg-green-200']: !canSelectValue() })}>
      <div className="bg-gray-200 py-2">
        <h1 className="text-center">{title}</h1>
      </div>
      <div className="grid grid-cols-3">
        {values.map((val, i) => {
          return (
            <div key={val.name}>
              <Checkbox
                id={val.name}
                onChange={onToggleValue}
                checked={getCheckedValues().includes(val)}
              />
              {val.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state: State) => ({
  state: state,
  values: state.all.values,
});

export default connect(mapStateToProps)(TabBase);
