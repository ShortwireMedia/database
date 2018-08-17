import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm'
import { User } from '.'

@Entity()
export class UserBlock {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  blocked: User

  @ManyToOne(type => User, user => user.blocks)
  user: User
}
