function falar(frase) {
	return new Promise((resolve, reject) => {
		resolve(frase)
	})
}

falar('Oi')
	.then(a1 => a1.concat(', Renan'))
	.then(a2 => a2.concat('!!!'))
	.then(imprimir => console.log(imprimir))

