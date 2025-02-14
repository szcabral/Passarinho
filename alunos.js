//Variaveis que armazenam as notas do aluno.
var nota1= 4.3;
var nota2= 8.7;
var nota3= 7.2;
var nota4= 0.5;

//Identifique a base de dados utilizada para o sequenciamento do codigo.
var notas= [nota1, nota2, nota3, nota4];
var soma= notas;
var mediaminima= 7.0;// Média mínima definida de acordo com o exercicio.
var media= (nota1 + nota2 + nota3 + nota4) /4;// Média realizada sobre as notas obtidas pelos alunos.
var i= 0;

//A partir iremos ter o objetivo final de aprovação e reprovação dos alunos.
while (i<notas.length){

if (notas[i]>= mediaminima){
    console.log ("Aluno aprovado na disciplina. Média da turma é "+ media.toFixed(2) + ". A nota do aluno é");// toFixed(2) nos retornara duas casas decimais após a virgula.
} else{
    console.log ("Aluno reprovado, nota inferior a media minima 7. Média da turma é "+ media.toFixed(2) + ". A nota do aluno é");// Caso valor falso a media minima será realizado um resultado negativo.
}
{
    console.log(notas[i])
    i++;// Comando irá nos mostrar ao final de cada resultado a nota do aluno final.
}
}