import { ComponentType } from "react";

import { LayoutPrimary } from "@/components";

export const withLayout = <T extends {}>(
  Component: ComponentType<T>,
  LayoutComponent?: ComponentType<any>
) => {
  const WithLayout = (props: T) => {
    const Layout = LayoutComponent || LayoutPrimary;

    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

  WithLayout.hasLayout = true;

  return WithLayout;
};
