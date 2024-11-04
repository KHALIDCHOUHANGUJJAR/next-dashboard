import React from "react";
import SignIn from "./(pages)/auth/sign-in/page";
import SingUp from "./(pages)/auth/sign-up/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Mainpage = () => {
  return (
    <div>
      <div className="flex items-center mr-auto justify-center flex-col">
        <Tabs defaultValue="SignIn" className="w-[400px]  rounded-xl">
          <TabsList className="w-56">
            <TabsTrigger className="w-44 text-2xl" value="SignIn">
              SigIn
            </TabsTrigger>
            <TabsTrigger value="SignUp" className="w-44 text-2xl  ">
              SignUp
            </TabsTrigger>
          </TabsList>
          <TabsContent value="SignIn">
            <SignIn />
          </TabsContent>
          <TabsContent value="SignUp">
            {" "}
            <SingUp />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Mainpage;
