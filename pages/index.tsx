import Header from '@/src/components/Header'
import Home from '@/src/components/Sections/Home'
import Techs from '@/src/components/Sections/Techs'
import Portfolio from '@/src/components/Sections/Portfolio'
import Call from '@/src/components/Sections/Call'

const Index = () => { 
    return (
        <>
            <Header />
            <Home />
            <Techs />
            <Portfolio />
            <Call />
        </>
    );
};

export default Index;
