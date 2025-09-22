import type { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders(props: AppProvidersProps) {
  const { children } = props;

  return <BrowserRouter>{children}</BrowserRouter>;
}
