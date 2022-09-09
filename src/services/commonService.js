const options = { headers: { "Content-Type": "application/json", Accept: 'application/json' } }

export const getPersonajes = async () => {

    const data = await fetch("https://rickandmortyapi.com/api/character/", options)
    const {results} = await data.json()

    //console.log(data)

    return results;
}

export const getDetailPersonaje=async (id)=>{
    const response =await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data =await response.json();


    return data
}

export const getEpisodios = async () => {

    const data = await fetch("https://rickandmortyapi.com/api/episode", options)
    const {results} = await data.json()

    //console.log(data)

    return results;
}

export const getDetailEpisodio=async (id)=>{
    const response =await fetch(`https://rickandmortyapi.com/api/episode/${id}`)
    const data =await response.json();


    return data
}