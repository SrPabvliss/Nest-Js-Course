export let name: string = "Fernando";
export const isValid: boolean = true;
export const age: number = 35;

name = "Maria";
// name = 123, Error
// name = true Error

export const templateString = ` Esto es un string
multinlinea
que puede tener 'comillas simples' 
y "comillas dobles", además de variables como \${name} = ${name}
incluso expresiones como \${1 + 1} = ${1 + 1}`;

console.log(templateString);
