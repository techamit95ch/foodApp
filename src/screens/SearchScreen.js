import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
const SearchScreen = () => {
    const [term, setTerm] = React.useState('');
    return (
        <View>
            <SearchBar term={term} onChangeTerm={newTerm => setTerm(newTerm)}/>
            <Text>Search Text {term}</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
