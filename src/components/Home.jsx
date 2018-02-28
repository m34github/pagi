import React from 'react';
import { AppBar, Button, Toolbar, Typography } from 'material-ui';

import { common } from '../commons/style';

class Home extends React.Component {
  render() {
    return (
      <article>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Pagi
            </Typography>
          </Toolbar>
        </AppBar>
        <Button variant="raised" color="primary">Hello</Button>

        <main style={common.main}>
          <Typography variant="subheading">
            Camera
          </Typography>
        </main>
      </article>
    );
  }
}

export default Home;
