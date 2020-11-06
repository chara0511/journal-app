import { HIDE_MODAL, HANDLE_SIDEBAR } from "../types";

export const handleSidebar = () => ({
  type: HANDLE_SIDEBAR,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
