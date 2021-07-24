const shedule = require('node-schedule') // modulo temporizador

// 5 em 5 seg, qualquer minuto, hora 12, qualquer dia, qualquer mes, terça-feira(2)
const tarefa1 = shedule.sheduleJob('*/5 * 13 * * 2', function () {
    console.log('Eecutando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa2.cancel()
    console.log('Cancelando Tarefa 1 após 20 seg.')
}, 20000)

// ---------------------------------------
// outra forma

const regra = new shedule.RecurrenceRule()
regra.dayOfWeek = [new shedule.Range(1, 5)]
regra.hour = 12
regra.second = 30

const tarefa2 = shedule.sheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
