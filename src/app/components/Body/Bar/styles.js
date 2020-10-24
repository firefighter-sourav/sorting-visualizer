import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    margin-right: ${(p) => 100/p.count }px;
    display: flex;
    justify-content: center;
    color: var(--text-light);
    padding: ${(p) => p.count <= 10 ? '10px':'0' } 0;
    background: ${(p) => p.barColor};
    height: ${(p) => `${p.height}px`};
    &:nth-child(last) {
        margin-right: 0;
    }
`