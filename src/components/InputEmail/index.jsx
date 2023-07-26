import React, { useState } from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name = "teri",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      value = "",
      ...restProps
    },
    ref
  ) => {
    const [emailValue, setEmailValue] = useState("");

    const handleChange = (e) => {
      setEmailValue(e.target.value);
      // if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName}


              `}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            onChange={handleChange}
            placeholder={placeholder}
            value={emailValue}
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
  value: PropTypes.string,
};

export { Input };
