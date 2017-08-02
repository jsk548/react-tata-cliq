import './styles.css';
import { BottomSheet } from 'material-ui-bottom-sheet';
import ReactStars from 'react-stars';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import {orange500} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import NavigationChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import ActionDone from 'material-ui/svg-icons/action/done';

import PDPTabs from './tabs';
import React, { PureComponent } from 'react';
import store from '../../index.js'; 
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import { fetchDelivery } from './actions';
import Badge from 'material-ui/Badge';
var Carousel = require('react-responsive-carousel').Carousel;

const myOfferElem = <b>OFFERS ON THIS PRODUCT</b>;
const KeySpect = <b>Key Specifications</b>;
const deliveryDone = <span className="delivery-mark"><ActionDone /></span>;
const tata_bag = require('assets/images/tata_bag.svg');
const bag = <img src={tata_bag} alt="my-bag" />;
const wish_add ="Item Added to Wishlist";
const wish_remove ="Item Removed from Wishlist";

const productStyles ={
	hintText: {
		'color':'#ccc',
	},
	underlineStyle: {
    		'borderColor': orange500,
  	},
     deliveryMode: {
        'color': '#7d7d7d',
      }
};

 

class Product extends PureComponent
{
    state = {
        rating : 0,
        open : false,
        val : "",
        features: "",
        Deliver: "",
        isHD: false,
        isED: false,
        isCNC: false,
        wish: false,
        wishMessage:"",
        wishSnack: false,
        bagCount: 0,
        isDialogOpen: false,
        DStatus: "",
        DCheck: false,
    };

     componentDidMount() {
       window.addEventListener('scroll', (e)=>
        this.handleScroll() );
    }

    DeliveryCheck = () =>
    {   
        const pin = this.state.val;
        store.dispatch(fetchDelivery(pin));
    }

     handleOffer = () => {
         this.setState({ offer : !this.state.offer });
    }



    handleFav = () => {
        this.setState({ 
            wishSnack : true,    
            wish : !this.state.wish,
             });
        if(this.state.wish){
            this.setState({wishMessage : wish_remove});
        }
        else {
            this.setState({wishMessage : wish_add});
        }
    }

    openDialog = () => {
        this.setState({isDialogOpen : true});
    }

    handleDialog = () => {
        this.setState({isDialogOpen : false});
    }

    handleAddToBag = () => {
        this.setState({bagCount : this.state.bagCount+1 });
    }

    handleSnackClose = () => {
        this.setState({wishSnack : false});
    }

    handleBottomSheet = () => {
         this.setState({ offer : false });
    } 

    handlePin = (event) =>
    {
        this.setState({ val: event.target.value,
                        isHD: false,
                        isED: false,
                        isCNC: false
                         });
    }

