import { PodcastModell } from "./podcast_model";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModell[];
}
