import type { Metadata } from "next";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Iniciar sesión — LedgerPilot",
  description: "Accede a tu cuenta de LedgerPilot.",
};

export default function LoginPage() {
  return <LoginForm />;
}
