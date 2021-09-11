const API_URL_BASE = 'http://localhost:8080/api/'
const noParams = {};

const doApiCall = (endpoint, method, params, fallback = null, callback) => {
  //console.log(`API: ${API_URL_BASE}${endpoint}`);
  //console.log(`Params: ${JSON.stringify(params)}`);
  let payload = {
    headers: { 'Content-Type': 'application/json' }
  }
  if( method != 'GET' ) {
    payload.body = JSON.stringify(params)
    payload.method = method
  }
  fetch(`${API_URL_BASE}${endpoint}`, payload )
  .then(res => res.json()).catch(error => {
    if( callback ) callback(fallback);
  }).then(response => {
    if( response == null || response.error ) {
      if( callback ) callback(fallback);
    } else {
      if( callback ) callback(response);
    }
  });
}


export const categoriesApi = {
  get(callback) {
    doApiCall('category', 'GET', noParams, '', callback);
  },
}

export const platesApi = {
  get(callback) {
    doApiCall('plate', 'GET', noParams, '', callback);
  }
}
