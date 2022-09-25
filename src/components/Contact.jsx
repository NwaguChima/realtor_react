import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

const Contact = ({ userRef, listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");

  console.log("landlor", landlord);
  useEffect(() => {
    async function getLandlord() {
      const docRef = doc(db, "users", userRef);

      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord details");
      }
    }

    getLandlord();
  }, [userRef]);

  const handleChange = (e) => setMessage(e.target.value);

  return (
    <>
      {landlord !== null && (
        <div className="">
          <p>
            Contact {landlord.name} for the {listing.name.toLowerCase()}{" "}
          </p>
          <div className="">
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={handleChange}
            />
          </div>
          <a
            href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
          >
            Send Message
          </a>
        </div>
      )}
    </>
  );
};

export default Contact;
