import React, { Component } from 'react';
import './styles.css';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  refresh: {
    display: 'inline-block',
    position: 'relative',

  },
};

class MyTata extends Component {
	renderLoading() {
    	//const { fetching } = this.props;
    	return (
      		1 && <RefreshIndicator
      size={60}
      left={140}
      top={0}
      loadingColor="rgb(169, 19, 61)"
      status="loading"
      style={style.refresh}
    />
    	);
  	}

	render(){
		return (
				<div className="my-tata">
            <div className="home-div">
				        <span className="welcome">
                    <h1 className="home-page">Welcome To Tata CLiQ PWA App</h1>
                </span>
                <span className="description"></span>
			      </div>
        {this.renderLoading()}
				</div>
			);
	}
}

export default MyTata;