import React from 'react'
import Carousels from '../components/Carousels'
import Footer from '../components/Footer'
import NavBarHead from '../components/NavBarHead'
import '../globalCss/style.css'


export default function Home() {
    return (
        <>
            <NavBarHead />
            <Carousels />
            <Footer />
        </>
    )
}
