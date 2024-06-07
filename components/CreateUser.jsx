"use client";
import { Button , Input } from "@material-tailwind/react";
import { useState } from "react";



function CreateUser() {
const [id,setId] = useState("");
const [name,setName] = useState("");
const [age,setAge] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async(e) => {
    e.preventDefault();

    if(!id || !name || !age || !email || !password) {
        alert("fill all the coloums");
        return;
    }
    try {
        const response = await fetch("api/users",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id,name,age,email,password}),
        });
        if(response.ok) {
            alert("Successfully Created the User");
        } else {
            alert("something went wrong");
            return;
        }
    } catch(error) {
        alert(error);
        return;
    }
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Input label="ID" type="text" placeholder="ID" value={id}
            onChange={(e) => setId(e.target.value)} /> <br />
            <Input label="Name" type="text" placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} /> <br />
            <Input label="Age" type="number" placeholder="Age" value={age}
            onChange={(e) => setAge(e.target.value)} /> <br />
            <Input label="Email" type="text" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} /> <br />
            <Input label="Password" type="password" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)} /> <br />
            <Button className="mt-2" type="submit">Submit</Button>
        </form>
    </div>
  )
}

export default CreateUser