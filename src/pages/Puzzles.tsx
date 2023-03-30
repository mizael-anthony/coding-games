import Puzzle from "../components/Puzzle";
import { PuzzleProps } from "../types/exercises";



export default function Puzzles({ puzzles }: { puzzles: PuzzleProps[] }) {
    return (
        <div className="row">
            {puzzles.map((puzzle : PuzzleProps, index : number) =>
                <div className="col s12 m6" key={index}>
                    <Puzzle puzzle={puzzle}/>
                </div>
            )}
        </div>
    )
}
