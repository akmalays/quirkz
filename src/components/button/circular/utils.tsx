export function getSizeValue(size: string) {
  switch (size) {
    case "small":
      return "34px";
    case "medium":
      return "60px";
    case "large":
      return "68px";
    case "custom":
      return "68px";
  }
}

export function getIconSizeValue(iconSize: string) {
  switch (iconSize) {
    case "small":
      return "18px";
    case "medium":
      return "26px";
    case "large":
      return "56px";
    case "custom":
      return "30px";
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
    case "custom":
      return 1;
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
    case "custom":
      return 0.5;
  }
}
