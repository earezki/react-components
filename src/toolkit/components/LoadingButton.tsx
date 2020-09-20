import React, { useMemo, useState } from "react";
import { Button, ButtonProps, Spinner, Tooltip } from "reactstrap";
import { useStateReducer } from "../state-reducer";

export enum IconDirection {
  RIGHT,
  LEFT,
}

export interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
  icon?: string;
  iconDirection?: IconDirection;
  hideLabel?: boolean;
}

export interface State {
  id: string;
  tooltipOpen: boolean;
}

export default function LoadingButton({
  loading,
  icon,
  iconDirection,
  hideLabel,
  label,
  disabled,
  ...btnProps
}: LoadingButtonProps): JSX.Element {

  const randomId = useMemo(() => `${Math.floor(Math.random() * 100)}-${Date.now()}`, []);

  const [state, setState] = useStateReducer<State>({
    id: `loading-btn-${randomId}`,
    tooltipOpen: false,
  });

  const { id, tooltipOpen } = state;

  const toggle = () => setState({ tooltipOpen: !tooltipOpen });

  const shouldPlaceIconToLeft = () => iconDirection === undefined || iconDirection === IconDirection.LEFT;
  const shouldPlaceIconToRight = () => !shouldPlaceIconToLeft();
  const shouldHideLabel = () => hideLabel !== undefined && hideLabel;

  return (
    <Button
      id={id}
      {...btnProps}
      disabled={loading || !!disabled}
    >
      {shouldPlaceIconToLeft() && <Icon loading={loading} icon={icon} />}
      {shouldHideLabel() ?
        <>
          <Tooltip placement="top" isOpen={tooltipOpen} target={id} toggle={toggle}>
            {label}
          </Tooltip>
        </> :
        label && <span aria-hidden="true"> {label} </span>
      }
      {shouldPlaceIconToRight() && <Icon loading={loading} icon={icon} />}
    </Button>
  );
}

interface IconProps {
  loading?: boolean;
  icon?: string;
}

function Icon({ icon, loading }: IconProps): JSX.Element {
  return <>{
    loading ? (
      <Spinner size="sm" >
      </Spinner>
    ) : (
        icon && (
          <span className={icon} aria-hidden="true"></span>
        )
      )
  }</>;
}