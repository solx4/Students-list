import { data } from "../utils/data"
export const Table =() =>{
    return(
        <table>
      <thead>
        <th>Full Name</th>
        <th>Age</th>
        <th>Email</th>
        <th>Class</th>
      </thead>
      <tbody>
        {data.map((item)=>{
          return(
            <tr>
              <td>{item.fullName}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.class}</td>
            </tr>
          )
        })}
      </tbody>

    </table>
    )
}
