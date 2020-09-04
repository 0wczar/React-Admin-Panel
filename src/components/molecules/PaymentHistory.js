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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



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
    padding: '0px',
    marginLeft: '-10px',
    marginRight: '-10px'
  },
  premiumVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #4CAF50',
    color: '#4CAF50',
    borderRadius: '55px',
    fontSize: '12px',
    padding: '0px',
    marginLeft: '-10px',
    marginRight: '-10px'
  },
  basicVersionMember: {
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F44336;',
    color: '#F44336',
    borderRadius: '55px',
    fontSize: '12px',
    padding: '0px',
    marginLeft: '-10px',
    marginRight: '-10px'
  }
}));


function PaymentHistory() {

  const classes = useStyles();

  const [rows, setRows] = React.useState('10');
  const handleRowsChange = event => setRows(event.target.value);

  function createData( status, date, amount, offer, PaymentMethod, receipt) {
    return {status, date, amount, offer, PaymentMethod, receipt};
  }
  
  const rowss = [
    createData(<DoneIcon style={{ color: '#4CAF50' }}/>,'Thu, 12 July, 2018', '$204.96', <Button Button className={classes.proVersionMember}>PRO</Button>, 'Visa 4**** **** **** 9221' , <ReceiptIcon/>),
    createData(<CloseIcon style={{ color: 'red' }}/>, 'Sat, 12 July, 2018', '$204.96', <Button Button className={classes.basicVersionMember}>Basic</Button>, 'Visa 4**** **** **** 9221' ),
    createData(<DoneIcon style={{ color: '#4CAF50' }}/>, 'Thu, 12 July, 2018', '$204.96', <Button Button className={classes.premiumVersionMember}>Premium</Button>, 'Visa 4**** **** **** 9221', <ReceiptIcon/> ),
    createData(<DoneIcon style={{ color: '#4CAF50' }}/>, 'Sat, 12 July, 2018', '$204.96', <Button Button className={classes.proVersionMember}>PRO</Button>, 'Visa 4**** **** **** 9221', <ReceiptIcon/> ),

  ];

  return (
      <div style={{position: 'absolute', width: '1156px', height: '58px', left: '-49px', top: '581px'}}>
        <Box width="50%" style={{marginLeft: '770px'}}>
        <Paper variant="outlined">
          <ListItemText primary="Payment History" secondary="See all invoices" style={{marginTop: '14px', marginLeft: '16px'}}/>
          <ListItemIcon style={{float: 'right', marginTop: '-40px'}}><GetAppIcon/></ListItemIcon>
          <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Plan</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowss.map((rowss) => (
            <TableRow >
              <TableCell>{rowss.status}</TableCell>
              <TableCell>{rowss.date}</TableCell>
              <TableCell>{rowss.amount}</TableCell>
              <TableCell>{rowss.offer}</TableCell>
              <TableCell>{rowss.PaymentMethod}</TableCell>
              <TableCell>{rowss.receipt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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

    </TableContainer>
    
        </Paper>
        </Box>
      </div>
  );
}

export default PaymentHistory;