import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'

import Orphanages from './Orphanage'

@Entity('images')
class Image {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  path: string

  @ManyToOne(() => Orphanages, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanage_id' })
  orphanage: Orphanages
}

export default Image
