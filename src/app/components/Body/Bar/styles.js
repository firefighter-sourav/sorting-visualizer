import styled from "styled-components"
import * as breakpoints from "../../../constants/breakPoints"

export const Wrapper = styled.div`
    width: 100%;
    margin-right: ${(p) => 100/p.count }px;
    display: flex;
    justify-content: center;
    color: var(--text-light);
    font-size: 14px;
    padding: ${(p) => p.count <= 10 ? '10px':'0' } 0;
    background: ${(p) => p.barColor};
    height: ${(p) => `${p.height}px`};
    &:nth-child(last) {
        margin-right: 0;
    }
    @media (max-width: ${breakpoints.mobileMd}){
        font-size: 10px;
    }
`