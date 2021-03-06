import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
// import {  } from '@expo/vector-icons';
const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
  return (
    <View style={styles.backGround}>
      <AntDesign name="search1" style={styles.iconStyle} color="black" />
      <TextInput
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        onChangeText={onChangeTerm}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  backGround: {
    // marginTop: 15,
    margin: 15,
    backgroundColor: "#F0eeee",
    height: 50,
    borderRadius: 5,
    // marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
