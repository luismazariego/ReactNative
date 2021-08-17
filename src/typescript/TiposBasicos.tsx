export const TiposBasicos = () => {
  const nombre: string = "Luis";
  const edad: number = 30;
  const estaActivo: boolean = false;

  const poderes: string[] = [];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {nombre}, {edad}, {estaActivo ? "activo" : "no activo"}
      <br />
      {poderes.join(", ")}
    </>
  );
};
