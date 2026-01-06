import { create } from "zustand";
import { servicesAPI } from "../api/serviceAPI";

const useCausesStore = create((set) => ({
  causes: [],
  loading: false,
  error: null,
  
  fetchCauses: async () => {
    set({ loading: true, error: null });
    try {
      const res = await servicesAPI.getAll();
      set({ causes: res.data.data || [], loading: false });
    } catch (error) {
      console.error("Error fetching causes:", error);
      set({ error: error.message, loading: false });
    }
  },
  
  getCauseBySlug: (slug) => {
    const state = useCausesStore.getState();
    return state.causes.find((cause) => cause.slug === slug);
  },
  
  getStoryBySlug: (slug) => {
    const state = useCausesStore.getState();
    const cause = state.causes.find((cause) => cause.slug === slug);
    // console.log('aaa cause zus', cause);
    // console.log('aaa story zus', cause.details?.find((detail) => detail.title === "Stories"));

    if (!cause) return null;
    return cause.details?.find((detail) => detail.title === "Stories") || null;
  },
  
  getStoryByServiceTitle: (serviceTitle = "Education") => {
    const state = useCausesStore.getState();
    const cause = state.causes.find((cause) => cause.title === serviceTitle);
    if (!cause) return null;
    return cause.details?.find((detail) => detail.title === "Stories") || null;
  },
}));

export default useCausesStore;

