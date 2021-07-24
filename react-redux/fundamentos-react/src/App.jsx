import './App.css'
import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/NumAleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Alunos from './components/repeticao/ListaAlunos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className='Cards'>
                <Card Title='Contador' color='#080'>
                    <Contador numeroInicial={10}/>
                </Card>
                <Card Title='Componente Controlado' color='#080'>
                    <Input />
                </Card>
                <Card Title='Indireta com State' color='#080'>
                    <IndiretaPai />
                </Card>
                <Card Title='Condicional' color='#080'>
                    <UsuarioInfo usuario={{nome: 'Renan'}} />
                </Card>
                <Card Title='Par ou Impar' color='#080'>
                    <ParOuImpar numero={20}/>
                </Card>
                <Card Title='Alunos' color='#080'>
                    <Alunos />
                </Card>
                <Card Title='Componente com filhos' color='#080'>
                    <Familia sobrenome='Romagnoli'>
                        <FamiliaMembro nome="Renan" />
                        <FamiliaMembro nome="Arthur" />
                    </Familia>
                </Card>
                <Card Title='Exemplo de Card' color='#080'>
                    <Aleatorio min={4} max={20} /> 
                </Card>
                <Card Title='Primeiro'>
                    <Primeiro />
                </Card>
                <Card Title='Com Paramentro'>
                    <ComParametro aluno="Renan" nota={ 8 }></ComParametro>
                </Card>
            </div>
        </div>
    )
}