import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'Qual bicho transmite a doença de chagas?', [
        RespostaModel.errada('Abelha'),
        RespostaModel.errada('Barata'),
        RespostaModel.errada('Pulga'),
        RespostaModel.certa('Barbeiro')
        
        // new RespostaModel('Abelha', false),
        // new RespostaModel('Barata', false),
        // new RespostaModel('Pulga', false),
        // new RespostaModel('Barbeiro', true),
    ]),
    new QuestaoModel(202, 'Qual fruto é conhecido como Jerimum?', [
        RespostaModel.errada('Caju'),
        RespostaModel.errada('Côco'),
        RespostaModel.errada('Chuchu'),
        RespostaModel.certa('Abóbora')
    ])
]

export default questoes