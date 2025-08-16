import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { SignInForm } from "./components/sign-in-form";
import { SignUpForm } from "./components/sign-up-form";

const Authentication = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6 p-5">
      <Tabs defaultValue="sign-in">
        <TabsList>
          <TabsTrigger value="sign-in">Entrar</TabsTrigger>
          <TabsTrigger value="sign-up">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <Card>
            <CardHeader>
              <CardTitle>Entrar</CardTitle>
              <CardDescription>Faça login para continuar</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <SignInForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="sign-up">
          <Card>
            <CardHeader>
              <CardTitle>Criar conta</CardTitle>
              <CardDescription>Crie uma conta para continuar</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <SignUpForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Authentication;
