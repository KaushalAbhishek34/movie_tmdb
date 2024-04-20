import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDFmYTQ4YjljNzZiNThlMjBlNDhjYTU1OTc1MDVkNyIsInN1YiI6IjY1YTE2MjBiY2NkZTA0MDEyODhiOTFiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.imiVjE3_95i4RQKwJaj-Wx4lN6rkpX2yH-y_h0q-Nn4"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN ,
}

export const fetchDataFromApi = async (url,params) => {
    try{
        const {data} = await axios.get(BASE_URL + url,{
           headers,
           params
        })
        return data
        
    }catch (error){
            console.log(error);
            return err;
    }
}