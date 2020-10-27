import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm'

import Image from './Image'

@Entity('orphanages')
class Orphanage {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  latitude: number

  @Column()
  longitude: number

  @Column()
  about: string

  @Column()
  instructions: string

  @Column()
  opening_hours: number

  @Column()
  open_on_weekends: boolean

  @Column()
  whatsapp: string

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'orphanage_id' })
  images: Image[]
}

export default Orphanage
