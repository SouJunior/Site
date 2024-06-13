export const sidebarOptions = [
    {name: 'Home', path: '/admin'},
    {name: 'Gestões', path: '/', sub: [
        {name: 'Dashboard', path: '/'},
        {name: 'Mentorias', path: '/'},
        {name: 'Vagas', path: '/'},
        {name: 'RH', path: '/'},
        {name: 'Site', path: '/'},
    ]},
    {name: 'Gerenciador de Acessos', path: '/', sub: [
        {name: 'Acessos', path: '/'},
        {name: 'Pedidos de Permissão', path: '/'},
    ]},
    {name: 'Perfil', path: '/', sub: [
        {name: 'Meus Dados', path: '/'},
    ]},
    {name: 'Redes Sociais', path: '/'},
    {name: 'Suporte', path: '/', sub: [
        {name: 'Reportar Problemas', path: '/'},
    ]},
    {name: 'Sair', path: '/'}
]