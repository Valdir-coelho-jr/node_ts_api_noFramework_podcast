import { PodcastTransferModel } from "../models/filter_podcast_mode";
import { repositoryPodcast } from "../repositories/podcasts_repository";
import { StatusCode } from "../utils/statusCode";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  // Define a interface de retorno
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  // Busca os dados
  const data = await repositoryPodcast();

  // Verifica se tem conteúd
  responseFormat = {
    statusCode: (await data).length !== 0 ? StatusCode.OK : StatusCode.NoContent,
    body: data,
  };

  return responseFormat;
};
