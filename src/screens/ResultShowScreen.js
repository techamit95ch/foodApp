import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import yelp from "../api/yelp";
const ResultShowScreen = ({ route, navigation }) => {
  // console.log(route.params);
  const [result, setResult] = React.useState(null);
  const { id } = route.params;
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  React.useEffect(() => {
    getResult(id);
  }, []);
  if (!result) return null;
  return (
    <>
      {/* <ScrollView> */}
      <Text style={styles.heading}>{result.name} </Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) =>{
            return (
                <>
                {/* <Text style={styles.heading} >{item}</Text> */}
                <Image style={styles.image} source={{uri:item }} />
              </>
            );
        } }
      />
      {/* </ScrollView> */}
    </>
  );
};

export default ResultShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 390,
    borderRadius: 10,
    marginHorizontal: 10,
    marginTop: 10,
  },
  heading: {
    
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
  },
});
