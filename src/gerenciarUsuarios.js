const usuarios = ['Gilson', 'Kissia', 'Rose', 'Ze']

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(nome) {
    usuarios.push(nome);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
};