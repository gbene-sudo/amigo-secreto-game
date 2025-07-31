let listaAmigos = []; // vector de amigos 

function recorrerArray() {
    let amigos = document.querySelector('#listaAmigos'); // selecciona el elemento con id listaAmigos
    console.log(amigos);
    amigos.innerHTML = ""; //limpiar la lista antes de agregar los amigos
    for (let i = 0; i < listaAmigos.length; i++) { //recorrer el array amigos y agregar cada amigo a la lista por medio de bucle for
        let listaNueva = document.createElement("li");  //crear un elemento li
        listaNueva.textContent = listaAmigos[i];//asignar el nombre del amigo al elemento li
        amigos.appendChild(listaNueva);//agregar el elemento li a la lista
    }
};

function agregarAmigo(){
    let nombre = document.querySelector("#amigo").value; // extraigo el valor de la id amigo
    if( nombre !== ""){ // el campo no debe estar vacio
        if(listaAmigos.includes(nombre)){ // si el nombre ya existe en la lista
            alert("Este amigo ya está en la lista"); // salta la alerta
        }else{
            listaAmigos.push(nombre); // si el nombre no estaba anteriormente lo agregamos
            document.querySelector("#amigo").value = ""; // Limpio el campo 
        };
    }else{
        alert("Debes ingresar un nombre"); // si el campo esta vacio salta la alerta
    }
    recorrerArray(); // Muestro el nombre debajo del campo
};

function sortearAmigo(){
    let ganador = document.getElementById("resultado"); // uso el campo resultado para mostrar el ganador
    let aleatorio = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; // uso la funcion random para el indice del amigo ganador
    ganador.textContent = `El amigo secreto sorteado es: ${aleatorio}`; // muestro el amigo ganador
    return;
};

