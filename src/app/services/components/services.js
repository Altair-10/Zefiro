"use client";
import React from "react";
import { Card, CardHeader, CardBody, Image } from "@heroui/react";

const Services = () => {
  const users = [
    {
      nome: "stive",
      cognome: "bamouni",
      cellulare: 3519741814,
      img: "https://heroui.com/images/hero-card-complete.jpeg",
    },
    {
      nome: "stive",
      cognome: "bamouni",
      cellulare: 3519741814,
      img: "https://heroui.com/images/hero-card-complete.jpeg",
    },
    {
      nome: "stive",
      cognome: "bamouni",
      cellulare: 3519741814,
      img: "https://heroui.com/images/hero-card-complete.jpeg",
    },
    {
      nome: "stive",
      cognome: "bamouni",
      cellulare: 3519741814,
      img: "https://heroui.com/images/hero-card-complete.jpeg",
    },
  ];

  return (
    <div className="flex">
      {users.map((user, index) => (
        <Card className="m-3 py-4 px-4 p-5 gap-3" key={index}>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold">{user.nome}</p>
            <small className="text-default-500">{user.cognome}</small>
            <h4 className="font-bold text-large">{user.cellulare}</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={user.img}
            />
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Services;
