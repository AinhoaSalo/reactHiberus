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