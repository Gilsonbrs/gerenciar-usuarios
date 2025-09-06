const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de gestão de Usarios', () => {
    it('Validar que posso adiconar um novo usuario na lista', function () {

        // 1. Adicionar um nove nome na lista de usuarios 
        adicionarNovoUsuario('Kaue');

        // 2. Retornar a lista de usuarios 
        const listaDeUsuarios = retornarUsuarios();

        // 3. Comparar se o novo nome esta no fim da lista de usuarios 
        expect(listaDeUsuarios.at(-1)).to.equal('Kaue');
    })
});