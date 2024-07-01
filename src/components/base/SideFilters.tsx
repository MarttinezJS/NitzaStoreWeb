import { Button } from "@nextui-org/react";

const filters = ["New Collection", "Maquillaje", "Accesorios", "Kits"];

export const SideFilters = () => {
  return (
    <div className="grid mx-5">
      {filters.map((name, i) => (
        <Button className="mb-3" variant="ghost" color="primary" key={i}>
          {name}
        </Button>
      ))}
    </div>
  );
};
