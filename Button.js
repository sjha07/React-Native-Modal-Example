/**
 * 
 * Developer - Satish Jha
 * Customer App
*/

'use strict';

import React, {
	View,
	Text,
	Component,
	ScrollView,
	StyleSheet,
    TouchableOpacity
} from 'react-native';

class Button extends Component {
	render () {
		return (
			<View>
                <TouchableOpacity                       
                    style={styles.touchableStyle}
                    onPress={this.props.onPress}>
                    <Text style={styles.touchableText}> 
                        { this.props.text }
                    </Text>
                </TouchableOpacity>                
            </View>
		);
	}

}

var styles = StyleSheet.create({
	container: {
		flex: 1,

		alignItems: 'center',
		justifyContent: 'center'
	},

    txtGenral: {
        fontSize: 14,
        color: '#992999',
        margin: 2,
        marginLeft: 20
    },

    txtAfterImage: {
        fontSize: 14,
        color: '#992999',
        margin: 1,
        marginLeft: 0
    },

    txtName: {

    },
    separator: {
        height: 0,
        backgroundColor: '#11AA33'
    },

    touchableText: {
        margin: 5,
        padding: 7,
        color: '#FFFFFF',
        fontSize: 20,
        alignItems: 'center',
        justifyContent: 'center'    
    },

    touchableStyle: {
        flex: 1,
        backgroundColor: '#48BBEC',
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }

});


module.exports = Button;