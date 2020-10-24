import styled from "styled-components"

export const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    padding: 10px 0px;
    display: flex;
    background: var(--nav-bg);
`
export const MenuItem = styled.div`
    width: 15%;
    height: 100%;
    margin-right: 50px;
    color: ${(p) => p.type === "button" ? "var(--text-dark)":"var(--text-light)"};
    font-size: 16px;
    background: ${(p) => p.type === "button" ? "var(--nav-button)":"transparent"};
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:nth-child(last) {
        margin-right: 0;
    }
`
export const Select = styled.select`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    cursor: pointer;
    padding: 0 10px;
`
export const Option = styled.option`
    font-size: 16px;
`