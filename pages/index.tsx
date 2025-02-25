import Header from '@/src/components/Header'
import Home from '@/src/components/Sections/Home'
import Techs from '@/src/components/Sections/Techs'
import Portfolio from '@/src/components/Sections/Portfolio'
import Call from '@/src/components/Sections/Call'
import Testing from '@/src/components/Sections/Testing'
import { Typography } from '@mui/material'

const Index = () => { 
    return (
        <>
            <Header />
            <Home />
            <Techs />
            <Portfolio />
            <Call />
            <Testing />
            <Typography
                align='center'
                sx={{
                    fontFamily: "Inter",
                    margin: "20px 0px"
                }}
                fontStyle="italic"
                fontSize="1.4rem"
            >
                Developed by Arthur Bitencourt Vieira Silva.
            </Typography>
        </>
    );
};

export default Index;
