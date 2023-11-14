import React from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

type Props = {
  children?: React.ReactNode;
  className?: string;
};

const TodoContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <section className="h-[500px] bg-blue-200">
      <SimpleBar style={{maxHeight : '350px'}}>
        {children}
      </SimpleBar>
    </section>
  );
};

export default TodoContainer;
