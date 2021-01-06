import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
import { generateRandomGrid } from './grid-utils'

const Grid = styled.div`
    display: grid;
    grid-template-rows: repeat(16, 2rem);
    grid-template-columns: repeat(16, 2rem);
    font-size: 2rem;
    margin: 0 auto;
`

const Controls = styled.section`
    height: 100px;
    width: 50%;
    background-color: pink;
    padding: 20px;
    margin: 40px 0 0 40px;
    border-radius: 10px;
`

function App() {
    const [grid, setGrid] = useState(generateRandomGrid())

    return (
        <>
            <Grid className='App'>
                {grid.map((row, rowIndex) =>
                    row.map((cell, cellIndex) => (
                        <div key={`${rowIndex}-${cellIndex}-${cell}`}>
                            {cell}
                        </div>
                    )),
                )}
            </Grid>
            <Controls>
                <button
                    type='button'
                    onClick={() => setGrid(generateRandomGrid())}
                >
                    Regenerate!
                </button>
            </Controls>
        </>
    )
}

export default App
