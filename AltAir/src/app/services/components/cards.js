import React from "react";

const Cards = () => {
  const cards = [
    {
      title: "E-commerce",
      image: "https://images.unsplash.com/photo-1735238075869-365228c7cb68?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Immagine da Unsplash
      description: "Negozio online per vendere prodotti",
    },
    {
      title: "Showcase site",
      image: "https://plus.unsplash.com/premium_photo-1721985803589-418d2d337acf?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Immagine da Unsplash
      description: "Un sito vetrina per mostrare il tuo lavoro",
    },
    {
      title: "Social",
      image: "https://images.unsplash.com/photo-1741334632356-b1b71b661b32?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Immagine da Unsplash
      description: "Piattaforma per connettersi con gli altri",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-100">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-lg overflow-hidden w-80 text-center"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600 mb-4">{card.description}</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600">
              FIND OUT MORE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
