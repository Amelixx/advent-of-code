import fs from 'fs'

export default () => {
    const input = fs.readFileSync("./puzzles/3/input", 'utf-8')
    const binaryNumbers = input.split("\n")

    let gammaRate = "",
        epsilonRate = ""

    for (let i=0; i < 12; i++) {
        const bits = binaryNumbers.map(b => b[i]),
        mostFrequent = mostFrequentNumber(bits)
        gammaRate += mostFrequent
        epsilonRate += mostFrequent === "0" ? "1": "0"
    }

    return [parseInt(gammaRate, 2) * parseInt(epsilonRate, 2)]
}

function mostFrequentNumber(arr: string[]) {
    const hashmap = arr.reduce( (acc: {[k:string]: number}, val) => {
        acc[val] = (acc[val] || 0 ) + 1
        return acc
    }, {})
    return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b)
}