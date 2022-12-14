import React, {ChangeEvent, useState} from 'react';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

type EditableSpan = {
    title: string
    callback: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpan) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const editHandler = () => {
        setEdit(!edit)
        props.callback(newTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
            ? <input value={newTitle} onBlur={editHandler} autoFocus onChange={onChangeHandler}/>
            : <span onDoubleClick={editHandler}>{props.title}</span>

    );
};