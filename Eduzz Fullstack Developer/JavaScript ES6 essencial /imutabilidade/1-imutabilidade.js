const user = {
    name: 'Joseph',
    lastName: 'Oliveira'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName, user);
