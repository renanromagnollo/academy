import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from '../../store'
import { numberAdd2, login } from '../../store/actions'



const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {state.user ? 
                    (<span className="text">{state.user.name}</span>)
                    :
                    (<span className="text">Sem Usuário</span>)}
                
                <span className="text">{state.number}</span>
                <div>
                    <buton className="btn"
                        onClick={ _ => login(dispatch, 'Renan') }>Login</buton>
                    <buton className="btn"
                        onClick={ _ => numberAdd2(dispatch) }>+2</buton>
                    <buton className="btn"
                        onClick={ _ => dispatch({ type: 'x7' }) }>x7</buton>
                    <buton className="btn"
                        onClick={ _ => dispatch({ type: '/25'}) }>: 25</buton>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
