import React, { PureComponent } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Helmet from 'react-helmet';
import { Grid } from 'react-bootstrap';
import Snackbar from 'material-ui/Snackbar';
import { menuItems } from 'utils/constants';

import { Header } from 'components';
import './styles.css';

const muStyles = {
  contentStyle: {
    textAlign: 'center'
  }
};

class AppWrapper extends PureComponent {
  state = {
    online: true,
    showSnackbar: false,
  };

  componentWillMount() {
    if (!window.Offline.check()) {
      this.setState({
        online: false,
        showSnackbar: true,
      });
    }
  }

  componentDidMount() {
    window.Offline.on('down', () => {
      this.setState({
        online: false,
        showSnackbar: true,
      });
    });
    window.Offline.on('up', () => {
      this.setState({
        online: true,
        showSnackbar: true,
      });
    });
  }

  handleRequestClose = () => {
    this.setState({
      showSnackbar: false,
    });
  }

  renderOffOnlineSnackbar() {
    const { online, showSnackbar } = this.state;
    const msg = !online ? 'Offline' : 'Online';
    return (
      <Snackbar
        contentStyle={muStyles.contentStyle}
        open={showSnackbar}
        message={msg}
        autoHideDuration={2000}
        onRequestClose={this.handleRequestClose}
      />
    );
  }

  render() {
    const { online } = this.state;
    const className = !online ? 'main-container offline' : 'main-container';
    return (
      <MuiThemeProvider>
        <div className={className}>
        <Helmet />
        <Header menuItems={menuItems}/>
        <Grid>
        {this.props.children}
        </Grid>
        {this.renderOffOnlineSnackbar()}
        </div>
      </MuiThemeProvider>
    )
  }
}

export default AppWrapper;
