import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from '@material-ui/core/styles';
import {ListItemText} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';


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
      marginRight: '-100px',
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

function CardBilling() {
  const classes = useStyles();

  const handleClick = event => event.preventDefault();

  const [accountHolder, setAccountHolder] = React.useState('John Doe');
  const [credit, setCredit] = React.useState('3445 6464 7885 3321');
  const [month, setMonth] = React.useState('Month');
  const handleAccountHolder = event => setAccountHolder(event.target.value);
  const handleChangeCredit = event => setCredit(event.target.value);
  const handleChangeMonth = event => setMonth(event.target.value);

  const [country, setCountry] = React.useState('United Kingdom');
  const handleChangeCountry = event => setCountry(event.target.value);

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
  

  const allState= {
    accountHolder: accountHolder,
  }

  return (
    <Container 
      maxWidth='lg'>
      <div style={{position: 'absolute', width: '806px', height: '58px', left: '459px', top: '67px'}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Avatar>
        </ListItemAvatar>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <ListItemText primary="John Doe" secondary="Manage billing information and view receipts" />
          <Chip size="small" label="PRO" style={{background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #2196F3', marginTop: '4px', color: '#2196F3', marginRight: '10px', marginLeft: '-200px'}}/>
          <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '5px'}}>
            <Link
                onClick={handleClick}
                style={{color: '#2196F3', textDecoration: 'none'}}
                to="/billings"
              >
              / Billing
            </Link>
            <Typography
                style={{color: 'black', textDecoration: 'none'}}
              >
               Card
            </Typography>
          </Breadcrumbs>
        </div>
      </ListItem>
      </div>
      <form>
      <div style={{position: 'absolute', width: '1156px', height: '58px', left: '-49px', top: '167px'}}>
      <Box width="50%" style={{marginLeft: '720px'}}>
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

            <FormControl variant="outlined" style={{width: '130px', marginTop: '20px', marginLeft: '20px'}}>
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

        <div style={{marginTop: '10px'}}>
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
            <div className={classes.inlineItemsList} style={{marginTop: '30px'}}>
                <TextField
                id="outlined-multiline-flexible"
                label="ZIP Code"
                multiline
                rowsMax={4}
                variant="outlined"
                style={{width: '130px'}}
                />

                <TextField
                    id="outlined-select-country"
                    select
                    label="Country"
                    value={country}
                    onChange={handleChangeCountry}
                    variant="outlined"
                    style={{width: '230px', marginLeft: '40px'}}
                    >
                    {countries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.value}
                        </MenuItem>
                    ))}
                    </TextField>
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
      </div>
      </form>
      <div style={{position: 'absolute', width: '202px', height: '48px', left: '471px', top: '167px'}}>
        <CollapseSidebarUserItems />
      </div>

    </Container>
  );
}

export default CardBilling;
