function salvarUsuario(req, res) {
	res.send('Usuário > Salvar')
}

function obterUsuario(req, res) {
	res.send('Usuário > Obter')
}

module.exports = { salvarUsuario, obterUsuario }