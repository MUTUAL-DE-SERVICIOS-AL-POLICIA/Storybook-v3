import { Button, Spinner, Tooltip } from "@heroui/react";

import { RegisterIcon } from "@/components";

export interface Props {
  onPress?: () => void;
  isPending?: boolean;
  isDisabled?: boolean;
}

export const ButtonRegister = ({
  onPress = () => {},
  isPending = false,
  isDisabled = false,
}: Props) => {
  return (
    <Tooltip delay={0}>
      <Button
        isDisabled={isDisabled}
        isPending={isPending}
        variant="primary"
        onPress={onPress}
      >
        REGISTRAR
        {isPending ? <Spinner color="current" size="sm" /> : <RegisterIcon />}
      </Button>
      <Tooltip.Content showArrow placement="right">
        <Tooltip.Arrow />
        <p>Registrar</p>
      </Tooltip.Content>
    </Tooltip>
  );
};
