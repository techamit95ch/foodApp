import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import UseResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const [searchApi, results, error] = UseResults();
  const filterResultByPrice =(price)=>{
    // $$
    return results.filter(result=>{
      return result.price ===price ;
    });
  }
  return (
    <View>
      <SearchBar term={term} onChangeTerm={setTerm} onTermSubmit={()=>searchApi(term)} />
      {error !=="" ? <Text>{error}</Text> : null}
      <Text>Search Text : {term}</Text>
      <Text>we have found {results.length} results</Text>
      
      <ResultsList title ="Cost Effective" results = {filterResultByPrice('$')}/>
      <ResultsList title ="Bit Pricer" results = {filterResultByPrice('$$')}/>
      <ResultsList title ="Premium Spender" results = {filterResultByPrice('$$$')}/>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
