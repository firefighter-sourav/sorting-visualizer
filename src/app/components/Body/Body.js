import React from "react"
import { useSelector } from "react-redux"
import Bar from "./Bar/Bar"
import * as Styles from "./styles"

const Body = () => {
    const bars = useSelector((state)=> state.bar.bars)
    return(
        <Styles.Wrapper>
            <Styles.BarContainer>
            {
                bars.map((bar,index) =>
                    <Bar key={index} {...bar} />
                )
            }
            </Styles.BarContainer>
        </Styles.Wrapper>
    )
}

export default Body;