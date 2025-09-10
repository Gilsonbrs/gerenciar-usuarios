const usuarios = [
    {
        nome: 'Gilson',
        email: 'gilson@teste.com'
    },
    {
        nome: 'Kissia',
        email: 'kissia@teste.com'

    },
    {
        nome: 'Barbara',
        email: 'barbara@teste.com'

    },
    {
        nome: 'Antonella',
        email: 'antonella@teste.com'

    }
]

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

function capturarPropiedadeDoUsuario(indiceDoUsuario, propiedade) {
    return usuarios.at[indiceDoUsuario][propiedade];
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
};