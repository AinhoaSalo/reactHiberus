import React from "react";
import {
  NotificationManager,
  NotificationContainer,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import "./Notifications.css"

function Notificaciones() {
  const lanzarNotificacion = (tipo) => {
    return () => {
      // eslint-disable-next-line default-case
      switch (tipo) {
        case "info":
          NotificationManager.info(
            "Solo queríamos darte las gracias por pasarte por aquí",
            "¡Hola!",
            2000, // timeout para que desaparezca
            () => {
              alert("Ejecutandose funcion callback \n Informacion ampliada");
            },
            true
          ); // prioridad
          break;
        
      }
    };
  };

  return (
    <div className="btn_notification_container">
      <button className= "btn_notification" onClick={lanzarNotificacion("info")}>¡Pincha aquí, por favor! </button>
      

      <div>
        <NotificationContainer />
      </div>
    </div>
  );
}

export default Notificaciones;
