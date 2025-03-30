const usuario = {
    nombre: "Isaac",
    email: "galvizisaac@example.com",
    saludar: function() {
      console.log(`¡Hola, ${this.nombre}! Bienvenido.`);
    }
  };
  
  usuario.saludar();