import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from "typeorm";
import Client from "./clients.entities";

@Entity("contacts")
class Contact {
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

  @ManyToOne(() => Client, (client) => client.contacts)
  client: Client;
}

export default Contact;
