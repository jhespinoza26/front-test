/**
 * Simple Dialog
 */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';

import Typography from '@material-ui/core/Typography';
import blue from '@material-ui/core/colors/blue';

const emails = ['username@gmail.com', 'user02@gmail.com'];
const styles = {
   avatar: {
      backgroundColor: blue[100],
      color: blue[600],
   },
};

class SimpleDialog extends React.Component {
   handleClose = () => {
      this.props.onClose(this.props.selectedValue);
   };

   handleListItemClick = value => {
      this.props.onClose(value);
   };

   render() {
      const { classes, onClose, selectedValue, ...other } = this.props;

      return (
         <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
            <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
            <div>
               <List>
                  {emails.map(email => (
                     <ListItem button onClick={() => this.handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                           <Avatar className={classes.avatar}>
                              <PersonIcon />
                           </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                     </ListItem>
                  ))}
                  <ListItem button onClick={() => this.handleListItemClick('addAccount')}>
                     <ListItemAvatar>
                        <Avatar>
                           <AddIcon />
                        </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary="add account" />
                  </ListItem>
               </List>
            </div>
         </Dialog>
      );
   }
}

SimpleDialog.propTypes = {
   classes: PropTypes.object.isRequired,
   onClose: PropTypes.func,
   selectedValue: PropTypes.string,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SimpleDialogDemo extends React.Component {
   state = {
      open: false,
      selectedValue: emails[1],
   };

   handleClickOpen = () => {
      this.setState({
         open: true,
      });
   };

   handleClose = value => {
      this.setState({ selectedValue: value, open: false });
   };

   render() {
      return (
         <div>
            <Typography variant="h6">Selected: {this.state.selectedValue}</Typography>
            <br />
            <Button variant="contained" onClick={this.handleClickOpen} className="btn-success text-white btn-block">Open Simple dialog</Button>
            <SimpleDialogWrapped
               selectedValue={this.state.selectedValue}
               open={this.state.open}
               onClose={this.handleClose}
            />
         </div>
      );
   }
}

export default SimpleDialogDemo;
