import React, {ChangeEvent} from 'react';

type SuperCheckboxPropsType = {
    checked: boolean
    callback: (eventValue: boolean)=>void
}

export const SuperCheckbox = (props: SuperCheckboxPropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callback(event.currentTarget.checked)
    }

    return (
        <input type="checkbox" checked={props.checked} onChange={onChangeHandler}/>
    );
}