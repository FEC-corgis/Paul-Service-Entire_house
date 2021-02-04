export const gJson = (url) => fetch(url)
  .then(response => response.json());

export const getDetes = () => gJson(`/propertyDetails/${Math.floor(Math.random()*100)}`);