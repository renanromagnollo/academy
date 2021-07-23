



// let inCep = document.querySelector('#cep')


// inCep.addEventListener('keypress', e => {
//         let tecla = String.fromCharCode(e.keyCode)
//         console.log(tecla)
        
//         isNaN(tecla) ? inCep.value += '' : inCep.value += tecla
//     } )

function mascaraNumero(num){
    num = num.replace(/\D/g, '')
    return num
}

function getObjMascNum(objeto, mascara) {
    o = objeto
    m = mascara
    setTimeout('executandoMascaraNumero()', 1)
}

function executandoMascaraNumero() {
    o.value = m(o.value)
}


function mCEP(cep){
    cep=cep.replace(/\D/g,"")
    cep=cep.replace(/^(\d{2})(\d)/,"$1.$2")
    cep=cep.replace(/\.(\d{3})(\d)/,".$1-$2")
    return cep
}

function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value=masc(obj.value)
}

async function apiCep(cep) {
    const url = `http://viacep.com.br/ws/${cep}/json/`
    // const url = `https://ws.apicep.com/cep.json?code=${cep}`
    // fetch(url)
    //     .then(response => response.json())
    //     .then(response => console.log(response.state))
    const data = await fetch(url)
    const dataJson = await data.json()
    //  console.log(dataJson)
    return dataJson

}

function formatCep(i) {
    const cep = i.replace(/^(\d{2})\.(\d{3})\-(\d{3})$/, '$1$2$3')
    // const cep = i.replace(/^(\d{2})\.(\d{3})\-(\d{3})$/, '$1$2-$3')
    // console.log(cep)
    return cep
}

async function getCep(c) {
    const dataCep = await apiCep(formatCep(c))
    console.log(dataCep)
    return dataCep
}

const insertInfos = async c => {
    const infos = await getCep(c)
    if(infos.hasOwnProperty('erro')) {
        alert('CEP Inválido!')
    } else{
        document.querySelector('#endereco').value = infos.logradouro
        document.querySelector('#bairro').value = infos.bairro
        document.querySelector('#cidade').value = infos.localidade
        document.querySelector('#estado').value = infos.uf
    }
}

const delInfos = _ => {
    document.querySelector('#endereco').value = ''
    document.querySelector('#bairro').value = ''
    document.querySelector('#cidade').value = ''
    document.querySelector('#estado').value = ''
}

document.querySelector('#cep').addEventListener('keyup', e => {
    const conteudo = document.querySelector('#cep').value
    conteudo.length === 10 ? insertInfos(conteudo) : delInfos()
    
})
