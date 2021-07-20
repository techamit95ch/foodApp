import {useEffect, useState} from 'react';
import yelp from '../api/yelp'
 export default ()=>{
    // const [term, setTerm] = React.useState("");
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");
    const searchApi = async (SearchTerm) => {
      try {
        const response = await yelp.get("/search", {
          params: {
            limit: 50,
            term:SearchTerm,
            location: "san jose",
          },
        });
        setResults(response.data.businesses);
        // console.log(response.data.businesses);
      } catch (err) {
        console.log(err);
        setError("Something went wrong");
      }
    };

    useEffect(
        ()=> {searchApi ('Pasta')}, []
    );
        return [searchApi, results, error];
 }