import React, { useState } from "react";
import Input from "../../component/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addtoken } from "../../redux/slice/token-slice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(addtoken(form.email));
    navigate("/");
  };

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-white">
            Slow-carb next level shoindxgoitch ethical authentic, poko scenester
          </h1>
          <p class="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <div class="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 class="text-white text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <form>
            <div class="relative mb-4">
              <Input
                label="Email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChangeInput}
                placeholder="email address"
              />
            </div>
            <div class="relative mb-4">
              <Input
                label="Password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChangeInput}
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmitForm}
              class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
          </form>
          <p class="text-xs mt-3">
            Literally you probably haven't heard of them jean shorts.
          </p>
        </div>
      </div>
    </section>
  );
}
