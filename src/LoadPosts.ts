import {Media, MediaType, Post, Time} from "./typedef";
import postFile from "./index.json"

const FILE_DIR = "/media/"
type extMap = {
  [key: string]: MediaType
}

const EXT2TYPE: extMap = {
  'jpg': MediaType.Image,
  'png': MediaType.Image,
  'mp4': MediaType.Video,
  'mp3': MediaType.Audio,
  '': MediaType.None,
}

const sortTime = (a: Time, b: Time) => {
  if (a.year === b.year)
    if (a.month === b.month)
      return a.date - b.date
    else return a.month - b.month
  else return a.year - b.year
}

const posts: Post[] = postFile.map(item => {
  const dateArr = item.date.split('-').map(e => parseInt(e))
  const mediaArr: Media[] = item.content.map(c => {
    const ext = EXT2TYPE[c.split('.').pop() ?? ""]
    if (ext === MediaType.None) {
      if (c === "") return {
        data: "",
        type: MediaType.None
      }
      else return {
        data: c,
        type: MediaType.Text
      }
    }
    else return {
      data: FILE_DIR + c,
      type: ext
    }
  })
  const time: Time = {
    year: dateArr[0],
    month: dateArr[1],
    date: dateArr[2],
  }
  return {
    title: item.title,
    description: item.description,
    contents: mediaArr,
    time,
  }
}).sort((a, b) => sortTime(a.time, b.time))

export default posts