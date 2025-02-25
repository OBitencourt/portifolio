import Image from 'next/image'
import { HeaderButtons, StyledHeader, StyledNav } from './style'
const Header = () => {

    return(

        <>
            
            <StyledHeader>
                <Image 
                    alt='logo'
                    src='/images/logo-arthur.png'
                    width={70}
                    height={90}
                    style={{width: '80px', height: 'auto'}}
                />

                <StyledNav>
                    <HeaderButtons>
                        Home
                    </HeaderButtons>
                    <HeaderButtons>
                        Techs
                    </HeaderButtons>
                    <HeaderButtons>
                        Portfólio
                    </HeaderButtons>
                    <Image 
                        src='/images/chat.svg'
                        alt='chat'
                        width={50}
                        height={50}
                    />
                </StyledNav>

            </StyledHeader>
        </>
    )
}

export default Header