    handleScroll = () => {
     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            this.setState({
      open: true,
    });
    } else {
         this.setState({
      open: false,
    });
    }
    
    };

    render() {

        const actions = [
      <FlatButton label="OK" primary={true} keyboardFocused={true} onTouchTap={this.handleDialog}/>
    ];

        const styles = {
            messageStyle: {color: '#441F4B'},
            bodyStyle: {backgroundColor: '#e7dfdd'},
            styleSnack: {
            top: 64,
            height: '70px',
            left: '0%',
            bottom: 'auto',
            backgroundColor: '#e8dfdd',
            width: '100%',
            maxWidth: 'none',
            transform: this.state.open ?
                'translate3d(0, 0, 0)' :
                `translate3d(0, 0, 0)`
        },

        styleOffer: {
            bottom: 50,
            height: '70px',
            left: '0%',
            top: 'auto',
            backgroundColor: '#e8dfdd',
            width: '100%',
            maxWidth: 'none',
            transform: this.state.open ?
                'translate3d(0, 0, 0)' :
                `translate3d(0, 0, 0)`
        },

        EDMode: {
          color: this.state.isED ? '#000000' : '#7d7d7d' ,     
        },

        HDMode: {
          color: this.state.isHD ? '#000000' : '#7d7d7d' ,
        },

        CNCMode: {
          color: this.state.isCNC ? '#000000' : '#7d7d7d' ,
        },

        bottomSheet: {
            width: '20%',
        }

    };
        const { PDP , knowMore , warranty , Delivery , deliveryStatus } = this.props;

        const myDelivery = <div><span>
                         {this.state.isED && deliveryDone }
                    <b style={styles.EDMode}>Express Shipping</b>
                    <p className="delivery-time">Delivered in  1-2 days.</p>
                </span>
                <span>
                         {this.state.isHD && deliveryDone }
                    <b style={styles.HDMode}>Home delivery</b>
                    <p className="delivery-time">Delivered in 6-7 business Days</p>     
                </span>
                <span>
                        {this.state.isCNC && deliveryDone }
                    <b style={styles.CNCMode}>Click And Collect</b>
                    <p className="delivery-time">Buy before 3 PM, PIQ confirmed order same day</p>
                </span>
                <i>*Select delivery mode during checkout</i>
            </div>;
        
        //this.setState({features: PDP.classifications });
        var inStock , emi , cod;
         if(PDP.allOOStock === false){
            inStock =  <span><ActionDone /><b>In Stock&nbsp;&nbsp;</b></span>;
        }

       
        if(deliveryStatus === "good"){
                
                if(JSON.stringify(Delivery.listOfDataList[0].value) !== '{}'){
                    this.setState({ Deliver : Delivery.listOfDataList[0].value.pincodeListResponse[0] ,
                    DStatus : true
                    });

                    if(this.state.Deliver.isServicable === "Y"){
                if(this.state.Deliver.validDeliveryModes[0] && this.state.Deliver.validDeliveryModes[0]["type"] === "HD" ){
                    this.setState({ isHD : true });
                }
                if(this.state.Deliver.validDeliveryModes[1] && this.state.Deliver.validDeliveryModes[1]["type"] === "ED" ){
                    this.setState({isED : true });
                }
                if(this.state.Deliver.validDeliveryModes[2] && this.state.Deliver.validDeliveryModes[2]["type"] === "CNC" ){
                    this.setState({isED : true });
                }
                
            }
                }
                else {
                    this.setState({
                    DStatus : false
                    });
                }

        this.setState({DCheck: true});
        }

        if(PDP.isEMIEligible === "Y"){
            emi = <span><ActionDone /><b>EMI&nbsp;&nbsp;</b></span>;
        }

         if(PDP.isCOD === "Y"){
            cod = <span><ActionDone /><b>COD</b></span>;
        }

        var myImg1, myImg2, myImg3, myImg4;


        if(PDP.galleryImagesList){
           myImg1 = PDP.galleryImagesList[0]["galleryImages"][0]["value"];
           myImg2 = PDP.galleryImagesList[1]["galleryImages"][1]["value"];
           myImg3 = PDP.galleryImagesList[2]["galleryImages"][2]["value"];
           myImg4 = PDP.galleryImagesList[3]["galleryImages"][3]["value"];   
        }

        const more = knowMore.map((KM) =>
            <h5>{KM.knowMoreItem}</h5>
            );

        const ratingChanged = (newRating) => {
            this.setState({rating: newRating});
        }
        const productWarranty = warranty.map((PW) =>
            <p>{PW}</p>
            ); 
        const pinChecked = this.state.DStatus ? <div><span>
                         {this.state.isED && deliveryDone }
                    <b style={styles.EDMode}>Express Shipping</b>
                    <p className="delivery-time">Delivered in  1-2 days.</p>
                </span>
                <span>
                         {this.state.isHD && deliveryDone }
                    <b style={styles.HDMode}>Home delivery</b>
                    <p className="delivery-time">Delivered in 6-7 business Days</p>     
                </span>
                <span>
                        {this.state.isCNC && deliveryDone }
                    <b style={styles.CNCMode}>Click And Collect</b>
                    <p className="delivery-time">Buy before 3 PM, PIQ confirmed order same day</p>
                </span>
                <i>*Select delivery mode during checkout</i>
            </div> : <div className="pin-fail">This Pincode is not Servicable</div>;

        const messages = <div><span><img className="top-image"  src={myImg1} alt="top-image" /></span>
                        <span className="my-top-final-price">
                        <b>{PDP.winningSellerMOP} &nbsp;&nbsp;</b>
                        </span>
                        <span className="my-top-mrp">
                        <b>{PDP.mrp}</b>
                        </span>
                        </div>;
        const offerContent = "There are no offers for this Product";
        const offer = <span>{offerContent}</span>;

        return (
        <div className="product-main-div">
         <div className="top-snack"><Snackbar
          open={this.state.open}
          message={messages}
          onRequestClose={this.handleRequestClose}
          style={styles.styleSnack}
          bodyStyle ={styles.bodyStyle}
        /></div>
                <div><Snackbar
          open={this.state.wishSnack}
          message={this.state.wishMessage}
          autoHideDuration={3000}
          onRequestClose={this.handleSnackClose}
        /></div>
         <Dialog
          title="This Page Is In Progress"
          actions={actions}
          modal={false}
          open={this.state.isDialogOpen}
        >
          
        </Dialog>

        <Badge className="badge"
      badgeContent={this.state.bagCount}
      onClick={this.openDialog}
    >
     {bag}
        </Badge>
          <BottomSheet
            onRequestClose={this.handleBottomSheet}
            open={this.state.offer}
        >
        <p>{offer}</p>
            </BottomSheet>
            <Carousel axis="horizontal" showArrows={true} dynamicHeight emulateTouch>
            <div><img src={myImg1} /></div>
            <div><img src={myImg2} /></div>
            <div><img src={myImg3} /></div>
            <div><img src={myImg4} /></div>
            </Carousel>
            <div className="product-data">
            	<span className="product-name">
            		<b>{PDP.productName}</b>
            	</span>
            	<span className="product-rating">
            		<span>
            			<ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        color2={'#ffd700'} />
            		</span>
            		<span className="rating-number">
            				{this.state.rating}
            		</span>
            		<div className="rating-count" onClick={this.openDialog}>
            				1 Reviews
            		</div>
            	</span>
            </div>
            <div className="product-price-div ">
            	<span>
            		<span className="final-price">
            			<b>{PDP.winningSellerMOP} &nbsp;&nbsp;</b>
            		</span>
					<span className="actual-price">
						<b>{PDP.mrp}</b>
					</span>
					<span className="final-price">
						<b>&nbsp;&nbsp;(-{PDP.discount}%)</b>
					</span>
					<span className="wishlist">
						<span onClick={this.handleFav}>{this.state.wish ? <ActionFavoriteBorder /> : <ActionFavorite /> } </span>
					</span>
            	</span>
            </div>
            <div className="product-data">
            	{inStock}{emi}{cod}
            </div>
            <List><ListItem className="offers-row" primaryText={myOfferElem} onClick={this.handleOffer} /></List>
            <div className="product-data">
            	<span>
            		<b>Check delivery options</b>
            	</span>
            	<div>
            		<span className="delivery-check">
            			<TextField hintText="Pincode"  maxLength="6"  onChange={this.handlePin} hintStyle={productStyles.hintText}  underlineStyle={productStyles.underlineStyle} />
            		</span>
            		<span className="check-button">
            			<RaisedButton className="button-border" onClick={this.DeliveryCheck} label="CHECK" labelColor={orange500} labelPosition="before" containerElement="label" />
            		</span>
            	</div>
            </div>
            <div className="delivery-info product-data">
            	{ this.state.DCheck ? pinChecked : "" }
                
            </div>
            <Divider />
            <div className="info-div product-data">
            <p><b>Sold by: DMV E COMMERCE</b></p>
            </div>
            <Divider />
            <div className="info-div product-data">
            <h4><b>KEY FEATURES</b></h4>
            	
            </div>
            <Divider />
            <ListItem className="key-spect" primaryText={KeySpect} onClick={this.openDialog}  rightIcon={< NavigationChevronRight />} />
             <Divider />
             <div className="info-div product-data">
            <h4><b>SUMMARY</b></h4>
            	<p>
                {PDP.productDescription}
            	
            	</p>
            </div>
            <Divider />
            <div className="info-div product-data">
            <h4><b>WARRANTY</b></h4>
            	{productWarranty}
            </div>
            <Divider />
            <div className="info-div product-data">
            <h4><b>KNOW MORE</b></h4>
            {more}
            </div>
            <Divider />
            <PDPTabs className="footer-div" myBagFunc={this.handleAddToBag} myDialog={this.openDialog} />
        </div>
        );
    }
}

const mapStateToProps = (state) => ({
  newsState: state.product,
  PDP: state.product.PDP,
  Delivery : state.product.Delivery,
  warranty : state.product.warranty,
  source: state.product.source,
  knowMore : state.product.knowMore,
  fetching: state.product.fetching,
  deliveryStatus : state.product.deliveryStatus,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
