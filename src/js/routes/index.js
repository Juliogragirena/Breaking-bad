import home from "../templates/Home.js";
import character from "../templates/Character";
import getHash from "../utils/GetHash";
import resolveHash from "../utils/ResolveHash"
import notFound from "../templates/NotFound.js";

const routes = {
  "/": home,
  "/:id": character,
  "/error" : notFound,
};

async function router() {
  const contend = null || document.getElementById("content");

  const id = getHash();
  console.log(id)
  const route =  resolveHash(id)
  const render = routes[route] ?  routes[route] : routes['/error']
  contend.innerHTML = await render()

}

export default router;
