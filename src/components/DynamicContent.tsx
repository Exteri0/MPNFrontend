import React from "react";
import GetPackage from "./GetPackage";
import UploadPackage from "./UploadPackage";
import EmptyContent from "./EmptyContent";
import InitialRate from "./InitialRate";
import Reset from "./Reset";

interface DynamicContentProps {
  selectedAction: string;
}

const DynamicContent: React.FC<DynamicContentProps> = ({ selectedAction }) => {
  switch (selectedAction) {
    case "getPackage":
      return <GetPackage />;
    case "uploadPackage":
      return <UploadPackage />;
    case "updatePackage":
    case "deletePackage":
    case "ratePackage":
      return <InitialRate />;
    case "resetRegistry":
      return <Reset />;
    default:
      return <EmptyContent />;
  }
};

export default DynamicContent;
