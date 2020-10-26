import styled from "styled-components"
import * as breakPoints from "../../constants/breakPoints"

export const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    padding: 10px 0px;
    display: flex;
    background: var(--nav-bg);
    @media (max-width: ${breakPoints.mobileMd}){
        width: 85%;
        height: 30px;
        padding: 10px 5% 10px 10%;
    }
`
export const MenuItemWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 60%;
    @media (max-width: ${breakPoints.mobileMd}){
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 40px;
        padding: 10px 0;
        background: var(--nav-bg);
        justify-content: flex-start;
    }
`
export const MenuItem = styled.div`
    width: 30%;
    height: 100%;
    margin-right: 50px;
    color: "var(--text-light)";
    font-size: 16px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:nth-child(last) {
        margin-right: 0;
    }
    @media (max-width: ${breakPoints.desktopSm}){
        font-size: 14px;
    }
    @media (max-width: ${breakPoints.mobileLg}){
        width: 30.5%;
        margin: 0 0 0 2%;
        font-size: 10px;
        &:nth-child(4) {
            margin: 0 2% 0 2%;
        }
    }
`
export const ButtonsWrapper = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    @media (max-width: ${breakPoints.mobileLg}){
        width: 55%;
    }
    
`
export const ButtonItem = styled(MenuItem)`
    color: var(--text-light);
    &:nth-child(1){
        background: ${(p) => p.disabled ? "var(--disabled)" : "var(--generate-button)"};
    }
    &:nth-child(2){
        background: ${(p) => p.disabled ? "var(--disabled)" : "var(--sort-button)"};
    }
    @media (max-width: ${breakPoints.mobileLg}){
        width: 20vw;
    }
`
export const LogoMenu = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 40px;
    width: 7%;
    align-items: flex-end;
    @media (max-width: ${breakPoints.desktopSm}){
        width: 30%;
        align-items: flex-start;
    }
`
export const Logo = styled.img`
    width: 50px;
    height: auto;
`
export const Select = styled.select`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    cursor: pointer;
    padding: 0 10px;
    @media (max-width: ${breakPoints.mobileLg}){
        padding: 0 5px;
        font-size: 10px;
    }
`
export const Option = styled.option`
    font-size: 16px;
`