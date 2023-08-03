"use client";

import { retriveContact } from "@/services";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Contact {
  id: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

export const ContactPage = () => {
  const { id } = useParams();
  const [contact, setContact] = useState<Contact | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactId = Number(id);
        const data = await retriveContact(contactId);
        setContact(data);

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [setContact, id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!contact) {
    return <div>Contact not found.</div>;
  }

  return (
    <div>
      <h1>{contact.fullName}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phoneNumber}</p>
      <p>Created At: {contact.createdAt}</p>
    </div>
  );
};
