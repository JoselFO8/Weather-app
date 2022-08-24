module.exports = {
    entry: './src/App.js', // el punto de arranque de nuestro programa
    output: {
      path: __dirname + '/src', // el path absoluto para el directorio donde queremos que el output sea colocado
      filename: 'bundleJLF.js' // el nombre del archivo que va a contener nuestro output - podemos nombrarlo como queramos pero bundle.js es lo típico
    }
  }