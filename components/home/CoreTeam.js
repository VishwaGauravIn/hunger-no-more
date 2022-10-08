import React from "react";

export default function CoreTeam() {
  const cc = [
    {
      avatar: "/team/sn.png",
      name: "SN Tak",
      gender: "male",
      position: "Faculty Coordinator",
    },
    {
      avatar: "/team/pulkit.png",
      name: "Pulkit Meena",
      gender: "male",
      position: "Coordinator",
    },
    {
      avatar: "/team/avinash.png",
      name: "Avinash Lakhyani",
      gender: "male",
      position: "Secretary",
    },
    {
      avatar: "/team/vineet.png",
      name: "Vineet Barwal",
      gender: "male",
      position: "Joint Secretary",
    },
    {
      avatar: "/team/madhur.png",
      name: "Madhur Bansal",
      gender: "male",
      position: "Executive Member",
    },
    {
      avatar: "/team/ankit.png",
      name: "Ankit Gupta",
      gender: "male",
      position: "Executive Member",
    },
    {
      avatar: "/team/arundhati.png",
      name: "Arundhati Sharma",
      gender: "female",
      position: "Creative",
    },
    {
      avatar: "/team/aryan.png",
      name: "Aryan Jagarwal",
      gender: "male",
      position: "Editor",
    },
  ];
  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-14 "
      id="team"
    >
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Teamwork is the fuel that allows common people to attain uncommon
        results.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56"
            >
              <img
                src={cc.avatar}
                alt={
                  cc.gender === "male" ? "/team/default-male.png" : "/team/default-female.png"
                }
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
