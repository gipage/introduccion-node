let objetocliente = {
    nombre: "Gino",
    anios: 20
}
function showUserNameAge(name, age) {
    return `El nombre de usuario es ${name} y su edad es ${age}`;
}

console.log(showUserNameAge("Luchi", 26));
console.log(showUserNameAge(objetocliente.nombre, objetocliente.anios));

