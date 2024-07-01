import { Image } from "@nextui-org/react";
import React from "react";

const items = [
  {
    name: "SET X 2 MANILLAS PERSONALIZABLES EN BLANCO",
    image:
      "https://delavallelatienda.com.co/wp-content/uploads/2021/02/SET-X-2-PERSOANLISABLE-LETRAS-BLANCAS.jpg",
    price: 35,
  },
  {
    name: "Manillas para pareja con balin liso",
    image:
      "https://zonaelite.co/wp-content/uploads/2023/11/21.400-60.000-c_u-3-balines-lisos-5mm-2-punteras-4mm-copia-scaled.jpg",
    price: 120,
  },
  {
    name: "SET X 2 MANILLAS PERSONALIZABLES EN BLANCO",
    image:
      "https://delavallelatienda.com.co/wp-content/uploads/2021/02/SET-X-2-PERSOANLISABLE-LETRAS-BLANCAS.jpg",
    price: 35,
  },
  {
    name: "Manillas para pareja con balin liso",
    image:
      "https://zonaelite.co/wp-content/uploads/2023/11/21.400-60.000-c_u-3-balines-lisos-5mm-2-punteras-4mm-copia-scaled.jpg",
    price: 120,
  },
  {
    name: "Manillas de amor infinito de plata sterling",
    image:
      "https://www.coronadepapel.com/cdn/shop/products/Amor_infinito_1024x1024.png?v=1561905417",
    price: 120,
  },
  {
    name: "Manillas de amor infinito de plata sterling",
    image:
      "https://www.coronadepapel.com/cdn/shop/products/Amor_infinito_1024x1024.png?v=1561905417",
    price: 120,
  },
  {
    name: "Manillas de amor infinito de plata sterling",
    image:
      "https://www.coronadepapel.com/cdn/shop/products/Amor_infinito_1024x1024.png?v=1561905417",
    price: 120,
  },
];

export const ItemList = () => {
  return (
    <div className="flex flex-wrap">
      {items.map((item, i) => (
        <div className="">
          <Image src={item.image} width={240} />
        </div>
      ))}
    </div>
  );
};
