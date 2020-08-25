import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from '@material-ui/core/TextField';
import {ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import CollapseSidebarUserItems from 'components/atoms/CollapseSidebarUserItems.js';

const useStyles = makeStyles((theme) => ({
  proVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', 
    color: '#0B79D0',
    borderRadius: '55px',
    fontSize: '12px',
  }
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

function MultilineTextFields() {
  const classes = useStyles();

  const [valueFirstName, setValueFirstName] = React.useState('John');
  const [valueLastName, setValueLastName] = React.useState('Doe');
  const [valueEmail, setValueEmail] = React.useState('john.doe@gmail.com');
  const [valueMobile, setValueMobile] = React.useState('(229) 555-0109');
  const [country, setCountry] = React.useState('United Kingdom');

  const handleChangeInputFirstName = event => setValueFirstName(event.target.value);
  const handleChangeInputLastName = event => setValueLastName(event.target.value);
  const handleChangeInputEmail = event => setValueEmail(event.target.value);
  const handleChangeInputMobile = event => setValueMobile(event.target.value);
  const handleChangeCountry = event => setCountry(event.target.value);


  return (
    <Container>
      <form>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', color: 'black', marginBottom: '-25px'}}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <List>
            <ListItemText primary="John Doe" style={{marginLeft: '15px', marginBottom: '-20px'}}>
            </ListItemText>
            <Button className={classes.proVersionMember} style={{marginLeft: '112px', padding: '1px',marginTop: '-5px'}}>PRO</Button>
            <Breadcrumbs aria-label="breadcrumb" style={{marginLeft: "200px", marginTop: "-24px"}}>
                <Link color="inherit" href="/profile">
                  <Typography color="textPrimary"> / Edit profile</Typography>
                </Link>
            </Breadcrumbs>
            <ListSubheader style={{marginTop: '-8px'}}>Set up your VoipChurch presence</ListSubheader>
          </List>
        </div>

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px', color: 'black'}}>
      <Box width="50%" style={{marginLeft: '600px'}}>
      <Paper variant="outlined" style={{padding: "60px"}}>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          value={valueFirstName}
          rowsMax={14}
          onChange={handleChangeInputFirstName}
          variant="outlined"
          style={{width: '400px'}}
        />
      </div>
      <div style={{marginTop: "30px"}}>
        <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          multiline
          value={valueLastName}
          rowsMax={4}
          onChange={handleChangeInputLastName}
          variant="outlined"
          style={{width: '400px'}}
        />
      </div>
      <div style={{marginTop: "30px"}}>
        <TextField
          id="outlined-multiline-flexible"
          label="Email"
          value={valueEmail}
          multiline
          onChange={handleChangeInputEmail}
          rowsMax={4}
          variant="outlined"
          style={{width: '400px'}}
        />
      </div>
      <div style={{marginTop: "30px"}}>
        <TextField
          id="outlined-multiline-flexible"
          label="Mobile phone"
          value={valueMobile}
          multiline
          rowsMax={4}
          onChange={handleChangeInputMobile}
          variant="outlined"
          style={{width: '400px'}}
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
          >
            {countries.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
        </TextField>
      </div>
      <div style={{marginTop: "30px"}}>
      <Button 
        variant="contained"
        color="primary"
      >
        Save profile
      </Button>
      </div>
      </Paper>
      </Box>
      </div>
    </form>
    <div style={{marginLeft: '400px', marginTop: '-600px', width: '200px'}}>
          <CollapseSidebarUserItems/>
    </div>
    </Container>
  );
}

export default MultilineTextFields;