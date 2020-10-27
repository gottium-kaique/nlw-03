import Image from '@models/Image'

export interface ImageData {
  id: number
  url: string
}

export default {
  render(image: Image): ImageData {
    return {
      id: image.id,
      url: `http://192.168.0.103:3333/uploads/${image.path}`,
    }
  },
  renderMany(images: Image[]): ImageData[] {
    return images.map(image => this.render(image))
  },
}
