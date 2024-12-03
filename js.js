var n1=parseFloat(prompt("Digite um número: "));
var n2=parseFloat(prompt("Digite outro número: "));

if(isNaN(n1)||isNaN(n2)){
    alert("Digite um número válido");
}else{
    if(n1>n2){
        alert("O número primeiro número é maior");
    }else if(n2>n1){
        alert("O segundo número é maior");
    }else{
        alert("Os dois números são iguais")
    }
}