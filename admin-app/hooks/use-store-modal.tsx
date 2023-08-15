"use client"
import { create } from 'zustand';

interface UseStoreModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const UseStoreModal = create<UseStoreModal>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))
