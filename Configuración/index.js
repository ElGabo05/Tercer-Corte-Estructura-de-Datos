const configuracion = {
    tema: "oscuro",
    idioma: "español"
  };

  Object.freeze(configuracion);

  configuracion.tema = "claro"; 
  configuracion.nuevaPropiedad = "valor";
    
  console.log(configuracion);