export const gJson = (url) => fetch(url)
  .then(response => response.json());

export const getDetes = (id) => gJson(`http://54.176.104.176:5545/propertyDetails/${id}`);
