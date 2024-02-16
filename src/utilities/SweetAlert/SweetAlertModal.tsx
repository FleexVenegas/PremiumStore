import Swal from "sweetalert2";
// import 'sweetalert2/dist/sweetalert2.min.css';

import "./SweetAlertModal.scss"

export const Successfully = (title: string) => {
  return Swal.fire({
    position: "top-end",
    icon: "success",
    title: title,
    showConfirmButton: false,
    customClass:{
      title: "swal-title",
      icon: "swal-icon200"
    },
    backdrop: `rgba(0,0,0,0.5)`,
    timer: 2500,
  });
};

export const Warning = (title: string) => {
  return Swal.fire({
    position: "top-end",
    icon: "warning",
    title: title,
    showConfirmButton: false,
    customClass:{
      title: "swal-title",
      icon: "swal-icon200"
    },
    backdrop: `rgba(0,0,0,0.5)`,
    timer: 2500,
  });
};

export const WarningWithText = (text: string) => {
  return Swal.fire({
    position: "top-end",
    icon: "info",
    text: text,
    showConfirmButton: true,
    customClass:{
      htmlContainer: "swal-text",
      icon: "swal-iconinfo",
      confirmButton: "swal-buttoInfo"
    },
    backdrop: `rgba(0,0,0,0.5)`,
  });
};
