import { create } from "zustand";
import { campaignsAPI } from "../api/campaignAPI";

const useCampaignsStore = create((set) => ({
  campaigns: [],
  loading: false,
  error: null,
  
  fetchCampaigns: async () => {
    set({ loading: true, error: null });
    try {
      const res = await campaignsAPI.getAll();
      set({ campaigns: res?.data?.data || [], loading: false });
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      set({ error: error.message, loading: false });
    }
  },
  
  getOngoingCampaigns: () => {
    const state = useCampaignsStore.getState();
    return state.campaigns.filter((item) => item.campain_status === "On-Going");
  },

   getUpcomingCampaigns: () => {
    const state = useCampaignsStore.getState();
    return state.campaigns.filter((item) => item.campain_status === "Upcoming");
  },

  
  getCampaignById: (id) => {
    const state = useCampaignsStore.getState();
    return state.campaigns.find((campaign) => campaign.id === id);
  },
}));

export default useCampaignsStore;

