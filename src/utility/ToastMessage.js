import { toast } from "react-toastify";

export const toastMsg = (type, msg) => {
  if (type === "success") {
    toast.success(msg);
  } else if (type === "warning") {
    toast.warning(msg);
  } else if (type === "error") {
    toast.error(msg);
  } else {
    toast.info(msg);
  }
};
