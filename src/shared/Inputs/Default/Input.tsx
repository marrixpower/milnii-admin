import { useState } from "react";
import { Label, StyledInput, ShowPasswordButton, ErrorMessage } from "./styled";
import { TInputProps } from "./types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";

export const Default = React.forwardRef<HTMLInputElement, TInputProps>(
  (
    {
      width = "335px",
      height = "44px",
      $error,
      pattern,
      type,
      label,
      initial,
      hidepassword,
      disabled = false,
      $background = "transparent",
      $padding = "10px 12px",
      $bottomError = "-16px",
      ...props
    },
    ref
  ) => {
    const [visiblePass, setVisiblePass] = useState(false);
    const typeAudit = type === "password" && visiblePass ? "text" : type;
    const isShowPassword = type === "password" && !hidepassword;

    return (
      <>
        <Label width={width}>
          {label && <span>{label}</span>}
          <StyledInput
            ref={ref}
            width={width}
            type={typeAudit}
            pattern={pattern}
            defaultValue={initial}
            disabled={disabled}
            height={height}
            fill={$background}
            $error={$error}
            $padding={$padding}
            {...props}
          />

          {isShowPassword && (
            <ShowPasswordButton
              type="button"
              onClick={() => setVisiblePass((prev) => !prev)}
            >
              {(!visiblePass && <AiOutlineEye />) || <AiOutlineEyeInvisible />}
            </ShowPasswordButton>
          )}
          {$error && (
            <ErrorMessage $bottomError={$bottomError}>{$error}</ErrorMessage>
          )}
        </Label>
      </>
    );
  }
);
