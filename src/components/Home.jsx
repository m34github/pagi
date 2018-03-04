import React from 'react';
import {
  Button,
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from 'material-ui';

class Home extends React.Component {
  componentWillMount() {
    this.props.getUsersInfo();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.home.payload.docs[0].data());
  }

  render() {
    if (this.props.home.meta.isLoaded) {
      return (
        <section>
          <Button
            color="primary"
            href="/reader"
            variant="raised"
          >
            Reader
          </Button>
          <List>
            {
              this.props.home.payload.docs[0].data().addresses.map(address => (
                <section key={address.address}>
                  <ListItem button>
                    <ListItemIcon>
                      <Icon>{address.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={address.name} />
                  </ListItem>
                </section>
              ))
            }
          </List>
        </section>
      );
    }
    return (
      <section>
        Loading...
      </section>
    );
  }
}

export default Home;
