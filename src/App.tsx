const data =[
  {fullName: "salem", age: 17, email: "salem@example.com", class: "10th Grade"},
  {fullName: "ali", age: 17, email: "ali@example.com", class: "10th Grade"},
  {fullName: "ahmed", age: 17, email: "ahmed@example.com", class: "10th Grade"}
]
function App() {

  return (
    <>
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
    </>
  )
}

export default App
