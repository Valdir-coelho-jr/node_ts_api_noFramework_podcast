import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list_episodes_services";
import { serviceFilterEpisodes } from "../services/filter_episodes";
import { ContentType } from "../utils/content_type";
import { StatusCode } from "../utils/statusCode";
import { PodcastTransferModel } from "../models/filter_podcast_mode";

const DEFAULT_CONTENT = { "Content-Type": ContentType.JSON }

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content: PodcastTransferModel = await serviceListEpisodes();

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const content = await serviceFilterEpisodes(req.url);

  res.writeHead(content.statusCode, DEFAULT_CONTENT);
  res.write(JSON.stringify(content.body));
  res.end();
};
