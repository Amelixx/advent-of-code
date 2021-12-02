import fs from 'fs'

export default () => {
    const input = fs.readFileSync("./puzzles/1/input", 'utf-8')
    const numbers = input.split("\n")

    let count = 0
    for (let i=0; i < numbers.length-1; i++) {
        if (parseInt(numbers[i]) < parseInt(numbers[i+1])) count ++
    }
    return count
}