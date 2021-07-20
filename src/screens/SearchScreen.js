import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
import UseResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = React.useState("");
  const [searchApi, results, error] = UseResults();
  const filterResultByPrice = (price) => {
    // $$
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error !== "" ? <Text style={{ marginLeft: 5 }}>{error}</Text> : null}
      {!results.length  ? null : (
        <Text style={{ marginLeft: 5 }}>
          We have found {results.length} results for {term}
        </Text>
      )}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultByPrice("$")}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricer"
          results={filterResultByPrice("$$")}
          navigation={navigation}
        />
        <ResultsList
          title="Premium Spender"
          results={filterResultByPrice("$$$")}
          navigation={navigation}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
