import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { UserFriend, UserBlock } from '.'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { length: 20 })
  username: string

  @Column('varchar', { select: false })
  email: string

  @Column('boolean')
  verified: boolean

  @Column('varchar', { select: false })
  password: string

  @OneToMany(type => UserFriend, userFriend => userFriend.user, { cascade: true })
  friends: UserFriend[]

  @OneToMany(type => UserBlock, userBlock => userBlock.user, { cascade: true })
  blocks: UserBlock[]
}
