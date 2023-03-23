import React from "react";

const variantClasses = {
  h1: "font-semibold sm:text-[26px] md:text-[28px] text-[30px]",
  h2: "font-semibold sm:text-[20px] md:text-[22px] text-[24px]",
  h3: "font-semibold text-[18px]",
  h4: "font-normal text-[16px]",
  h5: "text-[14px]",
  h6: "text-[12px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
