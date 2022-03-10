import './List.scss';

import React from 'react';

import { Item } from '../../models/item.model';
import { ListItem } from './ListItem';

interface ListInput { 
    items: Item[];
    completeItem: (it: Item) => void;
    removeItem: (it: Item) => void;
}

export const List: React.FC<ListInput> = (props) => {
    return (
        <ul className='ListComponent'>
            {
                props.items.map(it => (
                    <ListItem 
                        key={it.key} 
                        item={it} 
                        completeItem={() => props.completeItem(it)}
                        removeItem={() => props.removeItem(it)}
                    />)
                )
            }
        </ul>
    );
}
