
import About from "@/src/components/about";
import Techs from "@/src/components/techs";
import Home from '@/src/components/home'



const Index = () => {


    return (
        <>
            <Home />
            <About />
            {/*Botar services antes de techs*/}
            <Techs />
        </>
    );
};

export default Index;
