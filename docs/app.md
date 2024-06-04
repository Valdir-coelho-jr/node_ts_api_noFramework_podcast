# Podcast Manager

### Descrição

Um app ao estilo netflix, aonde possa centralizar diferentes episódio podcasts separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Listar os episódios podcasts em sessões de categorias
  - [saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:

Listar os episódios podcasts em sessões de categorias

### Como vou implementar:

GET: Retorna lista de episódios

```js
[
{
  podcastName: "flow",
  episode: "CBUM - Flow #319",
  videoId: "pQSuQmUfS30"
  cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=pQSuQmUfS30&pp=ygUJRmxvdyAjMzE5",
  categories: ["saúde", "bodybuilder"]
},

{
  podcastName: "flow",
  videoId: "4KDGTdiOV4I"
  episode: "RENATO TREZOITÃO - Flow #354",
  cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=4KDGTdiOV4I&pp=ygUJRmxvdyAjMzM5",
  categories: ["esporte", "corrida"]
},
]

```
