export enum MediaType {
  None,
  Text,
  Image,
  Video,
  Audio,
}

type Media = {
  data: string,
  type: MediaType,
}

type Post = {
  title: string,
  description: string,
  contents: Media[],
  time: Time,
}

type Time = {
  year: number,
  month: number,
  date: number,
}


export type {Media, Post, Time}