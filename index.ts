const puzzleToRun = 1

import(`./puzzles/${puzzleToRun}/index`).then(i => {
    const solution = i.default()
    console.log(`Part 1: ${solution[0]}\nPart 2: ${solution[1]}`)
})