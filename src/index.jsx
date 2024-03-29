import Carousel from "./Components/carousel";
import Products from "./Components/product";
import SearchBar from "./Components/searchBar";

export default function Index() {
  return (
    <div>
      <Carousel />
      <SearchBar />
      <Products />
      <footer></footer>
    </div>
  );
}
