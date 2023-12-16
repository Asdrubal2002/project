import { Fragment } from "react";
import { connect } from "react-redux";
import { ContenedorInfoAlert, ContenedorInfoMSG, Mensaje } from "./Styles/Alert";

function Alerta({ alert }) {
  
    const displayAlert = () => {
      if (alert !== null) {
        return (
          <div
            className="rounded-md p-4 mx-5 mt-3 shadow-xl"
            style={{ "background-color": `${alert.alertType}` }}
          >
  
           <ContenedorInfoAlert>
           <ContenedorInfoMSG>
                <Mensaje>{alert.msg}</Mensaje>
              </ContenedorInfoMSG>
           </ContenedorInfoAlert>
               
          </div>
        );
      } else {
        return <Fragment></Fragment>;
      }
    };
  
    return <Fragment>{displayAlert()}</Fragment>;
  }
  
  const mapStateToProps = (state) => ({
    alert: state.Alert.alert,
  });
  
  export default connect(mapStateToProps)(Alerta);
  