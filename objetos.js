const data = {
    nombre: 'Luis', 
    apellido: 'Ibañez' ,
    edad: 24,
    altura: 1.87,
    eresDesarrollador: true
};

const myAge = data.edad;


const list = [ data, 
{   
    nombre: 'Juan', 
    apellido: 'Navarro' ,
    edad: 22,
    altura: 1.69,
    eresDesarrollador: false
},
{
    nombre: 'Cristian', 
    apellido: 'Villafañe' ,
    edad: 25,
    altura: 1.85,
    eresDesarrollador: false
}];


const newlist = [...list].sort(( a, b ) => a.edad - b.edad);
