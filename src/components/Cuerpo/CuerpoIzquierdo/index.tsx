import plus from '../../../img/plus.svg';
import maximizar from '../../../img/maximize-2.svg';
import buscar from '../../../img/search.svg';
import lista from '../../../img/list.svg';

const CuerpoIzquierdo = () => {
    return (
        <>
            <div className="principal-i-tu-biblioteca">
                <div className="principal-i-tu-biblioteca-titulo">
                    <span>Tu biblioteca</span>
                </div>
                <div className="principal-i-tu-biblioteca-acciones">
                    <div className="principal-i-tu-biblioteca-acciones-crear">
                        <i><img src={plus} alt="Mas" /></i>
                        <span>Crear</span>
                    </div>
                    <div className="principal-i-tu-biblioteca-acciones-maximizar">
                        <i><img src={maximizar} alt="maximizar" /></i>
                    </div>
                </div>
            </div>
            <div className="principal-i-botones">
                <div className="principal-i-botones-playlist">
                    <span>Playlists</span>
                </div>
                <div className="principal-i-botones-podcast">
                    <span>Podcasts</span>
                </div>
                <div className="principal-i-botones-albunes">
                    <span>Álbumes</span>
                </div>
                <div className="principal-i-botones-artistas">
                    <span>Artistas</span>
                </div>
            </div>
            <div className="pricipal-i-buscar">
                <i><img src={buscar} alt="Buscar" /></i>
                <div className="principal-i-buscar-reciente">
                    <span>Recientes</span>
                    <i><img src={lista} alt="Lista" /></i>
                </div>
            </div>
            <div>
                <table className="table table-dark">

                </table>
            </div>
        </>
    )
}

export default CuerpoIzquierdo;