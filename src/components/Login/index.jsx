import React, { useCallback, useState } from "react";
import { useMutation } from "react-query";
import Input from "../Input";
import Button from "../Button";
import { postData } from "@/Utils/fetch";
import { useDispatch } from "react-redux";
import { addToken } from "@/redux/slice/slice-token";
import { useRouter } from "next/router";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addUserMutation = useMutation(
    (payload) => postData("/auth/login", payload),
    {
      onSuccess: (res) => {
        dispatch(addToken(res.token));
        router.prefetch("/");
      },
    }
  );

  const handleClickInput = useCallback(
    async (e) => {
      e.preventDefault();
      const payload = {
        username: form.username,
        password: form.password,
      };
      await addUserMutation.mutate(payload);
    },
    [addUserMutation]
  );

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Login to{" "}
            <span className="flex pt-3">
              <i class="fa-solid fa-bag-shopping pr-2 text-purple-600"></i>{" "}
              JAJAN.id
            </span>
          </h1>
          <p className="py-6 text-lg">Buy what you Want and what you Need!</p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <Input
                label="Username"
                name="username"
                value={form.username}
                onChange={onChangeInput}
                placeholder="email address"
                type="text"
              />
              <Input
                label="Password"
                name="password"
                value={form.password}
                onChange={onChangeInput}
                placeholder="password"
                type="password"
              />
              <div className="form-control mt-6">
                <Button type="submit" onClick={handleClickInput}>
                  Login
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
