/**
 * Developer - Satish Jha
 * Modal Example
 */

 'use strict'

 import React, {
 	Component, 
 	View,
 	Text,
 	Modal,
 	StyleSheet,
 	TouchableHighlight
 } from 'react-native';

 var Button = require('./Button');

 class Ex1 extends Component {

 	constructor(props) {
 		super(props);

 		this.state = {
			animated: false,
      		modalVisible: false,
  			transparent: true,
 		}
 	}

 	setModalVisible(visible) {
    	this.setState({modalVisible: visible});
  	}

  	toggleAnimated() {
    	this.setState({animated: !this.state.animated});
  	}

	toggleTransparent() {
    	this.setState({transparent: !this.state.transparent});
  	}

 	render() {
	    var modalBackgroundStyle = {
	      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
	    };
	    var innerContainerTransparentStyle = this.state.transparent
	      ? {backgroundColor: '#fff', padding: 20}
	      : null;

	    return (
	      <View style={styles.container}>
	        <Modal
	          animated={this.state.animated}
	          transparent={this.state.transparent}
	          visible={this.state.modalVisible}>
	          <View style={[styles.container, modalBackgroundStyle]}>
	            <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
	              <Text>
	              	This is a model window. Please press Close button below to close the window.
	              </Text>
	              <TouchableHighlight
	                onPress={this.setModalVisible.bind(this, false)}
	                style={[styles.modalButton, styles.button]}>
	                	<Text style={styles.buttonText}> Close </Text>
	              </TouchableHighlight>
	            </View>
	          </View>
	        </Modal>	        

	        <Button text="Test" onPress={this.setModalVisible.bind(this, true)} />
	          
	      </View>
	    );
  } 	
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    borderRadius: 5,
    flex: 1,
    height: 44,
    alignSelf: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#AA9999'

  },
  buttonText: {
    fontSize: 18,
    margin: 5,
    textAlign: 'center',
    color: '#999999'
  },
  modalButton: {
    marginTop: 10,
  },
});

 module.exports = Ex1;