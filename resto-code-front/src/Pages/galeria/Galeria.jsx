import React from 'react'
import './Galeria.css'
import { Container } from 'react-bootstrap'

const Galeria = () => {
    return (
        <>
            <Container >
                <div className='tituloGaleria'> 
                    <img className='logoA' src="../src/Image/imagenesGaleria/RestoCodeSFondo.png" alt="" />
                    <h1>GALERIA RESTO CODE</h1>
                    <img className='logoB' src="../src/Image/imagenesGaleria/RestoCodeSFondo.png" alt="" />
                </div>
                <div className='grid-galeria'>
                    <img className='foto1' src='../src/Image/imagenesGaleria/cervezas1.png' alt="" />
                    <img className='foto2' src="../src/Image/imagenesGaleria/barra-1.png" alt="" />
                    <img className='foto3' src="../src/Image/imagenesGaleria/CERVECERIA2.png" alt="" />
                    <img className='foto4' src="../src/Image/imagenesGaleria/ham-papas.png" alt="" />
                    <img className='foto5' src="../src/Image/imagenesGaleria/local-cer.png" alt="" />
                    <img className='foto6' src="../src/Image/imagenesGaleria/mila2.png" alt="" />
                    <img className='foto7' src="../src/Image/imagenesGaleria/local-cer3.png" alt="" />
                    <img className='foto8' src="../src/Image/imagenesGaleria/mila-plato1.png" alt="" />
                    <img className='foto9' src="../src/Image/imagenesGaleria/local-cer2.png" alt="" />
                    <img className='foto10' src="../src/Image/imagenesGaleria/ham-papas2.png" alt="" />
                </div>
            </Container>


        </>
    )
}

export default Galeria