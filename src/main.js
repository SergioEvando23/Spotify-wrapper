/*                     CALCULADORA TESTES

*****************************************************************************************************
const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const div = (num1, num2) => (num2 === 0) ? 'Não é possivel divisão por zero!' : num1 / num2;

const mult = (num1, num2) => num1 * num2;


export { sum, sub, div, mult }
*****************************************************************************************************
*/


const fizzBuss = (num) => {
    if (num === 0) return 0;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzBuss';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'Buss';
    return num;
};

export default fizzBuss;
