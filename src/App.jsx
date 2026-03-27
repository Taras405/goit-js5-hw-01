import "./App.css";

function App() {
  const userName = "Taras";

  const imgUrl =
    "https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg";
  const imgAlt = "Flowers. Tulip nature art abstract";

  const studio = {
    name: "Magical Fox Studio",
    url: "https://www.tiktok.com/@magical_fox_studio",
  };

  const a = 20;
  const b = 10;

  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <>
      <h1>{userName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={imgUrl} alt={imgAlt} width="350" />
      <a href={studio.url}>{studio.name}</a>
      <p>{a - b}</p>

      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>

    </>
  );
}

export default App;
