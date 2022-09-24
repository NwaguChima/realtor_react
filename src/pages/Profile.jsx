import React from "react";

const Profile = () => {
  const [formData, setFormData] = React.useState({
    name: "Chumzy",
    email: "chumzy@gmail.com",
  });

  const { name, email } = formData;

  return (
    <>
      <section>
        <h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
        <div>
          <form>
            <input
              type="text"
              id="name"
              value={name}
              disabled
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out mb-6"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
