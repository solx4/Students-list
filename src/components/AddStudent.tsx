import { Button, Paper, TextField } from "@mui/material";
export const AddStudent = () => {
  return (
    <Paper sx={{ width:400, padding: 5, marginTop: 5 ,gap: 2, display: 'flex', flexDirection: 'column'}}>
      <TextField id="outlined-basic" label="Full Name" name="fullName" variant="outlined" />
      <TextField id="outlined-basic" label="Age" name="Age" variant="outlined" />
      <TextField id="outlined-basic" label="Email" name="email" variant="outlined" />
      <TextField id="outlined-basic" label="Class" name="class" variant="outlined" />
      <Button variant="contained" color="primary">Add Student</Button>

    </Paper>
  )
}
