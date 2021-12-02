import fs from 'fs'

let horizontalPos = 0
let depth = 0

export default () => {
    const input = fs.readFileSync("./puzzles/2/input", 'utf-8')
    const orders = input.split("\r").map(order => order.split(" "))

    for (let [order, amount] of orders) {
        eval(order + "(" + amount + ")")
    }
    return horizontalPos * depth
}

function forward (amount: number) {
    horizontalPos += amount
}

function up (amount: number) {
    depth -= amount
}

function down (amount: number) {
    depth += amount
}