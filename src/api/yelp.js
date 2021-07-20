import axios from 'axios';

export default  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization : 'Bearer 3JTkRadCVnSSa75rze1NKN9cYMpESu0r16IHCDkhiUezcJ8PjPz1-KZFFQtUCow_qi0JajeQLMZamgBTe_9xiBaIgsaXG2dmGT27sOTwLVexpZSgjSdI1ZhNsJv2YHYx'
    }
});