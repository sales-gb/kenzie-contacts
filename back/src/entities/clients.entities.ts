import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from "typeorm";
import Contact from "./contacts.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("clients")
class Client {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 150 })
  fullName: string;

  @Column({ type: "varchar", length: 150 })
  password: string;

  @Column({ type: "varchar", length: 100, unique: true })
  email: string;

  @Column({ type: "varchar", length: 20, unique: true })
  phoneNumber: string;

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @OneToMany(() => Contact, (contact) => contact.client)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  passwordHash() {
    const isEncrypted: number = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default Client;
