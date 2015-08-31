'use strict';

var React = require('react-native');
var AndazHotel = require('./AndazHotel.js');

var {
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var systemIconTypes = ['bookmarks', 'contacts', 'downloads', 'favorites', 'featured', 'history', 'more', 'most-recent', 'most-viewed', 'recents', 'search', 'top-rated'];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      selectedTab: 'history'
    };
  },

  render: function() {
    return (
      <TabBarIOS
        style={[styles.view6Tabbarios7]}
        >
        <TabBarIOS.Item 
        systemIcon='history'
        selected={this.state.selectedTab === 'history'}
        onPress={() => {
          this.setState({
            selectedTab: 'history',
          });
        }}>
        <AmenitiesPage />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='top-rated'
        selected={this.state.selectedTab === 'top-rated'}
        onPress={() => {
          this.setState({
            selectedTab: 'top-rated',
          });
        }}>
        <AndazHotel />
        </TabBarIOS.Item>
        <TabBarIOS.Item 
        systemIcon='search'
        selected={this.state.selectedTab === 'search'}
        onPress={() => {
          this.setState({
            selectedTab: 'search',
          });
        }}>
        <FindHotels />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  },

});

var styles = StyleSheet.create({
    view6Tabbarios7:{
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 16,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
    }, 
});
