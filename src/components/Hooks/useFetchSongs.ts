import axios from "axios";
import { useEffect, useState } from "react";

type Songs = {
    idAlbum: number,
    idArtist: number,
    strArtist: string,
    strAlbum: string,
    intYearReleased: number,
}

type FetchMoviesState = {
    songs: Songs[],
    isLoading: boolean,
    error: string | null,
}

const useFetchSongs = () => {
    const [songsState, setSongsState] = useState<FetchMoviesState>({songs: [], isLoading: true, error: null});

    useEffect(() => {
        const fecthMovies = async () => {
            try {
                const response = await axios.get(`https://www.theaudiodb.com/api/v1/json/123/searchalbum.php?s=Oasis`);
                setSongsState({songs: response.data.album, isLoading: false, error: null});
            } catch (error) {
                setSongsState({songs: [], isLoading: false, error: "Error al cargar las canciones"});
            }
        }
        fecthMovies();
    }, [])

    return songsState
}

export default useFetchSongs;