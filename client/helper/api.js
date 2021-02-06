export const gJson = (url) => fetch(url)
  .then(response => response.json());

export const getDetes = (id) => gJson(`/propertyDetails/${id}`);