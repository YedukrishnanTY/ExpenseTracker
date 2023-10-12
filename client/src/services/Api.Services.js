
export async function getData(latitude, longitude) {
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
  
}