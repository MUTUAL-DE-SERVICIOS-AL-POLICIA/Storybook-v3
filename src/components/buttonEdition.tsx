import { Button, Tooltip } from "@heroui/react";

import { EditIcon, CancelIcon } from "@/components";

interface Props {
  onPress?: () => void;
  isEdit?: boolean;
}

export const ButtonEdition = ({
  onPress = () => {},
  isEdit = false,
}: Props) => {
  return (
    <Tooltip delay={0}>
      <Button variant={isEdit ? "danger" : "secondary"} onPress={onPress}>
        {isEdit ? "CANCELAR" : "EDITAR"}
        {isEdit ? <CancelIcon /> : <EditIcon />}
      </Button>
      <Tooltip.Content showArrow placement="right">
        <Tooltip.Arrow />
        <p>{isEdit ? "desactivar modo edición" : "activar modo edición"}</p>
      </Tooltip.Content>
    </Tooltip>
  );
};
