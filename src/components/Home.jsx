import React from 'react';
import { Button } from 'material-ui';

class Home extends React.Component {
  render() {
    return (
      <section>
        <Button
          color="primary"
          href="/reader"
          variant="raised"
        >
          Reader
        </Button>
      </section>
    );
  }
}

export default Home;
