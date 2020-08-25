import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";
import { makeStyles } from '@material-ui/core/styles';
import {ListItem} from "@material-ui/core";
import {ListItemIcon} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import GetAppIcon from '@material-ui/icons/GetApp';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Select from '@material-ui/core/Select';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  text: {
    color: 'black',
  },
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


function PaymentHistory() {

  const classes = useStyles();

  const [rows, setRows] = React.useState('10');
  const handleRowsChange = event => setRows(event.target.value);

  return (
      <Box width="54%" style={{marginLeft: "600px", marginTop:'40px'}}>
      <Paper variant="outlined" style={{padding: "60px"}}>
        <ListItemText>Payment History</ListItemText>
        <ListSubheader style={{marginLeft: '-15px', marginTop:'-5px'}}>See all invoices</ListSubheader>
        <GetAppIcon color="disabled" style={{float: 'right', marginTop: '-69px'}}/>
        <List className={classes.inlineItemsList}>
        <List className={classes.blockList}>
              <ListItemText style={{marginBottom: '20px', marginLeft: '90px'}}>Date</ListItemText>
              <Divider/>
                <ListItem>
                    <ListItemIcon>
                      <DoneIcon style={{color: 'green'}} className={classes.styleIcons}/>
                    </ListItemIcon>
                    <ListSubheader style={{marginLeft: "-40px"}}>
                        Thu, 12 July, 2018
                    </ListSubheader>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                      <CloseIcon color="secondary" className={classes.styleIcons}/>
                    </ListItemIcon>
                    <ListSubheader style={{marginLeft: "-40px"}}>
                        Sat, 12 July, 2018
                    </ListSubheader>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                      <DoneIcon style={{color: 'green'}} className={classes.styleIcons}/>
                    </ListItemIcon>
                    <ListSubheader style={{marginLeft: "-40px"}}>
                        Thu, 12 July, 2018
                    </ListSubheader>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemIcon>
                      <DoneIcon style={{color: 'green'}} className={classes.styleIcons}/>
                    </ListItemIcon>
                    <ListSubheader style={{marginLeft: "-40px"}}>
                        Sat, 12 July, 2018
                    </ListSubheader>
                </ListItem>
                <Divider/>
        </List>
        <List className={classes.inlineItemsList}>
          <List clasName={classes.blockList} style={{marginLeft: '-45px'}}>
          <ListItemText style={{marginBottom: '12px', marginLeft: '30px'}}>Amount</ListItemText>
              <Divider/>
              <ListItem>
                    <ListSubheader style={{color: 'black'}}>
                        $204.96
                    </ListSubheader>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListSubheader>
                        $408.62
                    </ListSubheader>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListSubheader style={{color: 'black'}}>
                        $260.04
                    </ListSubheader>
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListSubheader style={{color: 'black'}}>
                        $699.45
                    </ListSubheader>
                </ListItem>
                <Divider/>
          </List>
        </List>

        <List className={classes.inlineItemsList}>
          <List clasName={classes.blockList} style={{marginLeft: '-45px'}}>
          <ListItemText style={{marginBottom: '12px', marginLeft: '30px'}}>Plan</ListItemText>
              <Divider/>
              <ListItem>
                <ListSubheader>
                  <Button className={classes.proVersionMember}>PRO</Button>
                </ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
              <ListSubheader>
                  <Button className={classes.basicVersionMember}>Basic</Button>
                </ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
              <ListSubheader>
                  <Button className={classes.premiumVersionMember}>PREMIUM</Button>
                </ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
              <ListSubheader>
                  <Button 
                  className={classes.proVersionMember}>PRO</Button>
                </ListSubheader>
              </ListItem>
                <Divider/>
          </List>
        </List>
        <List className={classes.inlineItemsList}>
          <List clasName={classes.blockList} style={{marginLeft: '-45px'}}>
          <ListItemText style={{marginBottom: '12px', marginLeft: '30px'}}>Payment Method</ListItemText>
              <Divider/>
              <ListItem>
                <ListSubheader>Visa 4*** *** *** 9221</ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
                <ListSubheader>Bank account 3**** 9221</ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
                <ListSubheader>Visa 4*** *** *** 9221</ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
                <ListSubheader>Bank account 3**** 9221</ListSubheader>
              </ListItem>
                <Divider/>
          </List>
        </List>

        <List className={classes.inlineItemsList}>
          <List clasName={classes.blockList} style={{marginLeft: '-15px', marginTop: '39px',marginRight: '-60px'}}>
              <Divider/>
              <ListItem>
                <ListSubheader>
                    <ReceiptIcon/>
                </ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
              <ListSubheader>
                    <ReceiptIcon/>
                </ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
              <ListSubheader>
                    <ReceiptIcon/>
                </ListSubheader>
              </ListItem>
                <Divider/>
              <ListItem>
              <ListSubheader>
                    <ReceiptIcon/>
                </ListSubheader>
              </ListItem>
                <Divider/>
          </List>
        </List>

          <List className={classes.inlineItemsList} style={{marginLeft: '160px'}}>
            <ListSubheader>Rows per page</ListSubheader>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={rows}
              onChange={handleRowsChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={11}>11</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={13}>13</MenuItem>
            </Select>
            <ListSubheader>1-3 of 13</ListSubheader>
            <List>
            <ListItemIcon><ChevronLeftIcon /></ListItemIcon>
            <ListItemIcon><ChevronRightIcon style={{color: 'black'}}/></ListItemIcon>
            </List>
          </List>

        </List>
      </Paper>
      </Box>
  );
}

export default PaymentHistory;