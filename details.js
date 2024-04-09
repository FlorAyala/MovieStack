//console.log(data);
let url = new URLSearchParams(location.search)
let id = url.get('id')
//console.log(id);

let contenedorPrincipal = document.getElementById("contenedorCardsDetails")
//console.log(data);
let tabla =document.getElementById('tabla')
let tabla2 =document.getElementById('tabla2')

let peliculas = (array, key ) => array.find(obj => obj.id === key)
//console.log(peliculas(data , id)); 


let crearCards = function(obj) {
    return`                  
<img class=" h-1/2 object-contain rounded-md " src="${obj.image}" alt="${obj.title}">
<div class="flex flex-col">
<h3 class="font-medium pl-4 text-lg font-black"><b>${obj.title}</b></h3>
<h4 class="pl-4 ">${obj.tagline}</h4>
<p class="pl-4 pb-[10px]"> ${obj.overview}</p>


`}
contenedorPrincipal.innerHTML = (crearCards(peliculas(data,id))) ;

//console.log(crearCards);

//crear la tabla

let crearTabla = obj => `
    <tbody class="">
        <tr class="border border-black ">
            <td class='p-3'>original language: </td>
            <td class='p-3'>${obj.original_language}</td>
        </tr> 
        <tr class="border border-black  ">
            <td class='p-3'>release date: </td>
            <td class='p-3'>${obj.release_date}</td>
        </tr> 
        <tr class="border border-black  ">
            <td class='p-3' >runtime: </td>
            <td class='p-3'>${obj.runtime}</td>
        </tr> 
        <tr class="border border-black  ">
            <td class='p-3'> status: </td>
            <td class='p-3'>${obj.status}</td>
        </tr>   
    </tbody>
   
`
let crearTabla2 = obj => `    
    <tbody class="">
        <tr class="border border-black  ">
            <td class='pl-3'>vote average: </td>
            <td class='pl-3'>${obj.vote_average}</td>
        </tr> 
        <tr class="border border-black  ">
            <td class='pl-3'>budget: </td>
            <td class='pl-3'>${obj.budget}</td>
        </tr> 
        <tr class="border border-black  ">
            <td class='pl-3'>revenue: </td>
            <td class='pl-3'>${obj.revenue}</td>
        </tr>                           
    </tbody>
`
tabla.innerHTML = (crearTabla(peliculas(data,id))) ;
tabla2.innerHTML = (crearTabla2(peliculas(data,id))) ;
//console.log(crearTabla);
//renderizar la tabla 

 