import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from '@material-ui/core/styles';
import {ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import PaymentHistory from 'components/molecules/PaymentHistory.js';
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
  },
  premiumVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #4CAF50',
    color: '#4CAF50',
    borderRadius: '55px',
    fontSize: '12px',
  },
  basicVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336;',
    color: '#F44336',
    borderRadius: '55px',
    fontSize: '12px',
  }
}));

function Billings() {
  const classes = useStyles();

  return (
    <Container 
      maxWidth='lg'>
      <form>
      <div style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: '25px',
        marginTop: '50px',
        color: 'black'
      }}>
          <Avatar 
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg" 
          />
          <List>
            <ListItemText 
              primary="John Doe" 
              style={{
                marginLeft: '15px', 
                marginBottom: '-25px'
              }}>
            </ListItemText>
            <Button className={classes.proVersionMember} style={{marginLeft: '112px', padding: '2px'}}>PRO</Button>
            <Breadcrumbs 
              aria-label="breadcrumb" 
              style={{
                marginLeft: "200px",
                marginTop: "-24px"
              }}>
                <Link 
                  color="inherit" 
                  href="/profile"
                >
                  <Typography 
                    color="textPrimary"
                    > / Billing
                  </Typography>
                </Link>
            </Breadcrumbs>
            <ListSubheader style={{
              marginTop: '-8px'
              }}>
                Manage billing information and view receipts
            </ListSubheader>
          </List>
        </div>

      <Box width="54%" style={{marginLeft: "600px"}}>
      <Paper variant="outlined" style={{padding: "60px"}}>
          <ListItemText>Your Plan</ListItemText>
            <ListSubheader style={{float: 'right', marginTop: '-40px'}}>
              <Button className={classes.proVersionMember}>PRO</Button>
            </ListSubheader>
          <Button variant="outlined" style={{marginTop: '20px'}}>Change</Button>
          <Button style={{marginTop: '20px', marginLeft: '20px'}}>Cancel Subscription</Button>
          <Divider style={{marginTop: '40px'}}/>
          <ListItemText style={{marginTop: '25px'}}>Payment</ListItemText>
          <ListSubheader style={{marginLeft: '-15px'}}>You can use a Credit Card or a bank Account.</ListSubheader>
          <ListSubheader style={{marginLeft: '-15px', fontSize: '13px'}}>Payment Method on file</ListSubheader>
          <ListItemText>Visa Ending in 0218 expiring 4/2020</ListItemText>
          <Button variant="outlined" style={{marginTop: '20px'}}><Link to='/card' className={classes.text}>Edit</Link></Button>
          <Button style={{marginTop: '20px', marginLeft: '20px'}}>Remove</Button>
      </Paper>
      </Box>
      
      <PaymentHistory/>

    </form>
    <div style={{marginLeft: '400px', marginTop: '-1140px', width: '200px'}}>
         <CollapseSidebarUserItems/>
    </div>

    </Container>
  );
}

export default Billings;
