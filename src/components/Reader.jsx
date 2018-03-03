import React from 'react';
import QrReader from 'react-qr-reader';

class Reader extends React.Component {
  componentWillMount() {
    this.setState({
      delay: 300,
      result: 'No result'
    });
  }

  render() {
    const handleScan = (data) => {
      if (data) {
        this.setState({
          result: data
        });
      }
    };

    const handleError = (err) => {
      console.error(err);
    };

    return (
      <section>
        <QrReader
          delay={this.state.delay}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        {this.state.result}
      </section>
    );
  }
}

export default Reader;
