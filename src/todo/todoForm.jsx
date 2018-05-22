import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButtom';
import { connect } from 'react-redux';

const TodoForm = props => {

    const keyHandle = (e) => {
        if (e.key === "Enter")
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        else if (e.key == 'Escape')
            props.handleClear();
    }

    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input id="description"
                    onChange={props.handleChange}
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    value={props.description}
                    onKeyUp={keyHandle} />
            </Grid>

            <Grid cols="12 9 2">
                <IconButton style="primary" icon="plus" onClick={props.handleAdd} />
                <IconButton style="info" icon="search" onClick={props.handleSearch} />
                <IconButton style="default" icon="close" onClick={props.handleClear} />
            </Grid>
        </div>

    )
}

const mapStateToProps = state => ({
    description: state.todo.description
})

export default connect(mapStateToProps)(TodoForm)