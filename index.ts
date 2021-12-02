const puzzleToRun = 1

import(`./puzzles/${puzzleToRun}/index`).then(i => {
    let solution = i.default()
    console.log(solution)
})