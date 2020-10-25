import styled from "styled-components"
import * as breakPoints from "../../constants/breakPoints"

export const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    padding: 10px 0px;
    display: flex;
    background: var(--nav-bg);
    @media (max-width: ${breakPoints.mobileMd}){
        width: 70%;
        height: 30px;
        padding: 10px 15%;
    }
`
export const MenuItemWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    @media (max-width: ${breakPoints.mobileMd}){
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 40px;
        padding: 10px 0;
        background: var(--nav-bg);
    }
`
export const MenuItem = styled.div`
    width: 15%;
    height: 100%;
    margin-right: 50px;
    color: ${(p) => p.type === "button" ? "var(--text-dark)":"var(--text-light)"};
    font-size: 16px;
    background: ${(p) => p.type === "button" ?
                    p.disabled ?
                        "var(--disabled)" : "var(--nav-button)"
                        : "transparent"};
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:nth-child(last) {
        margin-right: 0;
    }
    @media (max-width: ${breakPoints.mobileMd}){
        width: 18%;
        margin: 0 0 0 2%;
        font-size: 10px;
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
    @media (max-width: ${breakPoints.mobileMd}){
        padding: 0 5px;
        font-size: 10px;
    }
`
export const Option = styled.option`
    font-size: 16px;
`