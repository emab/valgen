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
  allValues: Value[];
  personalValues: Value[];
  currentValues: Value[];
  idealValues: Value[];
}

const TabBase: React.FC<Props> = ({
  title,
  addValue,
  removeValue,
  tab,
  allValues,
  currentValues,
  personalValues,
  idealValues,
}) => {
  const dispatch = useDispatch();
  const onToggleValue = (evt: React.ChangeEvent, checked: boolean) => {
    if (canSelectValue() || !checked) {
      const valueToToggle = allValues.find((val) => val.name === evt.target.id);
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
    switch (tab) {
      case Tab.PERSONAL:
        return personalValues;
      case Tab.CURRENT:
        return currentValues;
      case Tab.IDEAL:
        return idealValues;
    }
  };

  return (
    <div className={cn('h-full', { ['bg-green-200']: !canSelectValue() })}>
      <div className="bg-gray-200 py-2">
        <h1 className="text-center">{title}</h1>
      </div>
      <div className="grid grid-cols-3">
        {allValues.map((val) => {
          return (
            <div key={val.name}>
              <Checkbox
                id={val.name}
                onChange={onToggleValue}
                checked={
                  getCheckedValues().find(
                    (checkedVal) => checkedVal.name === val.name
                  )
                    ? true
                    : false
                }
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
  personalValues: state.personal.values,
  currentValues: state.current.values,
  idealValues: state.ideal.values,
  allValues: state.all.values,
});

export default connect(mapStateToProps)(TabBase);
