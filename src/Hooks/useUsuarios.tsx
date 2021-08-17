import { useEffect, useRef, useState } from "react";
import { ReqResListado, Usuario } from "../interfaces/reqres";
import { reqResApi } from "../api/reqres";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);
  useEffect(() => {
    //Llamado al API
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    // reqResApi
    //   .get<ReqResListado>("/users")
    //   .then((res) => {
    //     setUsuarios(res.data.data);
    //   })
    //   .catch(console.log);
    const res = await reqResApi.get<ReqResListado>("/users", {
      params: {
        page: paginaRef.current,
      },
    });
    if (res.data.data.length > 0) {
      setUsuarios(res.data.data);
      //paginaRef.current++;
    } else {
      paginaRef.current--;
      alert("No hay mas registros");
    }
    setUsuarios(res.data.data);
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();    
  };

  const paginaAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
    }
    cargarUsuarios();
  };

  return {
    usuarios,
    paginaSiguiente,
    paginaAnterior,
  };
};
