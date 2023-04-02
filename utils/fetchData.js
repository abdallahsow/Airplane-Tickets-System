export const fetchData = async (apiEndpoint) => {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  return data;
};
