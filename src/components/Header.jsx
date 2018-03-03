import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography
} from 'material-ui';

class Header extends React.Component {
  render() {
    return (
      <section>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Pagi
            </Typography>
          </Toolbar>
        </AppBar>
      </section>
    );
  }
}

export default Header;
