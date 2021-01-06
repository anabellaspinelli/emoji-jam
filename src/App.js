import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { generateRandomGrid } from './grid-utils'

const Title = styled.h1`
    font-weight: 900;
    text-align: center;
    font-size: 3rem;
    color: deepskyblue;
    -webkit-text-stroke-width: 2px;
    -webkit-text-fill-color: deepskyblue;
    -webkit-text-stroke-color: deepskyblue;
`

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(16, 2rem);
    grid-template-columns: repeat(16, 2rem);
    font-size: 25px;
    margin: 0 auto;
    align-rows: center;
    width: 32rem;
    border-radius: 15px;
    border: 10px solid gold;
`

const Controls = styled.section`
    height: 100px;
    width: 32rem;
    background-color: hotpink;
    padding: 10px;
    margin: 10px auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const RegenerateButton = styled.button`
    font-size: 25px;
    font-weight: 900;
    padding: 10px;
    border-radius: 10px;
    color: hotpink;
`

function App() {
    const [grid, setGrid] = useState(generateRandomGrid())

    return (
        <div>
            <Title>Emoji Traffic Jam! 😱</Title>
            <Grid className='App'>
                {grid.map((row, rowIndex) =>
                    row.map((cell, cellIndex) => (
                        <div
                            className='cell'
                            key={`${rowIndex}-${cellIndex}-${cell}`}
                        >
                            {cell}
                        </div>
                    )),
                )}
            </Grid>
            <Controls>
                <RegenerateButton
                    type='button'
                    onClick={() => setGrid(generateRandomGrid())}
                >
                    Regenerate!
                </RegenerateButton>
            </Controls>
        </div>
    )
}

export default App
