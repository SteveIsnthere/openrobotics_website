import React, { useState } from "react";

const Login = () => {
  const [secret,setSecret] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [team, setTeam] = useState("");

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if(secret !== "34ajfasd")
       console.error("Invalid credentials");
  };

  const handlePhotoChange = (event:any) => {
    setPhoto(event.target.files[0]);
  };

  const passwordVerification = () => {
    const compare:boolean = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    console.log(compare);
    return compare;
  }

  return (
    <section className="py-20 lg:py-[120px] overflow-hidden flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className="text-red-500">
      <label className=" font-bold text-black">
        Access Secret:
        <input
          type="text"
          value={secret}
          onChange={(event) => setSecret(event.target.value)}
          className="form-input mt-1 text-black border rounded-md"
        />
      </label>
      <label className="font-bold text-black">
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="form-input mt-1 text-black border rounded-md"
        />
      </label>
      <br />
      <label className=" font-bold text-black">
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="form-input mt-1 text-black border rounded-md"
        />
      </label>
      <br />
      <label className=" font-bold text-black">
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="form-input mt-1 text-black border rounded-md"
        />
        <p className="text-xs italic "> {passwordVerification() ? "Good password" : "Please enter a valid password (min 8 chars, one letter, one number and one special char)"}</p>
      </label>
      <br />
      <label className=" font-bold text-black">
        Photo:
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="form-input mt-1 text-black border rounded-md"
        />
      </label>
      <br />
      <label className=" font-bold text-black">
        LinkedIn:
        <input
          type="text"
          value={linkedin}
          onChange={(event) => setLinkedin(event.target.value)}
          className="form-input mt-1 text-black border rounded-md"
        />
      </label>
      <br />
      <label className=" font-bold text-black">
        GitHub:
        <input
          type="text"
          value={github}
          onChange={(event) => setGithub(event.target.value)}
          className="form-input mt-1 text-black border rounded-md"
        />
      </label>
      <br />
      <label className=" font-bold text-black"> 
        Team:
        <select
          value={team}
          onChange={(event) => setTeam(event.target.value)}
          className="form-select mt-1 text">
            <option value="team1">Admin</option>
            <option value="team2">Lead</option>
            <option value="team3">Team 3</option>
        </select>
      </label>
      <div className="">
            <button
            onClick = {handleSubmit}
            type="submit"
            className="
                        mt-1 w-full
                        text-gray-300
                        bg-gray-900
                        rounded-lg
                        hover:text-gray-100
                        border border-primary
                        p-3
                        "
            >
            Register
            </button>
        </div>
    </form>
    </section>
  );
  }

  export default Login;
