import React, { useState } from "react";
import GeneralAssumption from "./GeneralAssumption/GeneralAssumption";
import AssumptionIncome from "./AssumptionIncome/AssumptionIncome";
import FormWizard from "react-form-wizard-component";

const FeasibiltyReport = () => {
  // state changing
  const [wizardState, setWizardState] = useState(1);
  return (
    <div className="p-5">
      <>
        <div className="w-full bg-white rounded-lg">
          <div style={{ width: "100%", overflowX: "auto" }}>
            <div
              className="flex mb-4 justify-center bg-none w-full p-10 m-5"
              style={{
                borderRadius: "16px",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <FormWizard
                shape="circle"
                color="#4A4BE4"
                // onComplete={handleComplete}
                // onTabChange={tabChanged}
              >
                <FormWizard.TabContent title="General Assumptions">
                  <div>
                    <GeneralAssumption/>
                  </div>
                </FormWizard.TabContent>
                <div title="Assumption Income">
                  <FormWizard.TabContent title="Assumption Income">
                    <div>{/* {<AssumptionIncome/>} */}</div>
                  </FormWizard.TabContent>
                </div>
                <FormWizard.TabContent title="Assumption Expense">
                  <div></div>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="H R Estimates">
                  <p>Some content for the first tab</p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Capex Assumptions">
                  <h1>First Tab</h1>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Project Funding">
                  <p>Some content for the first tab</p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Debt Repayment Details">
                  <h1>First Tab</h1>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Cash Flow Forecast">
                  <p>Some content for the first tab</p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Working Capital & CAPEX">
                  <h1>First Tab</h1>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Depreciation">
                  <p>Some content for the first tab</p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="P & L Forecast">
                  <h1>First Tab</h1>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="B S Forecast">
                  <p>Some content for the first tab</p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Payback Period">
                  <h1>First Tab</h1>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="IRR">
                  <p>Some content for the first tab</p>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Ratio Analysis Forecast">
                  <h1>First Tab</h1>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Medical Equipment">
                  <p>Some content for the first tab</p>
                </FormWizard.TabContent>
              </FormWizard>
            </div>
          </div>
        </div>

        {/* add style */}
        <style>{`
        @import url("https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css");
      `}</style>
      </>

      {/*  content area */}
      <div className="p-5">
        <div>
          {wizardState == 1 ? (
            <GeneralAssumption />
          ) : wizardState == 2 ? (
            <AssumptionIncome />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default FeasibiltyReport;
