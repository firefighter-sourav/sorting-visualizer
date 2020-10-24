import React from 'react'
import { useSelector } from 'react-redux'
import useToolbar from '../../hooks/useToolbar'
import * as Styles from "./styles"
import { sortingOptions, lengthOptions, speedOptions } from "./options"
import useSort from '../../hooks/algorithms/useSort'

const Menu = () => {
    const {
        generateNewArray,
        onChangeArrayLength,
        onChangeAlgorithm,
        onChangeSpeed
    } = useToolbar();
    const arrayLength = useSelector((state) => state.toolbar.arrayLength)
    const sortingAlgo = useSelector((state) => state.toolbar.sortingAlgo)
    const sorting = useSelector((state) => state.bar.sorting)
    const speed = useSelector((state) => state.toolbar.speed)
    const { sort } = useSort()
    return(
        <Styles.Wrapper>
            <Styles.MenuItem onClick={()=>!sorting && generateNewArray()}>
                Generate New Array!
            </Styles.MenuItem>
            <Styles.MenuItem>
                <Styles.Select onChange={onChangeArrayLength} disabled={sorting}>
                    <Styles.Option selected disabled>Select array length</Styles.Option>
                    {
                        lengthOptions.map((option, index) => 
                            <Styles.Option key={option.value} value={option.value}>{option.label}</Styles.Option>
                        )
                    }
                </Styles.Select>
            </Styles.MenuItem>
            <Styles.MenuItem>
                <Styles.Select onChange={onChangeAlgorithm} disabled={sorting}>
                    <Styles.Option selected disabled>Select preferred algorithm</Styles.Option>
                    {
                        sortingOptions.map((option, index) => 
                            <Styles.Option key={option.value} value={option.value}>{option.label}</Styles.Option>
                        )
                    }
                </Styles.Select>
            </Styles.MenuItem>
            <Styles.MenuItem>
                <Styles.Select onChange={onChangeSpeed} disabled={sorting}>
                    <Styles.Option selected disabled>Select speed</Styles.Option>
                    {
                        speedOptions.map((option, index) => 
                            <Styles.Option key={option.value} value={option.value}>{option.label}</Styles.Option>
                        )
                    }
                </Styles.Select>
            </Styles.MenuItem>
            {
                arrayLength && sortingAlgo && speed && (
                    <Styles.MenuItem type="button" onClick={()=>!sorting && sort()}>
                        Sort!
                    </Styles.MenuItem>
                )
            }
        </Styles.Wrapper>
    )
}

export default Menu;