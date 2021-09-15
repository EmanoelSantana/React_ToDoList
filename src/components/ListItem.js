import React from 'react';
import Card from './Card';

import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

function doneIcon(props) {

    if (props.done) {
        return <button><DoneIcon /></button>
    } else {
        return <button><DoneOutlineIcon /></button>
    }
}

function ListItem(props) {
    return (
        <li>
            <Card className={props.item.done ? "done item" : "item"}>
                {props.item.text}
                <div>
                    <button onClick={() => { props.onDone(props.item) }}><doneIcon done={props.item.done} /><DoneIcon /></button>
                    <button onClick={() => { props.onItemDeleted(props.item) }}><DeleteIcon /></button>
                </div>
            </Card>
        </li>)
}


export default ListItem;