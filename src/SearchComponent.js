import React from 'react'
import { TextField, makeStyles, Button, Grid } from '@material-ui/core';


const usestyles = makeStyles(theme=> ({
root:{
    
    width:'40%',
    marginLeft:'auto',
    marginRight:'auto', 
    
      
    '& .MuiInputBase-input':{
        color:'#ffffff',
    },
    '& .MuiButtonBase-root':{
        color:'#ffffff',
    }
}
 }))

const SearchComponent = ({ error=false,search,handleTextChange,handleSubmit }) => {
    const classes = usestyles();
    

    return (
 
        <form className={classes.root} onSubmit={handleSubmit} >

            <Grid container  >
            <Grid item lg={2} sm >
                </Grid>
                <Grid item lg sm xs={12} style={{paddingLeft:'2em'}}  >
                    <TextField style={{width:'100%'}} 
                     label='City'
                     value={search}
                     onChange={handleTextChange}
                     {...(error && {error:error,helperText:'Please Enter a Valid City Name'})}
                     
                      />

                </Grid>
                
                <Grid item lg sm xs={12} style={{paddingTop:'1rem',paddingLeft:'2.5em'}} >
                <Button variant="outlined" type='submit' >Get Weather</Button>
                </Grid>
            </Grid>
            
            
            
        </form>
    )
}

export default SearchComponent
