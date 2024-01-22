//@ts-nocheck
import { BallTriangle } from "react-loader-spinner";

interface IProps {
  width?: number;
}
function Loader({ width }: IProps) {
  return (
    <div className="flex items-center justify-center flex-row gap-2 p-5">
      <BallTriangle
        height={width ? String(width) : "100"}
        width={width ? String(width) : "100"}
        radius={5}
        color="#FFF"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
