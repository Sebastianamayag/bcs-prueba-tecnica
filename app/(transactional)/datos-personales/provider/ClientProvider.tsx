import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormValues } from "./client.schema";
import { DEFAULT_VALUES } from "./client.data";
import { ClientProviderProps } from "./client.type";

export function FormContextProvider({ children, onSubmit }: ClientProviderProps) {
  const methods = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        ...DEFAULT_VALUES
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}