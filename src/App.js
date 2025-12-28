import Header from './components/Encabezado/index.js';
import Footer from './components/PiePagina/index.js';
import { Route, Routes } from 'react-router-dom';
import Principal from './components/Cuerpo/index.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Principal />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
