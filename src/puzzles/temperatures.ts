import { PuzzleProps } from "../types/exercises";

const cases: number[][] = [
    [1, -2, -8, 4, 5],
    [-12, -5, -137],
    [42, -5, 12, 21, 5, 24],
    [-5, -4, -2, 12, -40, 4, 2, 18, 11, 5],
    [42, 5, 12, 21, -5, 24],
    [],

]

const solution: Function = (temperatures: number[]): number => {

    if (temperatures.length != 0) {

        let closest: number = temperatures[0]

        for (let i = 0; i < temperatures.length; i++) {
            const temperature: number = temperatures[i]
            const absTemperature: number = Math.abs(temperature)
            const absClosest: number = Math.abs(closest)

            if (absTemperature < absClosest) {
                closest = temperature
            }

            else if (absTemperature === absClosest) {
                closest = (closest > 0) ? closest : temperature
            }



        }


        return closest
    }

    return 0
}

export const Temperatures: PuzzleProps = {
    title: "Temperatures",
    description: "lorem ipsum",
    link: "https://www.codingame.com/",
    cases: cases,
    solution: solution

}