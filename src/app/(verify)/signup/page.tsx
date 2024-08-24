"use client";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "@/type/User";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const postUser = async () => {
    try {
      const response = await axios.post(`/user`);
      console.log(response.data);
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onSignUp = () => {
    // fetchUser(username);
    // if (username == user?.username) {
    //   if (password == user?.password) {
    //     router.push(`/welcome/${username}`)
    //   } else {
    //     alert("password is not correct!, please try again");
    //   }
    // }
  };

  return (
    <div className="flex flex-col justify-center items-center m-auto w-4/5 h-2/3 md:w-1/2 md:h-3/4 bg-blue-400">
      <div className="p-4 my-4">SignUp</div>
      <div className="flex flex-col items-start">
        <input placeholder="username" value={username} onChange={e => {setUsername(e.target.value)}}></input>
        <input placeholder="password" value={password} onChange={e => {setPassword(e.target.value)}}></input>
        <input placeholder="confirm password" value={confirmPassword} onChange={e => {setConfirmPassword(e.target.value)}}></input>
        <button onClick={() => onSignUp}>SignUp</button>
      </div>
    </div>
  );
}
