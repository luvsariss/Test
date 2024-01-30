function obtenerConfiguracion() {

  var archivoId = '1EKAH16fxw_xpNr2KByi187kdQ1lucxdp';

  var archivo = DriveApp.getFileById(archivoId);
  var contenido = archivo.getBlob().getDataAsString();
  
  var configuracion = JSON.parse(contenido);
  
  return configuracion;
}

function procesarRespuestas() {

  var configuracion = obtenerConfiguracion();
  
  var opencageApiKey = configuracion.opencageApiKey;

}
