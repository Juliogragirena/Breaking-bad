import "bootstrap/dist/css/bootstrap.min.css";
import router from "./routes/index";
import "../css/main.css";
// import fetchDataId from './utils/FetchDataId'


window.addEventListener("load", router);
window.addEventListener("hashchange", router)
