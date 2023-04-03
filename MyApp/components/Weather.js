async function getWeather(city) {
  try {
    const apiKey = "a6617199b1b6acfafe22a7eada6ed9eb";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    const temperature = data.main.temp;
    return temperature;
  } catch (error) {
    console.error(error);
    return null;
  }
}
