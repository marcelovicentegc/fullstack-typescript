import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("animals")
export class Animal extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column({ nullable: true })
  public species: string;

  @Column({ nullable: true })
  public favoriteFood: string;
}
