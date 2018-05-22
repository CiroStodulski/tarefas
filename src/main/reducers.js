import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
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
    })
})

export default rootReducer;