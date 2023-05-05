import React from "react";

export const AppButton = ({
  text,
  icon,
  className,
  buttonTextClassName,
  onClick
}: {
  text: string;
  icon?: JSX.Element;
  className?: string;
  buttonTextClassName?: string;
  onClick?: ()=>void;
}) => {
  return (
    <div className={'flex flex-row items-center rounded-full px-6 py-1 whitespace-nowrap cursor-pointer md:px-3 '+(className?className:"")}
    onClick={onClick}>
      {icon && icon}
      <p className={'ml-1 text-xs '+(buttonTextClassName?buttonTextClassName:"")}>{text}</p>
    </div>
  );
};
