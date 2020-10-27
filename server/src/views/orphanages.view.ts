import Orphanage from '@models/Orphanage'
import imagesView, { ImageData } from './images.view'

interface OrphanageData {
  id: number
  name: string
  latitude: number
  longitude: number
  about: string
  instructions: string
  opening_hours: number
  open_on_weekends: boolean
  images: ImageData[]
  whatsapp: string
}

export default {
  render(orphanage: Orphanage): OrphanageData {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
      whatsapp: orphanage.whatsapp,
    }
  },
  renderMany(orphanages: Orphanage[]): OrphanageData[] {
    return orphanages.map(orphanage => this.render(orphanage))
  },
}
