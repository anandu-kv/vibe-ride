import { create } from 'zustand'

interface LocationState {
  pickupLocation: string
  dropLocation: string
  pickupCoordinates: string
  dropCoordinates: string
  setPickupLocation: (location: string, coordinates: string) => void
  setDropLocation: (location: string, coordinates: string) => void
  clearLocations: () => void
}

export const useLocationStore = create<LocationState>((set) => ({
  pickupLocation: '',
  dropLocation: '',
  pickupCoordinates: '',
  dropCoordinates: '',
  setPickupLocation: (location, coordinates) => 
    set({ pickupLocation: location, pickupCoordinates: coordinates }),
  setDropLocation: (location, coordinates) => 
    set({ dropLocation: location, dropCoordinates: coordinates }),
  clearLocations: () => 
    set({ 
      pickupLocation: '', 
      dropLocation: '', 
      pickupCoordinates: '', 
      dropCoordinates: '' 
    }),
}))
