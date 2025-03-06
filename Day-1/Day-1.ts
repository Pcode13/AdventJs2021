interface Oveja {
    name: string;
    color: string;
  }
  
  export default function contarOvejas(ovejas: Oveja[]): Oveja[] {
    return ovejas.filter(
      (oveja) =>
        oveja.color === "rojo" &&
        oveja.name.toLowerCase().includes("n") &&
        oveja.name.toLowerCase().includes("a")
    );
  }
  
  const ovejas: Oveja[] = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
    { name: "AAAAAaaaaa", color: "rojo" },
    { name: "Nnnnnnnn", color: "rojo" },
  ];
  
  const ovejasFiltradas = contarOvejas(ovejas);
  console.log(ovejasFiltradas);
  