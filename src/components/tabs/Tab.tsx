import React, { useState } from 'react';
import { VALUES } from '../../valuesArray';
import { Checkbox } from '@material-ui/core';

interface Tab {
  id: number;
}

const Tab: React.FC<Tab> = ({ id }) => {
  const [values, setValues] = useState(VALUES);

  const onSelectValue = (evt: React.ChangeEvent, checked: boolean) => {
    alert(evt.target.id);
  };

  return (
    <div className="grid grid-cols-3">
      {values.map((val, i) => {
        return (
          <div key={val.name}>
            <Checkbox id={val.name} onChange={onSelectValue} />
            {val.name}
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
