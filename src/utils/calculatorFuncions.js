const predefinedAreas = {
  doorArea: (0.80 * 1.9),
  windowArea: (2 * 1.2),
};

// const wallPaintOptions = [0.5, 2.5, 3.6, 18];

export const calculateWallArea = ({
  width, height, doors, windows,
}) => {
  const windowsArea = windows > 0 ? predefinedAreas.windowArea * windows : 0;
  const doorsArea = doors > 0 ? predefinedAreas.doorArea * doors : 0;

  const wallArea = width * height;

  const areaToBePainted = wallArea - windowsArea - doorsArea;

  console.log(areaToBePainted);

  return areaToBePainted;
};

export const calculateTotalArea = (wallsData) => {
  const walls = Object.values(wallsData);
  const totalAreaToBePainted = walls.reduce((acc, wall) => calculateWallArea(wall) + acc, 0);
  console.log(totalAreaToBePainted.toFixed(2));
};

export const checkWallHeight = () => {};
