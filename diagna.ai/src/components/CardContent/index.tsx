const CardContent = ({
  label,
  info,
}: {
  label: string;
  info: string | number;
}) => {
  return (
    <div className="ml-3 mr-3 flex items-center justify-between">
      <p className="font-[Lato] font-normal text-sm text-black">{label}: </p>
      <p className="font-sans font-bold text-sm">{info}</p>
    </div>
  );
};

export default CardContent;
