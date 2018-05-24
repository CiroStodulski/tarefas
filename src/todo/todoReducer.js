import { bindActionCreators } from "redux";

const INITIAL_STATE = {
    description: 'ler livro',
    list: [
        {
            _id: 1,
            description: 'Pagar fatura do cartao',
            done: true
        },
        {
            _id: 2,
            description: 'Reuniao com fulano',
            done: false
        },
        {
            _id: 3,
            description: 'consulta medica',
            done: false
        }
    ]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, description: action.payload.data }
        default:
            return state
    }
}