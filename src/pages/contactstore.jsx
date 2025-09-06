import { useEffect, useState } from "react";
import axios from "axios";

function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/read/contact")
      .then(res => setContacts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">All Contacts</h1>
      <div className="sm:flex sm:flex-col sm:gap-10 text-center">
        {contacts.map((c) => (
          <div key={c._id} className="border p-4 rounded shadow sm:flex gap-10">
            <p><strong>Name:</strong> {c.name}</p>
            <p><strong>Email:</strong> {c.email}</p>
            <p><strong>Description:</strong> {c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactsPage;
