const obj = { a: 1, b: 2, c: 3, suma(){return a + b + c}}

const jsn = JSON.stringify(obj) // Gerando um JSON. Obs: Ele não suporta função

const objDeJson = JSON.parse('{ "a": 1.4, "b": true, "c": "palavra", "o": {}, "i": []}') //Gerando um obj