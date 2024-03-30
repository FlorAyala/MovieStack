//console.log(data);
let contenedorCards = document.getElementById("contenedorCards")//invoca al contenedor para despues renderisar las cards en el html


//crear las cards
let crearCards = obj => `
        <img class=" h-1/2 object-contain " src="${obj.image}" alt="${obj.title}">
        <h3 class= "font-medium pl-4 text-lg ">${obj.title}</h3>
        <h4 class= "pl-4 ">${obj.tagline}</h4>
        <p class="pl-4 pb-[10px]"> ${obj.overview.slice(0,40)}...</p>
        <a  href="" class= "bg-black  text-white p-2 w-2/4 text-center">Ver mas</a>
    
`
//console.log(crearCards(data));


//renderisar las cards en el hmtl para que aparezca en pantalla//
// con un construcutor DocumentFragment creo un nuevo obj que una vez utilizado se borra
let fragmento = new DocumentFragment()
for (const iterator of data) {
    let aux = document.createElement("div")
    aux.innerHTML +=crearCards(iterator)
    aux.className ="flex flex-col  w-3/4 border-black border-solid border-2 gap-3 p-3   rounded-lg md:w-1/3 lg:w-1/4 "
    fragmento.appendChild(aux)
}
contenedorCards.appendChild(fragmento)//le agrego al contenedo que trae desde el HTML al fragmento como nodo/hijo


