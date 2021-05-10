import React from 'react'
import { TextField, makeStyles, Button, Grid } from '@material-ui/core';


const usestyles = makeStyles(theme=> ({
root:{
    
    width:'650px',
    padding: '0px 50px',
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

            <Grid container>
                <Grid item lg sm xs={12} >
                    <TextField style={{width:'400px'}} 
                     label='City'
                     value={search}
                     onChange={handleTextChange}
                     {...(error && {error:error,helperText:'Please Enter a Valid City Name'})}
                     
                      />

                </Grid>
                <Grid item lg sm xs={12} style={{paddingLeft:'100px', paddingTop:'1rem'}} >
                <Button variant="outlined" type='submit' >Get Weather</Button>
                </Grid>
            </Grid>
            
            
            
        </form>
    )
}

export default SearchComponent
