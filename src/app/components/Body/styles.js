import styled from "styled-components"
import * as breakpoints from "../../constants/breakPoints"

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export const BarContainer = styled.div`
    width: 1200px;
    display: flex;
    @media (max-width: ${breakpoints.desktopSm}) {
        width: 1000px;
    }
    @media (max-width: ${breakpoints.tabletMd}) {
        width: 700px;
    }
    @media (max-width: ${breakpoints.mobileLg}) {
        width: 600px;
    }
    @media (max-width: ${breakpoints.mobileMd}) {
        width: 90vw;
    }
    @media (max-width: ${breakpoints.mobileSm}) {
        width: 95vw;
    }
`