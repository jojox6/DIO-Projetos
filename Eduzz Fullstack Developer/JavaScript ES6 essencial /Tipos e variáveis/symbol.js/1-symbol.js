const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Joseph',
    [nameSymbol2]: 'Da Silva',
    lastName: 'Oliveira'
}

console.log(user);

// Symbols criam propriedades que não são enumberables
for (const key in user){
    if(user.hasOwnProperty(key)){
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user));

// Criar um enum

const directions = {
    UP: Symbol ('UP'),
    DOWN: Symbol ('DOWN'),
    LEFT: Symbol ('LEFT'),
    RIGHT: Symbol ('RIGHT')
};