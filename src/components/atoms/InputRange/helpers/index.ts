interface TrackPosition {
  min?: number;
  max?: number;
  value: number;
}

export const calculateTrackPosition = ({ min = 0, max = 100, value }: TrackPosition) => {
  if (max < min) {
    return 0;
  }

  if (value > max) {
    return 1;
  }

  if (value < min) {
    return 0;
  }

  if (value === min && value === max) {
    return 0;
  }

  return (value - min) / (max - min);
};
