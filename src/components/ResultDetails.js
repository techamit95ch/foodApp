import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultDetails = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.details}>{result.rating} Stars, {result.reviewCount} Reviews</Text>
        </View>
    )
}

export default ResultDetails

const styles = StyleSheet.create({
    container:{
        marginLeft: 10,
        width : 180,
    },
    image: {
        width : 180,
        height : 120,
        borderRadius : 7,
        // marginHorizontal: 5,
        
    },
    name:{
        fontWeight: 'bold',
        padding: 2,
        // marginLeft: 5,
    },
    details: {
        padding: 2,
        // marginLeft: 5,
        
    }
})
