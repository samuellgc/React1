import {Button, TextField, Divider} from "@mui/material";

export default function Dashboard() {
    return (
      <div className="dashboard">
        <form>
          <h1>Dashboard</h1>
  
          <Divider/>
  
          <TextField fullWidth label="Email"/>
  
          <TextField type="password" fullWidth label="Senha"/>
  
          <Button fullWidth color="primary" size="large" variant="contained">
            Enviar
          </Button>
        </form>
      </div>
    )
  }