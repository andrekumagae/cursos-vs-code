function getAdmins(map){
    let admins = []
    for (const [key, value] of map) {
        if(value == 'Admin')
        admins.push(key);
    }
}

const usuarios = new Map();
usuarios.set('Luiz','Admin');
usuarios.set('Stephany','Admin');
usuarios.set('Jorge','User');
usuarios.set('Natália','Admin');

console.log(getAdmins(usuarios));