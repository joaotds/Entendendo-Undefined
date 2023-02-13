let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);

//addSum é uma função sem uma instrução return. A função vai alterar a variável global sum, mas o valor retornado da função é undefined.
