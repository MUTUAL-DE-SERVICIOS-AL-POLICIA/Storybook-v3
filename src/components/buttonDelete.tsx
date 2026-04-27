import { GarbageIcon } from "@/components";
import { Button, Spinner, Tooltip } from "@heroui/react";

interface Props {
  onPress?: () => void;
  isDisabled?: boolean;
  isPending?: boolean;
}

export const ButtonDelete = ({ onPress = () => {}, isDisabled = false, isPending = false }: Props) => {
  return (
    <Tooltip delay={0}>
      <Button
        isIconOnly
        size="sm"
        variant="danger-soft"
        isDisabled={isDisabled}
        isPending={isPending}
        onPress={onPress}
      >
      {isPending ? <Spinner color="current" size="sm" /> : <GarbageIcon />}
      </Button>
      <Tooltip.Content showArrow placement="right">
        <Tooltip.Arrow />
        <p>Eliminar</p>
      </Tooltip.Content>
    </Tooltip>
  );
};