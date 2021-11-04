const predefinedAreas = {
  doorArea: (0.80 * 1.9),
  windowArea: (2 * 1.2),
};

const paintCanOptions = [0.5, 2.5, 3.6, 18];

export const calculateWallArea = (width, height) => width * height;
export const calculateDoorsArea = (doors) => (doors > 0 ? predefinedAreas.doorArea * doors : 0);
export const calculateWindowsArea = (windows) => (windows > 0
  ? predefinedAreas.windowArea * windows : 0);

const calculateWallAreaToBePainted = ({
  width, height, doors, windows,
}) => {
  const windowsArea = calculateWindowsArea(windows);
  const doorsArea = calculateDoorsArea(doors);
  const wallArea = calculateWallArea(width, height);

  const areaToBePainted = wallArea - windowsArea - doorsArea;

  return areaToBePainted;
};

const getSuggestedPaintCans = (area) => {
  let paintLiters = area / 5;
  const suggestedPaintCans = {};

  do {
    const suggestedCan = paintCanOptions
      .sort((a, b) => b - a)
      .find((can) => paintLiters >= can);

    if (!suggestedCan && paintLiters > 0) {
      if (suggestedPaintCans['0.5']) {
        suggestedPaintCans['0.5'] += 1;
      } else {
        suggestedPaintCans['0.5'] = 1;
      }
      paintLiters -= 0.5;
    } else if (suggestedPaintCans[suggestedCan]) {
      suggestedPaintCans[suggestedCan] += 1;
      paintLiters -= suggestedCan;
    } else {
      suggestedPaintCans[suggestedCan] = 1;
      paintLiters -= suggestedCan;
    }
  } while (paintLiters > 0);

  return suggestedPaintCans;
};

export default (wallsData) => {
  const walls = Object.values(wallsData);

  const totalAreaToBePainted = walls
    .reduce((acc, wall) => calculateWallAreaToBePainted(wall) + acc, 0);

  const suggestedPaintCans = getSuggestedPaintCans(totalAreaToBePainted);

  return [totalAreaToBePainted.toFixed(2), suggestedPaintCans];
};
