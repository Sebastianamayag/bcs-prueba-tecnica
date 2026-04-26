import { ReactNode } from "react";
import { FormValues } from "./client.schema";

export type ClientProviderProps = {
  children: ReactNode;
  onSubmit: (data: FormValues) => void;
};
