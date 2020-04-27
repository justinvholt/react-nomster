// Utilize cors-anywhere to allow network requests to be made (this allows you to get search results)

export const API_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/';

// FIXME: remove this token 
// NOTE: as long as this token is saved in the fronted, app is not production ready
// Bearer Token must be used on a server that does not have exposure to outside world
export const BEARER_TOKEN = '';