const usuarios = [{
    id: 1,
    nome: 'João Silva',
    email: 'jsilva@zemail.com',
    idade: 29,
    perfil_id: 1
}, {
    id: 2,
    nome: 'Rafael Junior',
    email: 'rafajun@zemail.com',
    idade: 31,
    perfil_id: 2
}, {
    id: 3,
    nome: 'Daniela Smith',
    email: 'danismi@zemail.com',
    idade: 24,
    perfil_id: 1
}]

const perfis = [
    { id: 1, nome: 'Comum' },
    { id: 2, nome: 'Administrador' }
]

module.exports = {usuarios, perfis}