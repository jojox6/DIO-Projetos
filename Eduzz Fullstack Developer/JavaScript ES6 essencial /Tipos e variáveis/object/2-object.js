const user = {
    name: 'Joseph',
    lastName: 'Da Silva Olveira'
}

// Recupera as chaves do objeto
//console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
//console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
//console.log('\nLista de propriedades e valores:', Object.entries(user));

// Faz Merge em propridades de objetos
//Object.assign(user, {fullName: 'Joseph Da Silva Oliveira'});
//console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto margeando dois ou mais objetos', Object.assign({}, user,{age: 26}));