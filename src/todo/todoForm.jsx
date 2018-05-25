import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButtom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { add, changeDescription, search, clear } from './todoActions'

class TodoForm extends React.Component {

    constructor(props) {
        super(props)
        this.keyHandle = this.keyHandle.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandle(e) {
        const { add, search, description, clear } = this.props;
        if (e.key === "Enter")
            e.shiftKey ? search() : add(description);
        else if (e.key == 'Escape')
            clear();
    }

    render() {
        const { add, search, description, clear } = this.props;
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
                    <IconButton style="primary" icon="plus" onClick={() => add(description)} />
                    <IconButton style="info" icon="search" onClick={search} />
                    <IconButton style="default" icon="close" onClick={() => clear()} />
                </Grid>
            </div>

        )
    }

}



const mapStateToProps = state => ({
    description: state.todo.description
})

const mapDispatchToPros = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)

export default connect(mapStateToProps, mapDispatchToPros)(TodoForm)