import { PuzzleProps } from "../types/exercises";

const cases : number[][] = [
    [3, 5, 8, 9],
    [10, 5, 15, 17, 3, 8, 11, 28, 6, 55, 7],
    [555, 444, 222, 3333, 888, 999, 123, 567, 898, 727, 369],
    
]

const solution : Function = (strengths : number[]) : number => {
    
    const sortedStrengths : number[] = strengths.sort((a:number, b:number) => a - b)

    let differenceStrengths : number[] = []

    for(let i = 0; i < sortedStrengths.length - 1; i++){
        const difference = sortedStrengths[i + 1] - sortedStrengths[i] 
        differenceStrengths.push(difference)

    }

    return Math.min(...differenceStrengths)
}

export const Horses : PuzzleProps = {
    title : "Horses",
    description : "lorem ipsum",
    link : "https://www.codingame.com/",
    cases : cases,
    solution : solution

}