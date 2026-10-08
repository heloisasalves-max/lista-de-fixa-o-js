const aluno = {
    nota: 0,
};

console.log(aluno.nota || 10);
console.log(aluno.nota ?? 10);
// || substitui 0, "", false, null, undefined e NaN pelo valor padrão.
// ?? substitui apenas null e undefined. Como o aluno tirou nota 0, usar ?? garante que a nota real dele não é sobrescrita pelo padrão 10.
