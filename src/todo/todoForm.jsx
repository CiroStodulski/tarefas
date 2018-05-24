import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButtom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search } from './todoActions'

class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandle(e) {
        if (e.key === "Enter")
            e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
        else if (e.key == 'Escape')
            this.props.handleClear();
    }

    render() {
        return (
            <div role="form" className="todoForm">
                <Grid cols="12 9 10">
                    <input id="description"
                        onChange={this.props.changeDescription}
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        value={this.props.description}
                        onKeyUp={this.keyHandle} />
                </Grid>

                <Grid cols="12 9 2">
                    <IconButton style="primary" icon="plus" onClick={this.props.handleAdd} />
                    <IconButton style="info" icon="search" onClick={this.props.handleSearch} />
                    <IconButton style="default" icon="close" onClick={this.props.handleClear} />
                </Grid>
            </div>

        )
    }

}



const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToPros = dispatch => bindActionCreators({ changeDescription, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(TodoForm)