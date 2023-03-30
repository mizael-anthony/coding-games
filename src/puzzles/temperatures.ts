import { PuzzleProps } from "../types/exercises";

const cases : number[][] = [
    [1, -2, -8, 4, 5],
    [-12, -5, -137],
    [42, -5, 12, 21, 5, 24],
    [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5],
    [],
    
]

const solution : Function = (params : number[]) : number => {
    if(params.length != 0){

        return params[0]
    }

    return 0
}

export const Temperatures : PuzzleProps = {
    title : "Temperatures",
    description : "lorem ipsum",
    link : "https://www.codingame.com/",
    cases : cases,
    solution : solution

}