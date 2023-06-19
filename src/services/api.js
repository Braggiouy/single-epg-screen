export const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:1337/epg");
    const jsonData = await response.json();
    return jsonData.channels;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
