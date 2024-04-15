export let filtroPorSelect = (array, arraySelect) =>  array.filter(peliculas => peliculas.genres.some(genero => arraySelect.includes(genero)))

export let filtroPorNombre = (array, peliculaIngresada) => array.filter(peliculas => peliculas.title.toLowerCase().includes(peliculaIngresada.trim().toLowerCase()))




export  function renderCards(movie, contenedor) {    

 let movieFavorite= JSON.parse(localStorage.getItem('peliculasFavoritas'))

//console.log(movieFavorite); 
    contenedor.innerHTML =''
    let template =''
    movie.forEach(obj => {
        template+= `
        <div class= 'flex flex-col  w-3/4 gap-3 p-3  rounded-lg md:w-1/3 lg:w-1/4 hover:scale-110 duration-700 mt-3  shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]' >
        
        <img class=" h-1/2 object-contain " src=" https://moviestack.onrender.com/static/${obj.image}" alt="${obj.title}">
        <h3 class= "font-medium pl-4 text-lg ">${obj.title}</h3>
        <h4 class= "pl-4 ">${obj.tagline}</h4>
        <p class="pl-4 pb-[10px]"> ${obj.overview.slice(0, 40)}...</p>
        <div class='flex flex-row justify-around'>
        <a   href="./details.html?id=${obj.id}" class= "bg-black  text-white p-2 w-2/4 text-center rounded-xl ">See more</a>
        ${movieFavorite.includes(obj.id) ?

        `<button data-peliculas-id='${obj.id}' >
            <img src="./assets/img/cora2.png" class="w-[50px] " alt=" " data-peliculas-id='${obj.id}'>                        
         </button>`           
        :
        `<button data-peliculas-id='${obj.id}' >
        <img src="./assets/img/cora1.png" class="w-[50px] " alt=" " data-peliculas-id='${obj.id}'>                        
            </button>`
        }
        
        </div>       
        </div>
        `
        contenedor.innerHTML=template
    });
    
}
export let crearSelect = genero => `
<option value="${genero}">${genero}</option>
`

 export let crearTabla = obj => `
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
export let crearTabla2 = obj => `    
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
export let crearCards2 = function(obj) {
    return`                  
<img class=" h-1/2 object-contain rounded-md " src=" https://moviestack.onrender.com/static/${obj.image}" alt="${obj.title}">
<div class="flex flex-col">
<h3 class="font-medium pl-4 text-lg font-black"><b>${obj.title}</b></h3>
<h4 class="pl-4 ">${obj.tagline}</h4>
<p class="pl-4 pb-[10px]"> ${obj.overview}</p>
`}