import mas from '../../img/more-horizontal.svg';
import atras from '../../img/chevron-left.svg';
import siguiente from '../../img/chevron-right.svg';
import inicio from '../../img/home.svg';
import buscar from '../../img/search.svg';
import carpeta from '../../img/folder.svg'
import notificaciones from '../../img/bell.svg';
import usuarios from '../../img/users.svg';
import minimizar from '../../img/minimize-2.svg';
import maximizar from '../../img/maximize-2.svg';
import cerrar from '../../img/x.svg'


const Encabezado = () => {
    const handleClick = () => {
        const buscar = document.getElementById('buscar_cancion');
        buscar.focus();
    }

    return(
        <div>
            <article class="header">
                <section class="header-nav">
                    <div class="header-nav-i">
                        <div class="header-nav-i-acciones">
                             <i><img src={mas} alt="Más" /></i>
                             <i><img src={atras} alt="Atras" /></i>
                             <i><img src={siguiente} alt="Siguiete"/></i>
                        </div>
                    </div>
                    <div class="header-nav-c">
                        <div class="header-nav-c-acciones-inicio">
                            <i><img src={inicio} alt="Inicio"/></i>
                        </div>
                        <div class="header-nav-c-acciones-buscar">
                            <i><img src={buscar} onClick={handleClick} /></i>
                            <input
                                id="buscar_cancion"
                                type='search'
                                name='cancion'
                                placeholder='¿Que quieres reproducir?'
                            />    
                            <i><img src={carpeta}/></i>
                        </div>
                    </div>
                    <div class="header-nav-d">
                        <i><img src={notificaciones} alt="notificaciones"/></i>
                        <i><img src={usuarios} alt="usuario"/></i>
                        <i><img src={minimizar} alt="minimizar"/></i>
                        <i><img src={maximizar} alt="maximizar"/></i>
                        <i><img src={cerrar} alt="cerrar"/></i>
                    </div>
                </section>
            </article>
        </div>
    );
}

export default Encabezado;