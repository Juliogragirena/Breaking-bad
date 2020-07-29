import fetchData from "../utils/FetchData";
import getHash from "../utils/GetHash";

async function characters() {
  const id = getHash();
  const personaje = await fetchData(id);
  const view = `
  <div class="card mb-3">
    <img class="card-img-top" src=${personaje[0].img} alt="${personaje[0].name}">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
  </div>
`;

  return view;
}

export default characters;
