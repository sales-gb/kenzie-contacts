"use client";

import { Container, UserInfoPage } from "@/components";
import { withLayout } from "@/hoc/withLayout";
import { useEffect } from "react";
import animationData from "@/assets/default-images/computer.json";
import { useLayoutStore } from "@/store";
import Lottie from "react-lottie";
import * as S from "./styles";

function UserPage() {
  const { isDesk, setDesk } = useLayoutStore();

  useEffect(() => {
    const handleResize = () => {
      setDesk(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [setDesk]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <S.StyledMainContactSection>
        <UserInfoPage />
        {isDesk ? (
          <div className="animationDiv">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        ) : null}
      </S.StyledMainContactSection>
    </Container>
  );
}
export default withLayout(UserPage);
