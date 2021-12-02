const puzzleToRun = 2

import(`./puzzles/${puzzleToRun}/index`).then(i => {
    const solution = i.default()
    console.log(solution)
})