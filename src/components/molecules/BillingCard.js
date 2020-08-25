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
import Container from '@material-ui/core/Container';

import CollapseSidebarUserItems from 'components/atoms/CollapseSidebarUserItems.js';
import CreditCard from 'components/atoms/CreditCard.js';
import AddressUserInfo from 'components/atoms/AddressUserInfo.js';

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

function CardBilling() {
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
                    > / Billing / Card
                  </Typography>
                </Link>
            </Breadcrumbs>
            <ListSubheader style={{
              marginTop: '-8px'
              }}>
                Add a card to your account
            </ListSubheader>
          </List>
        </div>

      <CreditCard/>
      <AddressUserInfo/>
      

    </form>
    <div style={{marginLeft: '400px', marginTop: '-1060px', width: '200px'}}>
         <CollapseSidebarUserItems/>
    </div>

    </Container>
  );
}

export default CardBilling;
