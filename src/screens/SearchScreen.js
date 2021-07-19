import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";
const SearchScreen = () => {
  const [term, setTerm] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [error, setError] = React.useState("");
  const searchApi = async (SearchTearm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term:SearchTearm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      console.log(response.data.businesses);
    } catch (err) {
      console.log(err);
      setError("Something went wrong");
    }
  };
  return (
    <View>
      <SearchBar term={term} onChangeTerm={setTerm} onTermSubmit={()=>searchApi(term)} />
      {error !=="" ? <Text>{error}</Text> : null}
      <Text>Search Text : {term}</Text>
      <Text>we have found {results.length} results</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
