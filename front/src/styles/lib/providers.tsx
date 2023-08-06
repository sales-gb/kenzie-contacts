"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "styled-components";

import { ErrorFallback } from "@/components";
import { useSsr } from "@/hooks";
import { GlobalStyle } from "@/styles/global";

import { theme } from "../_variants";

export function Providers({ children }: PropsWithChildren) {
  const { isBrowser } = useSsr();
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {isBrowser && (
        <Toaster
          containerStyle={{
            zIndex: 99999,
          }}
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: "Poppins",
              borderRadius: "30px",
              color: "#58595b",
              background: "#f1f7ff",
              fontWeight: 500,
            },
            error: {
              style: {
                background: "#ff0055",
                color: "#fff",
              },
            },
          }}
        />
      )}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => router.replace("/dashboard")}
      >
        {children}
      </ErrorBoundary>
    </ThemeProvider>
  );
}
