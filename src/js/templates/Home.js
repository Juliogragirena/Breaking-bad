import fetchData from "../utils/FetchData";

async function card() {
  const personajes = await fetchData();
  const view = `
${personajes
  .map((personaje) => {
    return `<div class="col-4">
    <div class="card" style="width: 100%; height:500px">
        <img src=${personaje.img} class="card-img-top" alt=${personaje.name} width="100%" height="70%" />
        <div class="card-body">
            <h5 class="card-title">${personaje.name}</h5>
            <a href='#/${personaje.char_id}' class="btn btn-success">More Info</a>
        </div>
    </div>
</div>`;
  }).join('')}`;
  
  return view;
}
export default card;
