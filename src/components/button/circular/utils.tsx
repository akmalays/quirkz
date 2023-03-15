export function getSizeValue(size: string) {
  switch (size) {
    case "small":
      return "34px";
    case "medium":
      return "60px";
    case "large":
      return "68px";
    default:
      return "34px";
  }
}

export function getIconSizeValue(size: string) {
  switch (size) {
    case "small":
      return "18px";
    case "medium":
      return "26px";
    case "large":
      return "56px";
    default:
      return "46px";
  }
}

export function getIconPadRight(size: string) {
  switch (size) {
    case "small":
      return 0;
    case "medium":
      return 0.5;
    case "large":
      return 4;
    default:
      return 4;
  }
}

export function getIconPadBottom(size: string) {
  switch (size) {
    case "small":
      return 1;
    case "medium":
      return 0.2;
    case "large":
      return 3;
    default:
      return 5;
  }
}
