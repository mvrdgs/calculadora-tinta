const predefinedAreas = {
  doorArea: (0.80 * 1.9),
  windowArea: (2 * 1.2),
};

// const wallPaintOptions = [0.5, 2.5, 3.6, 18];

export const calculateWallArea = ({
  width, height, doors, windows,
}) => {
  const windowsArea = windows > 0 ? predefinedAreas.windowArea * windows : 1;
  const doorsArea = doors > 0 ? predefinedAreas.doorArea * doors : 1;

  const wallArea = width * height;

  const areaToBePainted = wallArea - windowsArea - doorsArea;

  return areaToBePainted;
};

export const checkWallHeight = () => {};
