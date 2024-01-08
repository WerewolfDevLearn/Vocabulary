import { useState } from "react";
import { AuthPagePageStyles } from "./AuthPage.styled";

import Form from "components/Forms/AuthForm";
import SwitchButton from "components/SwitchButton";

export default function AuthPage() {
  const [formName, setFormName] = useState<string>("Register");

  const switchName = (text: string) => setFormName(text);
  return (
    <AuthPagePageStyles>
      <Form formName={formName} />
      <SwitchButton text={formName} onClick={switchName} />
    </AuthPagePageStyles>
  );
}
