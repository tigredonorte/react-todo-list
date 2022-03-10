import React, { useCallback, useState } from 'react';

import { GoalFormComponent } from '../components/goal-form/GoalForm';
import { List } from '../components/list/List';
import { Item } from '../models/item.model';

interface GoalScreenInput { } 

export const GoalScreen: React.FC<GoalScreenInput> = (props) => {

    const [ items, setItems ] = useState<Item[]>([]);
    const completeItem = useCallback((item: Item) => setItems(items => {
        const index = items.findIndex(it => it.key === item.key);
        if (!items[index]) {
            return items;
        }
        const items2 = [...items];
        items2[index] = {
            ...items2[index],
            checked: !items2[index]?.checked
        }
        return [...items2];
    }), [ setItems ]);

    const removeItem = useCallback((item: Item) => setItems(
        items => items.filter(it => it.key !== item.key)
    ), [ setItems ]);

    const addItem = useCallback((item: Item) => setItems(
        list => list.concat(item)
    ), [ setItems ]);

  return (
    <div>
      <h1> This is my list </h1>
      <GoalFormComponent onCreate={addItem}/>
      <List items={items} completeItem={completeItem} removeItem={removeItem} />
    </div>
  );
}
