const API_URL_BASE = 'http://fortinporteno.arevaloweb.com/api/'
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

/* APIs account */
export const categoriesApi = {
  get(callback) {
    doApiCall('category', 'GET', noParams, '', callback);
  },
  add(params, callback) {
    doApiCall('category', 'POST', params, '', callback);
  },
  update(id, params, callback) {
    doApiCall(`category/${id}`, 'PUT', params, '', callback);
  },
  delete(id, callback) {
    doApiCall(`category/${id}`, 'DELETE', noParams, '', callback);
  },
}

export const platesApi = {
  get(callback) {
    doApiCall('plate', 'GET', noParams, [], callback);
  },
  add(params, callback){
    doApiCall('plate', 'POST', params, false, callback);
  },
  update(id, params, callback) {
    doApiCall(`plate/${id}`, 'PUT', params, '', callback);
  },
  delete(id, callback) {
    doApiCall(`plate/${id}`, 'DELETE', noParams, '', callback);
  },
}
