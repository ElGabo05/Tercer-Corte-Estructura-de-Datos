const persona = {
    nombre: "Carlos",
    edad: 26,
    ciudad: "Buenos Aires"
  };
  
  for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
  }