import React from "react";

interface ButtonPanelProps {
  setSelectedAction: (action: string) => void;
}

const ButtonPanel: React.FC<ButtonPanelProps> = ({ setSelectedAction }) => {
  return (
    <div className="button-panel">
      <button onClick={() => setSelectedAction("getPackage")}>
        Get Package
      </button>
      <button onClick={() => setSelectedAction("uploadPackage")}>
        Upload Package
      </button>
      <button onClick={() => setSelectedAction("updatePackage")}>
        Update Package
      </button>
      <button onClick={() => setSelectedAction("deletePackage")}>
        Delete Package
      </button>
      <button onClick={() => setSelectedAction("ratePackage")}>
        Rate Package default is cloudinary rn
      </button>
      <button onClick={() => setSelectedAction("resetRegistry")}>
        Reset Registry
      </button>
    </div>
  );
};

export default ButtonPanel;
