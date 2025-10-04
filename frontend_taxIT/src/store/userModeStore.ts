import { create } from 'zustand';

type UserMode = 'individual' | 'business';

interface UserModeState {
  userMode: UserMode;
  switchToIndividual: () => void;
  switchToBusiness: () => void;
}

export const useUserModeStore = create<UserModeState>((set) => ({
  userMode: 'individual',
  switchToIndividual: () => set({ userMode: 'individual' }),
  switchToBusiness: () => set({ userMode: 'business' }),
}));