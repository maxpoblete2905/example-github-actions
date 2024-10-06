// script.js

// Accediendo a las variables de entorno
const databaseString = process.env.DATA_BASE_STRING;
const valorUnoSecret = process.env.VALOR_UNO_SECRET;
const valorDosSecret = process.env.VALOR_DOS_SECRET;

console.log("Database String:", databaseString);
console.log("Valor Uno Secret:", valorUnoSecret);
console.log("Valor Dos Secret:", valorDosSecret);
