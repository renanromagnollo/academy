import React, {useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const dobrarNumero = (n) => {
    return n * 28
}

const verificarPar = (numero) => {
    const v = numero % 2 === 0 ? true : false
    return v === true ? 'Sim' : 'Não'
}


const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [dobrado, setDobro] = useState(0)

    const [n, setN] = useState(0)
    const [ePar, setEpar ] = useState(false)

    useEffect(_ => {
        setDobro(dobrarNumero(number))
    }, [number])

    useEffect(_ => {
        number == 5 ? 
            document.querySelector('input').setAttribute('step', '5') 
            :
            document.querySelector('input').setAttribute('step', '0.5') 
    }, [number])

    useEffect( _ => {
        setEpar(verificarPar(n))
    }, [n])
    

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">R$28/kg - Valor = </span>
                    <span className="text red">{'R$'+dobrado.toFixed(2).replace('.', ',')}</span>
                </div>
                <input type="number" className="input" value={number} size='4'
                onChange={e => setNumber(e.target.value)}/>
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <div>
                    <span className="text">É par? R: </span>
                    <span className="text red">{ePar}</span>
                </div>
            </div>
            <input type="number" className="input"
            onChange={e => setN(e.target.value)}/>
        </div>
    )
}

export default UseEffect
