import * as http from "http";
import {
  getFilterEpisodes,
  getListEpisodes,
} from "./controllers/podcasts_controller";
import { Routes } from "./routes/routes";
import { HttpRequest } from "./utils/http_methods";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""];

  if (request.method === HttpRequest.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpRequest.GET && baseUrl === Routes.EPISODES) {
    await getFilterEpisodes(request, response);
  }
};
