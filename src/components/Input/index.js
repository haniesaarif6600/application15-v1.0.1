import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcOutlineBlack9003f: "bg-cyan_900_99 shadow-bs1",
  OutlineBlack900: "bg-white_A700 border border-black_900 border-solid",
  OutlineGray500: "bg-white_A700 border border-gray_500 border-solid",
  OutlineGray801: "bg-white_A700 border border-gray_801 border-solid",
  OutlineLightblue800:
    "bg-white_A700 border border-light_blue_800 border-solid",
  OutlineBluegray101: "bg-white_A700 border border-bluegray_101 border-solid",
  OutlineGray502: "bg-white_A700 outline outline-[0.5px] outline-gray_502",
  OutlineGray700: "bg-white_A700 border border-gray_700 border-solid",
};
const shapes = { RoundedBorder3: "rounded-radius3" };
const sizes = {
  smSrc: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
  sm: "lg:pb-[5px] xl:pb-[7px] pb-[8px] 3xl:pb-[9px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[8px] lg:px-[5px] xl:px-[7px] px-[8px] 3xl:px-[9px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  lg: "lg:p-[24px] xl:p-[31px] p-[35px] 3xl:p-[42px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder3"]),
  variant: PropTypes.oneOf([
    "srcOutlineBlack9003f",
    "OutlineBlack900",
    "OutlineGray500",
    "OutlineGray801",
    "OutlineLightblue800",
    "OutlineBluegray101",
    "OutlineGray502",
    "OutlineGray700",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md", "lg"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineBlack900",
  size: "",
};

export { Input };
