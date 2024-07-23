import React, { useState } from 'react'
import { Paper, Container, Typography, Button, TextField, Stack, Avatar, IconButton } from "@mui/material"
import { VisuallyHiddenInput } from '../components/styles/styled'
import { CameraAlt } from "@mui/icons-material"

const Login = () => {

  const [isLogin, setLogin] = useState(true)

  return (



    <Container component={"main"} maxWidth={"xs"}  sx={{ height:"100vh" , display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Paper elevation={3} sx={{ padding: 4 ,  display: "flex", flexDirection: "column", alignItems: "center"}}>
        {isLogin ?
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop:"1rem" }}>

              <TextField label="Username" variant='outlined' margin="normal" fullWidth required></TextField>
              <TextField label="Password" type="password" variant='outlined' margin="normal" fullWidth required></TextField>
              <Button variant='contained' type="submit" sx={{ backgroundColor: "green", color: "white", marginTop: "1rem" }} fullWidth >Sign In</Button>

              <Typography textAlign="center" variant='body1' sx={{ marginTop: "1rem" }} fullWidth>OR</Typography>
              <Button onClick={() => setLogin(false)} fullWidth sx={{ marginTop: "0.8rem" }} >Sign Up</Button>
            </form>
          </>
          :
          <>
            <Typography variant="h5" sx={{marginBottom:"10px"}} >Register</Typography>

            <Stack position={"relative"} width={"7rem"} margin={"auto"}>
              <Avatar sx={{ width: "7rem", height: "7rem", objectFit: "contain" }} />
              <IconButton component="label" sx={{position:"absolute", right:0, bottom:0, color:"white", backgroundColor:"rgba(0,0,0,0.5)", ":hover":{backgroundColor:"rgba(0,0,0,0.7)"}}}>
                <>
                  <CameraAlt />
                  <VisuallyHiddenInput type='file' />
                </>
              </IconButton>
            </Stack>



            <form style={{ height:"90%" }}>

              <TextField  InputProps={{ sx: { height: '40px', '& input': { padding: '0 14px' } } }} label="Name" variant='outlined' margin="normal" fullWidth required sx={{ marginBottom: "-1vh"}}></TextField>
              <TextField InputProps={{ sx: { height: '40px', '& input': { padding: '0 14px' } } }} label="Bio" variant='outlined' margin="normal" fullWidth required sx={{ marginBottom: "-1vh" }}></TextField>
              <TextField InputProps={{ sx: { height: '40px', '& input': { padding: '0 14px' } } }} label="Username" variant='outlined' margin="normal" fullWidth required sx={{ marginBottom: "-1vh" }}></TextField>
              <TextField InputProps={{ sx: { height: '40px', '& input': { padding: '0 14px' } } }} label="Password" type="password" variant='outlined' margin="normal" fullWidth required sx={{ marginBottom: "-1vh" }}></TextField>
              <Button variant='contained' type='submit' sx={{ backgroundColor: "green", color: "white", marginTop: "1rem" }} fullWidth margin="normal">Sign UP</Button>

              <Typography variant='body1' textAlign={"center"} sx={{ marginTop: "1rem"}} fullWidth>OR</Typography>
              <Button onClick={() => setLogin(true)} fullWidth margin="normal" sx={{ marginTop: "0.8rem" }} >Sign IN</Button>
            </form></>
        }
      </Paper>
    </Container>

  )
}

export default Login
// -------------------------------

