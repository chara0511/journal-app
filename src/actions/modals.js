import { HIDE_MODAL, HANDLE_SIDEBAR, SHOW_PROFILE_MODAL } from "../types";

export const handleSidebar = () => ({
  type: HANDLE_SIDEBAR,
});

export const showProfileModal = () => ({
  type: SHOW_PROFILE_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
