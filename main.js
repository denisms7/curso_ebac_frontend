const notas = [
    { nome: 'Denis', nota: 8 },
    { nome: 'Joaquina', nota: 6.5 },
    { nome: 'Fabiana', nota: 5 },
    { nome: 'Berenice', nota: 4 },
    { nome: 'Jubcleia', nota: 3 },
];

const aprovados = (notas) => {
    return notas.filter(aluno => aluno.nota >= 6);
}

const alunosaprovados = aprovados(notas)

console.log(alunosaprovados)


