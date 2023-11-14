import React from "react";
import { cn } from "../libs/utils/cn";

type Props = {
  children: React.ReactNode | string;
  variant?: keyof typeof TypographyVariant;
  className?: string;
};

const TypographyVariant = {
  headingText: `text-3xl font-bold`,
};

const Typography: React.FC<Props> = ({
  children,
  className,
  variant = "headingText",
  ...rest
}) => {
  return (
    <p {...rest} className={cn(`${TypographyVariant[variant]}`, className)}>
      {children}
    </p>
  );
};

export default Typography;
