import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from '.'

@Entity()
export class UserFriend {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  friend: User

  @ManyToOne(type => User, user => user.friends)
  user: User
}
