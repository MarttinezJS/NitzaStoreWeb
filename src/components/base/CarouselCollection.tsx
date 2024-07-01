import { Image, Input, Spacer, image } from "@nextui-org/react";
import { HiOutlineSearch } from "react-icons/hi";
import { Carousel } from "react-responsive-carousel";

const items = [
  {
    text: "Aliquam faucibus tincidunt suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia mi a rhoncus feugiat. In et lorem lacus. Donec rhoncus suscipit neque, sed pellentesque felis. Morbi sit amet leo velit. In a augue volutpat, volutpat ipsum vitae, sollicitudin arcu. Cras luctus pretium condimentum. Vestibulum sit amet luctus lectus. Sed at enim nec sem consequat interdum. Aliquam malesuada odio ut tellus scelerisque, in aliquet leo placerat. Aliquam aliquam sem dolor, sed porta diam finibus ut.",
    title: "Base l'voute mate",
    image:
      "https://i.notretemps.com/1400x787/smart/2020/02/14/quiz-quelle-est-la-duree-de-vie-de-nos-produits-de-.jpeg",
  },
  {
    text: "Aliquam faucibus tincidunt suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla lacinia mi a rhoncus feugiat. In et lorem lacus. Donec rhoncus suscipit neque, sed pellentesque felis. Morbi sit amet leo velit. In a augue volutpat, volutpat ipsum vitae, sollicitudin arcu. Cras luctus pretium condimentum. Vestibulum sit amet luctus lectus. Sed at enim nec sem consequat interdum. Aliquam malesuada odio ut tellus scelerisque, in aliquet leo placerat. Aliquam aliquam sem dolor, sed porta diam finibus ut.",
    title: "eu de perfum Aliquam ",
    image:
      "https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/09/29/perfumes.jpeg",
  },
];
export const CarouselColection = () => {
  return (
    <div className="my-5 grid justify-items-center ">
      <Carousel
        infiniteLoop
        autoPlay
        swipeable
        onClickItem={console.log}
        showStatus={false}
        stopOnHover
      >
        {items.map((item, i) => (
          <div key={i}>
            <div
              className="bg-no-repeat bg-cover bg-center opacity-50 p-1 absolute -z-10 w-full h-full"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="p-32">
              <div className="text-5xl font-extrabold">{item.title}</div>
              <p className="pt-10">{item.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
      <Input
        radius="full"
        size="lg"
        className="md:w-96"
        placeholder="Search..."
        endContent={<HiOutlineSearch className="text-primary size-7" />}
      />
    </div>
  );
};
