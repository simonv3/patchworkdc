type FullWidthImageProps = {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
  height?: string | number;
};

const FullWidthImage: React.FC<FullWidthImageProps> = ({
  src,
  alt,
  height,
  containerClassName = "",
  imageClassName = "",
}) => {
  return (
    <div
      className={`py-6 w-[100vw] ml-[calc(-50vw+50%)] overflow-hidden ${containerClassName}`}
      style={{
        backgroundImage: `url(${src})`,
        height,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "#464646",
      }}
    ></div>
  );
};

export default FullWidthImage;
