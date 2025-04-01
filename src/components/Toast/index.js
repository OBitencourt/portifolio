import Image from "next/image";
import { Content } from "./style";

const Toast = ({message, isActive, image}) => {
    
  return (
    <>

        
      <Content isActive={isActive}>
        <Image
          src={`/images/${image}.svg`}
          alt="toasty-icon"
          width={50}
          height={50}
          style={{marginRight: '24px'}}
        />
        {message}
      </Content>
    </>
  );
};

export default Toast;
