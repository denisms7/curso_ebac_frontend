$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('#celu').click(function () {
        $('#telefone').val('')
        $('#telefone').mask('(00) 0000-0000')
    });

    $('#tele').click(function () {
        $('#telefone').val('')
        $('#telefone').mask('(00) 00000-0000')
    });


})