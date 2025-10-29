interface IconProps {
  Icon: React.ElementType;
  className?: string;
}

export const IconRenderer = ({ Icon, className }: IconProps) => {
  return <Icon className={className} />;
};
