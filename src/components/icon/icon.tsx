import { Icon } from "@mui/material";

export default function SvgIcon(props: any) {
  const { icon, width, height } = props;
  return (
    <div>
      <Icon>
        <img alt="circular icon" src={icon} width={width} height={height} />
      </Icon>
    </div>
  );
}
