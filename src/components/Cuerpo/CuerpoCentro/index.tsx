import portada from '../../../img/portada.jpg';
import useFetchSongs from '../../Hooks/useFetchSongs.ts';
import play from '../../../img/play-circle.svg';
import aleatorio from '../../../img/shuffle.svg';
import agregar from '../../../img/plus-circle.svg';
import descargar from '../../../img/arrow-down-circle.svg';
import mas from '../../../img/more-horizontal.svg';

const CuerpoCentro = () => {
    const { songs, isLoading, error } = useFetchSongs();

    const renderSongs = () => (
        <div className='principal-c'>
            <div className='container'>
                <div className='col'>
                    <div className='row'>
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>Titulo:</th>
                                    <th>Artista:</th>
                                    <th>Año de publicación:</th>
                                    <th>Acción:</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                {
                                    songs.map((song) => {
                                        const { strAlbum, strArtist, intYearReleased } = song;
                                        return(
                                            <tr>
                                                <td>{strAlbum}</td>
                                                <td>{strArtist}</td>
                                                <td>{intYearReleased}</td>
                                                <td>
                                                    <button type="button" className="btn btn-outline-success btn-sm">Escuchar canción</button>
                                                    <button type="button" className="btn btn-outline-primary btn-sm ms-2">Agregar a bliblioteca</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )

    const renderContent = () => {
        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error al cargar las canciones</p>;
        return renderSongs();
    }

    return (
        <div className="principal-c-portada">
            <img src={portada} alt="Portada" />
            <div className="principal-c-acciones">
                <i><img src={play} alt="Play" /></i>
                <i><img src={aleatorio} alt="Aleatorio" /></i>
                <i><img src={agregar} alt="Agregar" /></i>
                <i><img src={descargar} alt="Descargar" /></i>
                <i><img src={mas} alt="Más" /></i>
            </div>
            {renderContent()}
        </div>

    )
}

export default CuerpoCentro;