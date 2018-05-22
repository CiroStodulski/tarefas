import React from 'react';
import IconButton from '../template/iconButtom';

import { connect } from 'react-redux';
import Todo from './todo';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];
        return list.map((todo) => {
            console.log(todo)
            return (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td><IconButton hide={todo.done} style="success" icon="check" onClick={() => props.handleMarkAsDone(todo)} /></td>
                    <td><IconButton hide={!todo.done} style="warning" icon="undo" onClick={() => props.handleMarkAsPending(todo)} /></td>
                    <td><IconButton hide={!todo.done} style="danger" icon="trash-o" onClick={() => props.handleRemove(todo)} /></td>
                </tr>
            )
        })
    }

    return (
        <table className="table" >
            <thead>
                <tr><th>Descriçao</th><th className="tableActions">Açoes</th></tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )

}

const mapStateToProps = state => ({ list: state.todo.list })

export default connect(mapStateToProps)(TodoList)