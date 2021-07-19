import React ,{ useState} from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'

const ResultsList =({title,results})=>{
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text >Total results: {results.length}</Text>
            <FlatList
            horizontal
            data ={ results}
            keyExtractor ={(result)=>result.id}
            renderItem ={
                ({item})=> <Text>{item.name}</Text>
            }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    title :{
        fontWeight: "bold",
        fontSize: 18
    }
});
export default ResultsList;