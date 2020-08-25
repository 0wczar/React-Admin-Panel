import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {ListItemText} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    }},
  text: {
    color: 'black',
  },
  blockList: {
    display: 'block',
    marginLeft: '-60px'
  },
  inlineItemsList: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  styleIcons: {
    marginTop: '-5px',
  },
}));

const countries = [
  {
    value: 'United Kingdom',
  },
  {
    value: 'United States',
  },
  {
    value: 'Poland',
  }
];

function AddressUserInfo() {
    const classes = useStyles();
    const [country, setCountry] = React.useState('United Kingdom');
    const handleChangeCountry = event => setCountry(event.target.value);

    return(
        <Container 
            maxWidth='lg'>
            <Box width="54%" style={{marginLeft: "600px"}}>
            <Paper variant="outlined" style={{padding: "60px"}}>
                <div style={{marginTop: '400px'}}>
                    <Divider/>
                    <ListItemText style={{marginTop: '20px'}}>Address</ListItemText>
                    <ListSubheader style={{marginLeft: '-15px'}}>Use a permament address where you can receive confirmation</ListSubheader>
            </div>
            <div style={{marginTop: "30px"}}>
                <TextField
                id="outlined-multiline-flexible"
                label="Street Address"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '400px'}}
                />
            </div>
            <div style={{marginTop: "30px"}}>
                <TextField
                id="outlined-multiline-flexible"
                label="City"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '400px'}}
                />
            </div>
            <div style={{marginTop: "30px"}}>
                <TextField
                id="outlined-multiline-flexible"
                label="State"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '400px'}}
                />
            </div>
            <div className={classes.inlineItemsList}>
                <div style={{marginTop: "30px"}}>
                <TextField
                id="outlined-multiline-flexible"
                label="ZIP Code"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '130px'}}
                />
                </div>

                <div style={{marginTop: '30px'}}>
                <TextField
                    id="outlined-select-country"
                    select
                    label="Country"
                    value={country}
                    onChange={handleChangeCountry}
                    variant="outlined"
                    style={{width: '230px',  marginLeft: '-345px'}}
                    >
                    {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>
             </div>
            </div>

            <Button 
              variant="contained" 
              style={{
                background: '#2196F3', 
                color: "#fff", 
                marginTop: '50px'
              }}>Save
            </Button>

            </Paper>
            </Box>
        </Container>
    );              
}

export default AddressUserInfo;


