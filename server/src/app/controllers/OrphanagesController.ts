import { Request, Response } from 'express'
import Orphanage from '@models/Orphanage'
import { getRepository } from 'typeorm'
import orphanageView from '@views/orphanages.view'
import * as Yup from 'yup'

class OrphanagesController {
  async create(req: Request, res: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      opening_hours,
      open_on_weekends,
      instructions,
      whatsapp,
    } = req.body

    const orphanageRepository = getRepository(Orphanage)

    const requestImages = req.files as Express.Multer.File[]
    const images = requestImages.map(image => ({
      path: image.filename,
    }))

    const data = {
      name,
      latitude,
      longitude,
      about,
      opening_hours,
      open_on_weekends: open_on_weekends === 'true',
      instructions,
      images,
      whatsapp,
    }

    const schema = Yup.object().shape({
      name: Yup.string().required(),
      latitude: Yup.number().required(),
      longitude: Yup.number().required(),
      about: Yup.string().required().max(300),
      instructions: Yup.string().required(),
      opening_hours: Yup.string().required(),
      open_on_weekends: Yup.boolean().required(),
      whatsapp: Yup.string().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        }),
      ).min(1),
    })

    await schema.validate(data, {
      abortEarly: false,
    })

    const orphanage = orphanageRepository.create(data)

    await orphanageRepository.save(orphanage)

    return res.status(201).json(orphanage)
  }

  async index(req: Request, res: Response) {
    const orphanageRepository = getRepository(Orphanage)
    const orphanage = await orphanageRepository.find({ relations: ['images'] })

    return res.json(orphanageView.renderMany(orphanage))
  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    const orphanageRepository = getRepository(Orphanage)
    const orphanage = await orphanageRepository.findOneOrFail(id, {
      relations: ['images'],
    })

    return res.json(orphanageView.render(orphanage))
  }
}

export default new OrphanagesController()
