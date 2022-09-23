import React from "react";

const SignIn = () => {
  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Sign In</h1>
      <div>
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://images.unsplash.com/photo-1553991562-9f24b119ff51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1339&q=80"
            alt="key "
            className="w-full rounded-2xl object-cover"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%]">
          <form>
            <input className="w-full" type="text" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
