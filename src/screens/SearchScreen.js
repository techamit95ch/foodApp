import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from '../api/yelp'
const SearchScreen = () => {
    const [term, setTerm] = React.useState('');
    const [results, setResults] = React.useState([]);
    const searchApi = async () =>{
        try {
            const response = await yelp.get('/search',{
                params: {
                    limit:50,
                    term,
                    location:"san jose"
                }
            });
            setResults(response.data.businesses);
            console.log(response.data.businesses);
        }catch(err) {console.log(error.message);}
    }
    return (
        <View>
            <SearchBar term={term} onChangeTerm={setTerm} onTermSubmit = {searchApi}/>
            <Text>Search Text => {term}</Text>
            <Text>we have found {results.length} results</Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({})
