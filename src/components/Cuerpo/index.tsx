import useFetchSongs from '../Hooks/useFetchSongs.ts';
import TuBiblioteca from '../../components/Cuerpo/CuerpoIzquierdo/index.tsx';
import Principal from '../../components/Cuerpo/CuerpoCentro/index.tsx';
import Detalles from '../Cuerpo/CuerpoDerecho/index.tsx';

const Cuerpo = () => {
    return (
        <>
        <div className='principal'>
                <div className='principal-i'><TuBiblioteca/></div>                
                <div className='principal-c'><Principal/></div>
                <div className='principal-d'><h4><Detalles/></h4>
                </div>
            </div>
        </>
    )
}

export default Cuerpo;