export const gJson = (url) => fetch(url)
  .then(response => response.json());

export const getDetes = (id) => gJson(`http://13.56.218.102:5545/propertyDetails/${id}`);
export const getHost = (id) => gJson(`http://50.18.113.184:5000/api/hostedByService/${id}`);
