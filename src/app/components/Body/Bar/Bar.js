import React from 'react'
import { isMobile } from "react-device-detect"
import PropTypes from "prop-types"
import { useSelector } from 'react-redux'
import { UNSORTED } from "../../../constants/barTypes"
import * as Styles from "./styles"
import getBarColor from '../../../helpers/getBarColor'

const Bar = ({type, value}) => {
    const arrayLength = useSelector((state) => state.toolbar.arrayLength)
    const height = isMobile ? value*4 : value*5;
    const barColor = getBarColor(type);
    return (
        <Styles.Wrapper
            count={arrayLength}
            barColor={barColor}
            height={height}
        >
            {arrayLength < 20 && value}
        </Styles.Wrapper>
    )
}

Bar.propTypes = {
    type: PropTypes.string,
    value: PropTypes.number
}

Bar.defaultProps = {
    type: UNSORTED,
    value: 0
}

export default Bar;