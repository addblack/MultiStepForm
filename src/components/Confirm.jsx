import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButoon from 'material-ui/RaisedButton';

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() { 
    const { values: {firstName, lastName, occupation, city, bio, email} } = this.props;
    
    return ( 
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title = "All Your Information" showMenuIconButton={false} />
            <List>
              <ListItem 
                primaryText="First Name" 
                secondaryText={ firstName }
              />
              <ListItem 
                primaryText="Last Name" 
                secondaryText={ lastName }
              />
              <ListItem 
                primaryText="E-mail" 
                secondaryText={ email }
              />
              <ListItem 
                primaryText="Occupation" 
                secondaryText={ occupation }
              />
            </List>
              <ListItem 
                primaryText="City" 
                secondaryText={ city }
              />
              <ListItem 
                primaryText="Bio" 
                secondaryText={ bio }
              />
          <RaisedButoon 
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButoon 
            label="Send"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
     );
  }
}

const styles = {
  button: {
    margin: 20
  }
}

export default FormPersonalDetails;