import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import Contact from "./contacts.entities";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 150 })
  fullName: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 20, unique: true })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];
}

export default Client;
