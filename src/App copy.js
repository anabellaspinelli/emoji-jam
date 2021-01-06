import React from 'react'
import './App.css'
import { ANIMALS, FRONT_VEHICLES, SIDE_VEHICLES } from './emoji-groups'

function App() {
    const generateStreet = () => {
        const rows = []

        for (let i = 0; i < 13; i++) {
            let row

            switch (i) {
                case 0:
                case 1:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                    // vertical street rows
                    row = []

                    for (let j = 0; j < 24; j++) {
                        if (j === 2 || j === 6) {
                            row[j] = '║'
                            continue
                        }

                        if (j === 4) {
                            row[j] = i % 2 === 0 ? '╵' : ' '
                            continue
                        }

                        if (j === 3 || j === 5) {
                            row[j] = FRONT_VEHICLES[j]
                                ? FRONT_VEHICLES[j]
                                : FRONT_VEHICLES[Math.floor(j / 2)]
                            continue
                        }

                        row[j] = ' '
                    }

                    rows[i] = row.join('')
                    break

                case 2:
                    row = []

                    for (let j = 0; j < 24; j++) {
                        if (j === 2) {
                            row[j] = '╝'
                            continue
                        }

                        if (j === 4) {
                            row[j] = '╵'
                            continue
                        }

                        if (j === 6) {
                            row[j] = '╚'
                            continue
                        }

                        if (j === 3 || j === 5) {
                            row[j] = FRONT_VEHICLES[j]
                                ? FRONT_VEHICLES[j]
                                : FRONT_VEHICLES[Math.floor(j / 2)]
                            continue
                        }

                        row[j] = '═'
                    }

                    rows[i] = row.join('')
                    break
                case 6:
                    row = []

                    for (let j = 0; j < 24; j++) {
                        if (j === 2) {
                            row[j] = '╗'
                            continue
                        }

                        if (j === 4) {
                            row[j] = '╵'
                            continue
                        }

                        if (j === 6) {
                            row[j] = '╔'
                            continue
                        }

                        if (j === 3 || j === 5) {
                            row[j] = FRONT_VEHICLES[j]
                                ? FRONT_VEHICLES[j]
                                : FRONT_VEHICLES[Math.floor(j / 2)]
                            continue
                        }

                        row[j] = '═'
                    }

                    rows[i] = row.join('')
                    break

                case 4:
                    row = []

                    for (let j = 0; j < 24; j++) {
                        if (j % 2 === 0) {
                            row[j] = '-'
                            continue
                        }

                        row[j] = '  '
                    }

                    rows[i] = row.join('')
                    break

                case 3: /* horizontal street rows*/
                case 5:
                    row = []

                    for (let j = 0; j < 24; j++) {
                        row[j] = SIDE_VEHICLES[j]
                            ? SIDE_VEHICLES[j]
                            : SIDE_VEHICLES[j / 2]
                    }

                    rows[i] = row.join('')
                    break

                default:
                    break
            }
        }

        return rows.join('\n')
    }

    const street = generateStreet()

    return street ? (
        <div className='App'>
            <pre style={{ fontSize: '3rem' }}>{`${ANIMALS.join('')}`}</pre>
            <pre style={{ fontSize: '2rem' }}>{`${street}`}</pre>
        </div>
    ) : null
}

export default App
