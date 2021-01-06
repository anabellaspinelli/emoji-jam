import {
    generateHorizontalRoadLine,
    generateHorizontalRoadBottom,
    generateHorizontalRowTop,
    generateJunctionBottom,
    generateJunctionTop,
    generateVerticalRoad,
    generateRandomGrid,
} from './grid-utils'

describe('generateVerticalRow', () => {
    it('should match even row snapshot', () => {
        expect(generateVerticalRoad(0).toString()).toMatchInlineSnapshot(
            '"░,░,║,░,╵,░,║,░,░,░,░,░,░,░,░,░"',
        )
    })

    it('should match odd row snapshot', () => {
        expect(generateVerticalRoad(1).toString()).toMatchInlineSnapshot(
            '"░,░,║,░,░,░,║,░,░,░,░,░,░,░,░,░"',
        )
    })
})

describe('generateJunctionTop', () => {
    it('should match even row snapshot', () => {
        expect(generateJunctionTop(0).toString()).toMatchInlineSnapshot(
            '"═,═,╝,░,╵,░,╚,═,═,═,═,═,═,═,═,═"',
        )
    })

    it('should match even row snapshot', () => {
        expect(generateJunctionTop(1).toString()).toMatchInlineSnapshot(
            '"═,═,╝,░,═,░,╚,═,═,═,═,═,═,═,═,═"',
        )
    })
})

describe('generateHorizontalRowTop', () => {
    it('should match snapshot', () => {
        expect(generateHorizontalRowTop().toString()).toMatchInlineSnapshot(
            '"▒,▒,▒,▓,▒,▓,▒,▒,▒,▒,▒,▒,▒,▒,▒,▒"',
        )
    })
})

describe('generateHorizontalRowLine', () => {
    it('should match snapshot', () => {
        expect(generateHorizontalRoadLine().toString()).toMatchInlineSnapshot(
            '"-, ,-, ,-, ,-, ,-, ,-, ,-, ,-, "',
        )
    })
})

describe('generateHorizontalRowBottom', () => {
    it('should match snapshot', () => {
        expect(generateHorizontalRoadBottom().toString()).toMatchInlineSnapshot(
            '"▒,▒,▒,▓,▒,▓,▒,▒,▒,▒,▒,▒,▒,▒,▒,▒"',
        )
    })
})

describe('generateJunctionBottom', () => {
    it('should match even row snapshot', () => {
        expect(generateJunctionBottom(0).toString()).toMatchInlineSnapshot(
            '"═,═,╗,░,╵,░,╔,═,═,═,═,═,═,═,═,═"',
        )
    })

    it('should match even row snapshot', () => {
        expect(generateJunctionBottom(1).toString()).toMatchInlineSnapshot(
            '"═,═,╗,░,═,░,╔,═,═,═,═,═,═,═,═,═"',
        )
    })
})

describe('generateRandomGrid', () => {
    it('should match snapshot', () => {
        expect(generateRandomGrid().join('\n')).toMatchInlineSnapshot(`
            "░,░,║,░,╵,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,░,░,║,░,░,░,░,░,░,░,░,░
            ═,═,╝,░,╵,░,╚,═,═,═,═,═,═,═,═,═
            ▒,▒,▒,▓,▒,▓,▒,▒,▒,▒,▒,▒,▒,▒,▒,▒
            -, ,-, ,-, ,-, ,-, ,-, ,-, ,-, 
            ▒,▒,▒,▓,▒,▓,▒,▒,▒,▒,▒,▒,▒,▒,▒,▒
            ═,═,╗,░,╵,░,╔,═,═,═,═,═,═,═,═,═
            ░,░,║,░,░,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,╵,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,░,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,╵,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,░,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,╵,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,░,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,╵,░,║,░,░,░,░,░,░,░,░,░
            ░,░,║,░,░,░,║,░,░,░,░,░,░,░,░,░"
        `)
    })
})
