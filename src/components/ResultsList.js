import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";
const ResultsList = ({ title, results, navigation }) => {
    if (!results.length ) return null;
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={{ marginLeft: 5 }}>Total results: {results.length}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ResultShow", { id: item.id })}
          >
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 5,
    padding: 2,
  },
  view: {
    margin: 5,
  },
});
export default withNavigation(ResultsList);
