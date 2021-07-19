import axios from 'axios';

export default  axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization : 'Bearer SITQZJSDJPxanOOV3BuYoI4Api_0bMi6DmzoOo7lWFOSr6IFQSSUDlthK7FCWb-yeGWe-qZ83eeDMkznHcaOheCyYx4DVEmN7I9fQ9MBcTFbdUl6nhG53a39lGP0YHYx'
    }
});