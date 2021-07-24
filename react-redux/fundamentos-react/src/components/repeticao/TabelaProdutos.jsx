import React from 'react'

import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default props => {
    
    function getLinhas() {
        return produtos.map((item, i) => {
            return (
                <tr key={item.id} className={i % 2 == 0 ? 'PAR' : 'IMPAR'}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>R$ {item.preco.toFixed(2).replace('.', ',')}</td>
                </tr>
            )
        })
    }

    return (
        <div className='TabelaProdutos' >
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </div>
    )
}