import fs from 'fs'

export default () => {
    const input = fs.readFileSync("./puzzles/1/input", 'utf-8')
    const numbers = input.split("\n")

    let count = 0,
        partTwoCount = 0
    for (let i=0; i < numbers.length-1; i++) {
        let first = parseInt(numbers[i]),
            second = parseInt(numbers[i+1]),
            third = parseInt(numbers[i+2])
            
        // --- Part One ---
        if (first < second) count ++

        // --- Part Two ---
        if (first + second + third < second + third + parseInt(numbers[i+3])) partTwoCount ++
    }
    return [count, partTwoCount]
}