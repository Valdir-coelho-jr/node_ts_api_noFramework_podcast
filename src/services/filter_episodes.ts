import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import { PodcastTransferModel } from "../models/filter_podcast_mode";
import { StatusCode } from "../utils/statusCode";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  // Define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // Buscando os dados
  const queryString = podcastName?.split("?p=")[1] || "";
  const data = await repositoryPodcast(queryString);

  // Verifica se tem conteúdo

  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NoContent;

  responseFormat.body = data;

  return responseFormat;
};
