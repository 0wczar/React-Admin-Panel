import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {ListItemText} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';

import CollapseSidebarUserItems from 'components/atoms/CollapseSidebarUserItems.js';


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
  proVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', 
    color: '#0B79D0',
    borderRadius: '55px',
    fontSize: '12px',
  }
}));

function CreditCard() {
  const classes = useStyles();

  const [accountHolder, setAccountHolder] = React.useState('John Doe');
  const [credit, setCredit] = React.useState('3445 6464 7885 3321');
  const [month, setMonth] = React.useState('Month');
  const handleAccountHolder = event => setAccountHolder(event.target.value);
  const handleChangeCredit = event => setCredit(event.target.value);
  const handleChangeMonth = event => setMonth(event.target.value);

  const allState= {
    accountHolder: accountHolder,
  }

  return (
    <Container 
      maxWidth='lg'>
      <form>
      <Box 
        width="54%" 
        style={{
          marginLeft: "600px"}}
      >
      <Paper variant="outlined" style={{padding: "60px"}}>
          <ListItemText style={{position: 'static'}}>Credit Card</ListItemText>
          <ListSubheader style={{marginLeft: '-15px', width: '80%', position: 'static'}}>Choose how you want to pay, you have a choice of Credit / Debit Card or Bank account</ListSubheader>
          <div style={{marginTop: "30px"}}>
            <TextField
              id="outlined-multiline-flexible"
              label="Account Holder"
              multiline
              value={allState.accountHolder}
              rowsMax={4}
              onChange={handleAccountHolder}
              variant="outlined"
              style={{width: '400px'}}
            />
          </div>

          <FormControl fullWidth variant="outlined" style={{marginTop: '30px'}}>
          <InputLabel htmlFor="outlined-adornment-month">Credit Card</InputLabel>
          <OutlinedInput
            id="outlined-adornment-month"
            value={credit}
            onChange={handleChangeCredit}
            startAdornment={<CreditCardIcon style={{marginRight: '20px'}}></CreditCardIcon>}
            labelWidth={90}
            style={{width: '400px'}}
          />
        </FormControl>
        
        <div className={classes.inlineItemsList}>
            <FormControl variant="outlined" style={{width: '130px', marginTop: '20px'}}>
              <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={month}
                onChange={handleChangeMonth}
                labelWidth={60}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" style={{width: '130px', marginTop: '20px', marginRight: '250px'}}>
              <InputLabel id="demo-simple-select-outlined-label">Month</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={month}
                onChange={handleChangeMonth}
                labelWidth={60}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="outlined" style={{width: '130px', marginTop: '20px', marginRight: '260px'}}>
              <TextField
              id="outlined-textarea"
              label="CVV"
              placeholder="CVV"
              multiline
              variant="outlined"
              style={{width: '100px', marginTop: '-75px', marginLeft: '300px'}}
            />
            </FormControl>
        </div>
        <Divider/>
      </Paper>
      </Box>

    </form>
    <div style={{marginLeft: '400px', marginTop: '-1140px', width: '200px'}}>
         <CollapseSidebarUserItems/>
    </div>

    </Container>
  );
}

export default CreditCard;
