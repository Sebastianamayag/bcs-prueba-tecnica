import { Container } from "./components/Container";


export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      {children}
    </Container>
  );
}
