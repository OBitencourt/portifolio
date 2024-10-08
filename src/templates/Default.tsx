import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
import { Container } from '@mui/material';

interface DefaultProps {
    children: React.ReactNode;
}

const Default = ({children}: DefaultProps) => {

    return (
        <>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', marginTop: 10}}>
                <Header />
            </div>
            <Container
                maxWidth='md'
            >
                {children}

            </Container>
            <Footer />
        </>
    )
}

export default Default
