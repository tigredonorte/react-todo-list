import './GoalForm.scss';

import React from 'react';

import { Item } from '../../models/item.model';

interface GoalFormInput {
    onCreate: (it: Item) => void;
} 

export const GoalFormComponent: React.FC<GoalFormInput> = (props) => {

    const addGoal = (ev: any) => {
        const formData = new FormData(ev.currentTarget);
        ev.preventDefault();
        const formObject = Object.fromEntries(formData.entries()) as { goal: string; };
        ev.target.reset();
        props.onCreate({
            key: (Math.random() * 1000000).toString(),
            value: formObject.goal,
            checked: false
        });
    }

    return (
        <form className='GoalFormComponent' onSubmit={addGoal}>
            <input type='text' name='goal'/>
            <button type='submit'>Create </button>
        </form>
    );
};
