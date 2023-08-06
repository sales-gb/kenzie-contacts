"use client";

import { ContactPage, Container } from "@/components";
import { withLayout } from "@/hoc/withLayout";
import { useLayoutStore } from "@/store";
import { useEffect, useState } from "react";
import * as S from "./styles";
import Lottie from "react-lottie";
import animationData from "@/assets/default-images/contact.json";

function ContactDetailsPage() {
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
        <ContactPage />
        {isDesk ? (
          <div className="animationDiv">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        ) : null}
      </S.StyledMainContactSection>
    </Container>
  );
}

export default withLayout(ContactDetailsPage);
