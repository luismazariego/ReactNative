interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}

interface Direccion {
  pais: string;
  casaNo: number;
}

export const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Luis Mazariego",
    edad: 30,
    direccion: {
      pais: "Rusia",
      casaNo: 60,
    },
  };
  return (
    <>
      <h3>Objetos Literales</h3>
      <pre>{JSON.stringify(persona, null, ' ')}</pre>
    </>
  );
};
