import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useToolbar from '../../hooks/useToolbar'
import * as Styles from "./styles"
import { sortingOptions, lengthOptions, speedOptions } from "./options"
import useSort from '../../hooks/algorithms/useSort'
import { updateArrayLength } from '../../store/actions/toolbarActions'

const Menu = () => {
    const dispatch = useDispatch()
    const {
        generateNewArray,
        onChangeArrayLength,
        onChangeAlgorithm,
        onChangeSpeed
    } = useToolbar()
    useEffect(() => {
        let arrayLength = lengthOptions[0].value
        dispatch(updateArrayLength(arrayLength))
        generateNewArray(arrayLength)
    }, [])
    const arrayLength = useSelector((state) => state.toolbar.arrayLength)
    const sortingAlgo = useSelector((state) => state.toolbar.sortingAlgo)
    const sorting = useSelector((state) => state.bar.sorting)
    const sorted = useSelector((state) => state.bar.sorted)
    const speed = useSelector((state) => state.toolbar.speed)
    const { sort } = useSort()
    return(
        <Styles.Wrapper>
            <Styles.LogoMenu>
                <Styles.Logo src={"codetuberLogo.png"}></Styles.Logo>
            </Styles.LogoMenu>
            <Styles.MenuItemWrapper>
                <Styles.MenuItem>
                    <Styles.Select onChange={onChangeArrayLength} defaultValue={lengthOptions[0].value} disabled={sorting}>
                        {
                            lengthOptions.map((option, index) => 
                                <Styles.Option key={option.value} value={option.value}>{option.label}</Styles.Option>
                            )
                        }
                    </Styles.Select>
                </Styles.MenuItem>
                <Styles.MenuItem>
                    <Styles.Select onChange={onChangeAlgorithm} defaultValue="" disabled={sorting}>
                        <Styles.Option value="" disabled>Algorithm</Styles.Option>
                        {
                            sortingOptions.map((option, index) => 
                                <Styles.Option key={option.value} value={option.value}>{option.label}</Styles.Option>
                            )
                        }
                    </Styles.Select>
                </Styles.MenuItem>
                <Styles.MenuItem>
                    <Styles.Select onChange={onChangeSpeed} defaultValue="" disabled={sorting}>
                        <Styles.Option value="" disabled>Speed</Styles.Option>
                        {
                            speedOptions.map((option, index) => 
                                <Styles.Option key={option.value} value={option.value}>{option.label}</Styles.Option>
                            )
                        }
                    </Styles.Select>
                </Styles.MenuItem>
            </Styles.MenuItemWrapper>
            <Styles.ButtonsWrapper>
                <Styles.ButtonItem disabled={sorting} onClick={()=>!sorting && generateNewArray()}>
                    Regenerate!
                </Styles.ButtonItem>
                {
                    (arrayLength && sortingAlgo && speed && !sorting && !sorted) ? (
                        <Styles.ButtonItem onClick={()=>!sorting && sort()}>
                            Sort!
                        </Styles.ButtonItem>
                    ) : null
                }
                {
                    sorting ? (
                        <Styles.ButtonItem onClick={()=>window.location.reload()}>
                            Reset!
                        </Styles.ButtonItem>
                    ) : null
                }
            </Styles.ButtonsWrapper>
                
        </Styles.Wrapper>
    )
}

export default Menu;