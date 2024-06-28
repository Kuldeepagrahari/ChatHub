import React, { useState } from 'react'
import {Paper, Container, Typography, Button, TextField} from "@mui/material"

const styler = {
  display:"flex",alignItems:"center", justifyContent:"center", marginTop:"20vh"
}
const Login = () => {

  const [isLogin, setLogin] = useState(true)

  return (

  
    
      <Container component={"main"}   maxWidth="xs" fullwidth sx={{display:"flex",alignItems:"center", justifyContent:"center" , height:"100vh"}}>
        <Paper elevation={3} sx={{padding:4,width:"25vw",display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
         {isLogin ? <><Typography sx={{}} variant="h4">Login</Typography>
                 <form style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center",width:"100%"}}>
                 
                 <TextField label="Username" variant='outlined' margin="normal" fullWidth required></TextField>
                 <TextField label="Password" type="password" variant='outlined' margin="normal" fullWidth required></TextField>
                 <Button variant='contained' type = "submit" sx={{backgroundColor:"green",color:"white",marginTop:"1rem"}} fullWidth >Sign In</Button>
         
                 <Typography textAlign="center" variant='body1' sx={{marginTop:"1rem"}} fullWidth>OR</Typography>
                 <Button onClick={()=>setLogin(false)} fullWidth  sx={{marginTop:"0.8rem"}} >Sign Up</Button>
                 </form></>
          :
            <> <Typography variant="h4" sx={{marginBottom:"-3vh", marginTop:"-3vh"}}>Register</Typography>
              <form style={{width:"100%",marginTop:"1rem"}}>
             
              <TextField label="Name" variant='outlined' margin="normal" fullWidth required sx={{marginBottom:"-1vh"}}></TextField>
              <TextField label="Bio" variant='outlined' margin="normal" fullWidth required sx={{marginBottom:"-1vh"}}></TextField>
              <TextField label="Username" variant='outlined' margin="normal" fullWidth required sx={{marginBottom:"-1vh"}}></TextField>
              <TextField label="Password" type="password" variant='outlined' margin="normal" fullWidth required sx={{marginBottom:"-1vh"}}></TextField>
              <Button variant='contained' type='submit' sx={{backgroundColor:"green",color:"white",marginTop:"1rem"}} fullWidth margin="normal">Sign In</Button>
      
              <Typography variant='body1888888' sx={{marginTop:"1rem", textAlign:"center"}} fullWidth>OR</Typography>
              <Button onClick={()=>setLogin(true)}fullWidth margin="normal" sx={{marginTop:"0.8rem"}} >Sign In</Button>
              </form></>
           }
        </Paper>
      </Container>
    
  )
}

export default Login
