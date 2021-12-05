import fs from 'fs'

let horizontalPos = 0,
    depth = 0,
    aim = 0,
    part2 = false

export default () => {
    const input = fs.readFileSync("./puzzles/2/input", 'utf-8')
    const commands = input.split("\r")

    move(commands)
    let part1Result = horizontalPos * depth
    part2 = true
    horizontalPos = 0
    depth = 0
    move(commands)
    
    return [part1Result, horizontalPos * depth]
}

function move(commands: string[]) {
    for (let command of commands) {
        const [order, amount] = command.split(" ")
        eval(order + "(" + amount + ")")
    }
}

function forward (amount: number) {
    horizontalPos += amount
    if (part2) depth += aim * amount
}

function up (amount: number) {
    if (part2) aim -= amount
    else depth -= amount
}

function down (amount: number) {
    if (part2) aim += amount
    else depth += amount
}