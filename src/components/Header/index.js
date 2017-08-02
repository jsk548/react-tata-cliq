import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import SocialPersonOutline from 'material-ui/svg-icons/social/person-outline';
import {Card, CardHeader} from 'material-ui/Card';
import './styles.css';

const iconStyles = {
  imgPresent : {
    'float': 'left',
    'margin': '10px',
  },
  imgAbsent : {
    'float': 'left',
    'width': '46px',
    'height': '30px'
  },
  appBar : {
    'background-color': '#a9133d',
    'color': 'white'
  },
  listInner : {
    'background-color': '#a9133d !important',
    'color': 'white !important'
  }
};

class Header extends Component {
	  state = {
    open: false,
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  svgIconElem = (svgListIcon) => {
    const svgElemment = svgListIcon;
    return svgElemment;
  }

  needNested = (nest) =>
  {
    const nestedElement = nest.map((nitem,index) =>
      <Link to={nitem.url} key={index}><ListItem onClick={this.handleToggle} className="nested-link" key={nitem.id} primaryText={nitem.title} /></Link>
    );
    return  nestedElement;
  }

  itemBordered = (hasBorder) => {
    if(hasBorder){
      return <Divider />;
    }
    return null;
  }

  render() {
    const { menuItems } = this.props;

    return (
      <section className="header topBarMenu">
        <AppBar onLeftIconButtonTouchTap={this.handleToggle} style={iconStyles.appBar} title="TATA CLiQ" />
        <Drawer
          docked={false}
          width={300}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
        <Card>
          <CardHeader className="card-header"
            title="Welcome Guest"
            titleColor="#a9133d"
            subtitle="Login"
            subtitleColor="black"
            avatar={<SocialPersonOutline />}
          />
        </Card>
          {menuItems.map((item, index) => <div>
          <List className="list-class">
            { item.isNested ? (
                <div><ListItem className="link" primaryText={item.title} leftIcon={this.svgIconElem(item.icon)}   initiallyOpen={false} nestedItems={[this.needNested(item.nested)]}
                innerDivStyle={iconStyles.listDiv} ></ListItem><span>{this.itemBordered(item.hasBorder)}</span></div>
            ) : (
            <div><Link to={item.url} key={index}><ListItem className="link" onClick={this.handleToggle} leftIcon={this.svgIconElem(item.icon)} primaryText={item.title} initiallyOpen={false} innerDivStyle={iconStyles.listDiv} />
            </Link><span>{this.itemBordered(item.hasBorder)}</span></div>)}
          </List>
          </div>)}
        </Drawer>
      </section>
    )
  }
}

Header.propTypes = {
  menuItems: PropTypes.array,
};

Header.defaultProps = {
  menuItems: [],
};

export default Header;