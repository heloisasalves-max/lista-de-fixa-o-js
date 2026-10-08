const pedido = {
    cliente: {
        nome: 'Pedro',
    },
};
const telefone = pedido.cliente?.telefone ?? 'Não informado';
console.log(telefone);
