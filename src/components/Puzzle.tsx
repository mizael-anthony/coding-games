import { memo } from "react";
import type{ PuzzleProps, CaseType } from "../types/exercises";




const Puzzle =  memo(function Puzzle({ puzzle }: { puzzle: PuzzleProps }) {

  return (
    <div>
      <h1>{puzzle.title}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis
        <br />  aperiam delectus inventore ratione? Nihil animi impedit deleniti
        <br /> architecto eaque iure explicabo eligendi tenetur,
        <br /> reiciendis, placeat dignissimos, suscipit molestias facilis.</p>
      <a href={puzzle.link} target="_blank">{puzzle.link}</a>

      <table className="responsive-table centered">
        <thead>
          <tr>
            <th>Case</th>
            <th>Input</th>
            <th>Output</th>
          </tr>
        </thead>

        <tbody>
          {puzzle.cases.map((c : CaseType, i : number) => 
            <tr key={i}>
              <td>
                {i + 1}
              </td>
              <td>
                {c.toString()}
              </td>
              <td>
                {puzzle.solution(c)}
              </td>
            </tr>
          )}
        </tbody>
      </table>


    </div>
  )
})


export default Puzzle