
import styled from 'styled-components'

const StyledFooter = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #12081e;
    position: absolute;
    bottom: 0;
    color: #c4c2c2;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Footer = () => {
    return (
        <>
            <StyledFooter>
                © Developed by Arthur Bitencourt
            </StyledFooter>
        </>
    )
}


export default Footer