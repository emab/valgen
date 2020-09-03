import { Tab } from '../../../types/Tab';
import { Value } from '../../../types/Value';

const ADD_PERSONAL_VALUE = `ADD_${Tab.PERSONAL}_VALUE`;
const ADD_CURRENT_VALUE = `ADD_${Tab.CURRENT}_VALUE`;
const ADD_IDEAL_VALUE = `ADD_${Tab.IDEAL}_VALUE`;

const addValue = (type: Tab) => (value: Value) => {
  switch (type) {
    case Tab.PERSONAL:
      return { type: ADD_PERSONAL_VALUE, value };
    case Tab.CURRENT:
      return { type: ADD_CURRENT_VALUE, value };
    case Tab.IDEAL:
      return { type: ADD_IDEAL_VALUE, value };
  }
};

export const addPersonalValue = addValue(Tab.PERSONAL);
export const addCurrentValue = addValue(Tab.CURRENT);
export const addIdealValue = addValue(Tab.IDEAL);
