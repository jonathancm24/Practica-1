interface ICancha {
    id:number
    Descripcion:string
}

interface IDeportista {
    id:number
    Nomre:string
    Identificacion:string
    Equipo_que_representa:string
}

interface ISeparacion {
    id:number
    id_Cancha:ICancha []
    Id_Deprotista:IDeportista []
    Fecha_de_separacion:string
    Hora_desde:string
    Hora_hasta:string
}

const canchas: ICancha [] =[
    {id:1,Descripcion:"Cancha sintetica ubicada en la parte central"},
    {id:2,Descripcion:"Cancha principal de cesped"}
]
const Deportistas: IDeportista [] = [
    {id:1,Nomre:"Carlos",Identificacion:"1304623201",Equipo_que_representa:"Los cuervos"},
    {id:2,Nomre:"Juan",Identificacion:"1302567345",Equipo_que_representa:"Los Leones de Monterrei"}

]
const separaciones:ISeparacion []=[
{id:1,id_Cancha:[
        {id:1,Descripcion:"Cancha sintetica ubicada en la parte central"}
    ],Id_Deprotista:[
        {id:1,Nomre:"Carlos",Identificacion:"1304623201",Equipo_que_representa:"Los cuervos"}
    ],Fecha_de_separacion:"26/04/2024",Hora_desde:"11:00",Hora_hasta:"13:00"
},
    {
        id:2,id_Cancha:[
            {id:2,Descripcion:"Cancha principal de cesped"}
        ],Id_Deprotista:[
            {id:2,Nomre:"Juan",Identificacion:"1302567345",Equipo_que_representa:"Los Leones de Monterrei"}
        ],Fecha_de_separacion:"25/04/2024",Hora_desde:"8:00",Hora_hasta:"10:00"
    }
]

Deportistas.forEach(deportista => {
    console.log(`ID: ${deportista.id}`);
    console.log(`Nombre: ${deportista.Nomre}`);
    console.log(`Identificación: ${deportista.Identificacion}`);
    console.log(`Equipo que representa: ${deportista.Equipo_que_representa}`);
    console.log('-------------------------');
});

function buscarPorId<T extends {id: number}>(arreglo: T[], id: number, callback: (objeto: T | undefined) => void) {
    const objetoEncontrado = arreglo.find(objeto => objeto.id === id);
    callback(objetoEncontrado);
}


buscarPorId(Deportistas, 3, (deportista) => {
    if (deportista) {
        console.log(`ID: ${deportista.id}`);
        console.log(`Nombre: ${deportista.Nomre}`);
        console.log(`Identificación: ${deportista.Identificacion}`);
        console.log(`Equipo que representa: ${deportista.Equipo_que_representa}`);
        console.log('-------------------------');
        console.log('-------------------------');
    } else {
        console.log('No se encontró un deportista con ese ID.');
        console.log('-------------------------');
        console.log('-------------------------');
    }
});
// Usando Promises
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => response.json())
    .then(data => {
        console.log(`Nombre: ${data.name}`);
        console.log(`Altura: ${data.height}`);
        console.log(`Peso: ${data.weight}`);
    })
    .catch(error => console.error('Error:', error));

// Usando Async/await
async function obtenerDatosPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
        const data = await response.json();
        console.log(`Nombre: ${data.name}`);
        console.log(`Altura: ${data.height}`);
        console.log(`Peso: ${data.weight}`);
    } catch (error) {
        console.error('Error:', error);
    }
}
obtenerDatosPokemon()