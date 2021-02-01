export const gJson = (url) => fetch(url)
  .then(response => response.json());

export const getDetes = () => gJson('propertyDetails/?id=${Math.floor(Math.random()*100)}');