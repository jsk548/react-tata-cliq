import React from 'react';

import ActionHome from 'material-ui/svg-icons/action/home';
import ToggleStar from 'material-ui/svg-icons/toggle/star';
import MapsLocalPlay from 'material-ui/svg-icons/maps/local-play';
import MapsLocalShipping from 'material-ui/svg-icons/maps/local-shipping';
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ActionHttps from 'material-ui/svg-icons/action/https';
import ActionStore from 'material-ui/svg-icons/action/store';
import NotificationEventNote from 'material-ui/svg-icons/notification/event-note';
import DeviceStorage from 'material-ui/svg-icons/device/storage';
import SocialPages from 'material-ui/svg-icons/social/pages';
import ActionThumbsUpDown from 'material-ui/svg-icons/action/thumbs-up-down';
import ActionHelp from 'material-ui/svg-icons/action/help';

const home = <ActionHome />;
const brands = <ToggleStar />;
const myCoupons = <MapsLocalPlay />;
const myOrders = <MapsLocalShipping />;
const rateTheApp = <ActionThumbUp />;
const myWishlist = <ActionFavorite />;
const call = <CommunicationCall />;
const aboutUs = <ActionInfo />;
const privacy = <ActionHttps />;
const ourStores = <ActionStore />;
const Terms = <NotificationEventNote />;
const categories = <DeviceStorage />;
const magazine = <SocialPages />;
const deals = <ActionThumbsUpDown />;
const help = <ActionHelp />;

export const menuItems = [
  {
    title: 'Home',
    url: '/',
    icon: home,
    isNested : false,
    nested: [],
  },
  {
    title: 'Categories',
    url: '/',
    isNested : true,
    icon: categories ,
    nested: [
          {
          title: 'Women Clothing',
          url: '/MP000000000006283',
          icon: '',
          id: 1,
          },
          {
          title: 'Men Clothing',
          url: '/MP000000000357534',
          icon: '',
          id:2,
          },
          {
          title: 'Electronics',
          url: '/MP000000000078818',
          icon: '',
          id:3,
          },
          {
          title: 'Footwear',
          url: '/',
          icon: '',
          id:4,
          },
          {
          title: 'Watches',
          url: '/',
          icon: '',
          id:5,
          },
          {
          title: 'Accessories',
          url: '/',
          icon: '',
          id:6,
          },
          ]
  },
  {
    title: 'Brands',
    url: '/',
    isNested : true,
    icon: brands,
    nested: [
          {
          title: 'A-Z Brands',
          url: '/',
          icon: '',
          id: 1,
          },
          {
          title: 'Multi-BrandStores',
          url: '/',
          icon: '',
          id:2,
          },
          {
          title: "Men's Brands",
          url: '/',
          icon: '',
          id:3,
          },
          {
          title: "Women's Brand",
          url: '/',
          icon: '',
          id:4,
          },
          {
          title: 'Electronics Brands',
          url: '/',
          icon: '',
          id:5,
          },
          {
          title: 'Footwear Brands',
          url: '/',
          icon: '',
          id:6,
          },
          ]
  },
  {
    title: 'Deals',
    url: '/',
    icon: deals,
    hasBorder : true,
    nested: [],
  },
  {
    title: 'Que Magazine',
    url: '/',
    icon: magazine,
    nested: [],
  },
  {
    title: 'Our Stores',
    url: '/',
    icon: ourStores,
    nested: [],
  },
  {
    title: 'My Orders',
    url: '/',
    icon: myOrders,
    nested: [],
  },
  {
    title: 'My Wishlist',
    url: '/',
    icon: myWishlist,
    nested: [],
  },
  {
    title: 'My Coupons',
    url: '/',
    icon: myCoupons,
    hasBorder : true,
    nested: [],
  },
  {
    title: 'Help & Services',
    url: '/',
    icon: help,
    nested: [],
  },
  {
    title: 'Privacy Policy',
    url: '/',
    icon: privacy,
    nested: [],
  },
  {
    title: 'Terms & conditions',
    url: '/',
    icon: Terms,
    nested: [],
  },
  {
    title: 'Call Customer Care',
    url: '/',
    icon: call,
    nested: [],
  },
  {
    title: 'About Us',
    url: '/',
    icon: aboutUs,
    nested: [],
  },
  {
    title: 'Rate The App',
    url: '/',
    icon: rateTheApp,
    nested: [],
  }
];

