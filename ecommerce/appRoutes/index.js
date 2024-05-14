import { StackPublic } from "./stackPublic";
import { StackPrivate } from "./stackPrivate";
import { Context } from "../context/securityContext";
import { useContext } from "react";

export const Routes = () => {
  const { logged } = useContext(Context);
 
  return (
    <>
      {logged ? <StackPrivate/>: <StackPublic/>}
    
    </>
  );
};
