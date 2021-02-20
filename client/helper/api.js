export const gJson = (url) => fetch(url)
  .then(response => response.json());

export const getDetes = (id) => gJson(`http://54.176.104.176:5545/propertyDetails/${id}`);
export const getHost = (id) => gJSon(`http://ec2-18-207-211-57.compute-1.amazonaws.com:5002/api/hostedByService/${id}`);
