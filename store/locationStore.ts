import { create } from 'zustand';

type Coordinates = {
  latitude: number;
  longitude: number;
};
interface LocationState {
  pickupLocation: string;
  dropLocation: string;
  pickupCoordinates: Coordinates;
  dropCoordinates: Coordinates;
  setPickupLocation: (location: string, coordinates: Coordinates) => void;
  setDropLocation: (location: string, coordinates: Coordinates) => void;
  clearLocations: () => void;
}

export const useLocationStore = create<LocationState>((set) => ({
  pickupLocation: '',
  dropLocation: '',
  pickupCoordinates: {
    latitude: 0,
    longitude: 0,
  },
  dropCoordinates: {
    latitude: 0,
    longitude: 0,
  },
  setPickupLocation: (location, coordinates) =>
    set({ pickupLocation: location, pickupCoordinates: coordinates }),
  setDropLocation: (location, coordinates) =>
    set({ dropLocation: location, dropCoordinates: coordinates }),
  clearLocations: () =>
    set({
      pickupLocation: '',
      dropLocation: '',
      pickupCoordinates: {
        latitude: 0,
        longitude: 0,
      },
      dropCoordinates: {
        latitude: 0,
        longitude: 0,
      },
    }),
}));
