const link = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities";

const fetchWeatherData = async () => {
  const res = await fetch(link);

  return res.ok && res.json();
};

export { fetchWeatherData };
