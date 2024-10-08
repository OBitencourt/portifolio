import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default
