import {
    BUILDINGS,
    FRONT_VEHICLES,
    PLANTS,
    SIDE_VEHICLES,
} from './emoji-groups'
import { getRandomEmojiFromGroup, maybeGetEmojiFromGroup } from './emoji-utils'

const SIZE = 16

export const generateVerticalRoad = rowIndex => {
    const row = []
    for (let col = 0; col < SIZE; col++) {
        switch (col) {
            case 1:
            case 7:
                row[col] = maybeGetEmojiFromGroup([...BUILDINGS, ...PLANTS])
                break
            case 2:
            case 6:
                // road limits
                row[col] = '║'
                break

            case 3:
            case 5:
                // road lanes
                row[col] = getRandomEmojiFromGroup(FRONT_VEHICLES)
                break

            case 4:
                // middle road lines
                if (rowIndex % 2 === 0) {
                    row[col] = '╵'
                    break
                }

                row[col] = ' '
                break

            default:
                if (rowIndex === 1 || rowIndex === 7) {
                    row[col] = maybeGetEmojiFromGroup([...BUILDINGS, ...PLANTS])
                    break
                }
                row[col] = ' '
                break
        }
    }

    return row
}

export const generateJunctionTop = rowIndex => {
    const row = []
    for (let col = 0; col < SIZE; col++) {
        switch (col) {
            case 2:
                row[col] = '╝'
                break

            case 3:
                row[col] = '🚥'
                break

            case 4:
                if (rowIndex % 2 === 0) {
                    row[col] = '╵'
                    break
                }

                row[col] = ' '
                break

            case 5:
                row[col] = getRandomEmojiFromGroup(FRONT_VEHICLES)
                break

            case 6:
                row[col] = '╚'
                break

            default:
                row[col] = '═'
                break
        }
    }

    return row
}

export const generateHorizontalRowTop = () => {
    const row = []

    for (let col = 0; col < SIZE; col++) {
        if (col === 3 || col === 5) {
            row[col] = getRandomEmojiFromGroup(FRONT_VEHICLES)
            continue
        }

        if (col === 6) {
            row[col] = '🚦'
            continue
        }

        row[col] = getRandomEmojiFromGroup(SIDE_VEHICLES)
    }

    return row
}

export const generateHorizontalRoadLine = () => {
    const row = []

    for (let col = 0; col < SIZE; col++) {
        if (col % 2 === 0) {
            row[col] = '-'
            continue
        }

        row[col] = ' '
    }

    return row
}

export const generateHorizontalRoadBottom = () => {
    const row = []

    for (let col = 0; col < SIZE; col++) {
        if (col === 3 || col === 5) {
            row[col] = getRandomEmojiFromGroup(FRONT_VEHICLES)
            continue
        }

        if (col === 2) {
            row[col] = '🚦'
            continue
        }

        row[col] = getRandomEmojiFromGroup(SIDE_VEHICLES)
    }

    return row
}

export const generateJunctionBottom = rowIndex => {
    const row = []

    for (let col = 0; col < SIZE; col++) {
        switch (col) {
            case 2:
                row[col] = '╗'
                break

            case 3:
                row[col] = getRandomEmojiFromGroup(FRONT_VEHICLES)
                break

            case 4:
                if (rowIndex % 2 === 0) {
                    row[col] = '╵'
                    break
                }

                row[col] = ' '
                break

            case 5:
                row[col] = '🚥'
                break

            case 6:
                row[col] = '╔'
                break

            default:
                row[col] = '═'
                break
        }
    }

    return row
}

export const generateRandomGrid = () => {
    const grid = []

    for (let row = 0; row < SIZE; row++) {
        switch (row) {
            case 0:
            case 1:
                grid[row] = generateVerticalRoad(row)
                break

            case 2:
                grid[row] = generateJunctionTop(row)
                break

            case 3:
                grid[row] = generateHorizontalRowTop()
                break

            case 4:
                grid[row] = generateHorizontalRoadLine()
                break

            case 5:
                grid[row] = generateHorizontalRoadBottom()
                break

            case 6:
                grid[row] = generateJunctionBottom(row)
                break

            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                grid[row] = generateVerticalRoad(row)
                break

            default:
                break
        }
    }

    return grid
}
