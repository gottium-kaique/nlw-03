import multer, { Options } from 'multer'
import { join } from 'path'

const uploadConfig: Options = {
  storage: multer.diskStorage({
    destination: join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`

      cb(null, fileName)
    },
  }),
}

export default uploadConfig
