import React, { useState } from 'react';
import { Value } from '../../types/Value';
import { Checkbox } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { VALUES } from '../../valuesArray';

interface Props {
  title: string;
  addValue: Function;
  removeValue: Function;
}

const TabBase: React.FC<Props> = ({ title, addValue, removeValue }) => {
  const [values, setValues] = useState(VALUES);
  const dispatch = useDispatch();
  const onToggleValue = (evt: React.ChangeEvent, checked: boolean) => {
    const valueToToggle = values.find((val) => val.name === evt.target.id);
    if (checked) {
      dispatch(addValue(valueToToggle));
    } else {
      dispatch(removeValue(valueToToggle));
    }
  };
  return (
    <>
      <h1>{title}</h1>
      <div className="grid grid-cols-3">
        {values.map((val, i) => {
          return (
            <div key={val.name}>
              <Checkbox id={val.name} onChange={onToggleValue} />
              {val.name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TabBase;
