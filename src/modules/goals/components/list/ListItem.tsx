import './List.scss';

import React from 'react';

import { Item } from '../../models/item.model';

interface ListItemInput { 
    item: Item;
    completeItem: (it: Item) => void;
    removeItem: (it: Item) => void;
}

export const ListItem: React.FC<ListItemInput> = (props) => {
    return <li onClick={() => props.completeItem(props.item)} className={props.item.checked ? 'ListItem checked' : 'ListItem'}>
        <span>{ props.item.value }</span>
        <button onClick={() => props.removeItem(props.item)}>X</button>
    </li>
}