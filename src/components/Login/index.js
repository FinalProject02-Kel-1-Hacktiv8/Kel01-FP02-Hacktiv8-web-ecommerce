import React from "react";
import Input from "../Input";
import Button from "../Button";

export default function Login() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <Input label="Email" placeholder="email address" type="text" />
            <Input label="Password" placeholder="password" type="password" />
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <Button type="button">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
