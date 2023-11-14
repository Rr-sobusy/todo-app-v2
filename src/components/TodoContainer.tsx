import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const TodoContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default TodoContainer;
