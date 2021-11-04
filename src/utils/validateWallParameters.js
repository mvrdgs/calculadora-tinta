import { calculateWallArea, calculateDoorsArea, calculateWindowsArea } from './calculateArea';

const MIN_VALUE_ERROR = 'não pode ser inferior a 1 metro';
const MAX_VALUE_ERROR = 'não pode ser superior a 15 metros';
const MINIMUN_WALL_AREA_ERROR = 'Portas e janelas podem ocupar no máximo 50% da área da parede';
const MINIMUN_HEIGHT_WITH_DOOR = 'A parede deve ser no mínimo 30 centímetros mais alta que a porta';
const MINIMUN_WIDTH_WITH_DOOR = 'A parede deve ser no mínimo 30 centímetros mais larga que a janela';

const validateWidth = (width, windows) => {
  if (width < 1) return `Largura ${MIN_VALUE_ERROR}`;
  if (width > 15) return `Largura ${MAX_VALUE_ERROR}`;
  if (windows > 0 && width < 2.3) return MINIMUN_WIDTH_WITH_DOOR;
  return null;
};

const validateHeight = (height, doors) => {
  if (height < 1) return `Altura ${MIN_VALUE_ERROR}`;
  if (height > 15) return `Altura ${MAX_VALUE_ERROR}`;
  if (doors > 0 && height < 1.1) return MINIMUN_HEIGHT_WITH_DOOR;
  return null;
};

const validateTotalArea = (width, height, doors, windows) => {
  const minimunWallArea = calculateWallArea(width, height) / 2;
  const doorsArea = calculateDoorsArea(doors);
  const windowsArea = calculateWindowsArea(windows);

  if (minimunWallArea - doorsArea - windowsArea < 0) return MINIMUN_WALL_AREA_ERROR;
  return null;
};

export default ({
  width, height, doors, windows,
}) => (
  validateWidth(width, windows)
  || validateHeight(height, doors)
  || validateTotalArea(width, height, doors, windows)
);
