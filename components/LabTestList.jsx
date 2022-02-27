import React from "react";
import Card from "./utils/Card";
import { Wrapper } from "./utils/Wrapper";
export default function LabTestList() {
  return (
    <Wrapper styles="mt-10 ">
      <div className="flex flex-wrap w-2/3  ">
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
      </div>
      <div className="flex flex-wrap w-2/3  ">
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
        <Card styles=" w-1/5 h-48 " >Hello world</Card>
      </div>
    </Wrapper>
  );
}
