/*
Os tipos básicos de variáveis em Typescript são:
booleano: boolean
numeros: number
string: string
Array:
Enum: 
*/


// booleanos
let success = false; // forma implícita

let failed: boolean = true; // forma explícita
// success = "aa";

// numeros
let num1: number = 10;
let num2: number = 10.50;
let num3: number = 0xFA;

// string
let nameText = 'Luuiz';
let name1: string = 'João';

nameText = `O nome dele é: ${name1}`;

// Array

let arrayStrings: string[] = ['a', 'b', 'c'];

let arrayExample: Array<string> = ['a', 'os'];

let arrayAny: Array<any> = ['a', false, 0];
// Enum
