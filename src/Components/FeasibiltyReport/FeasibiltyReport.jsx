import React, { useState } from 'react'
import GeneralAssumption from './GeneralAssumption/GeneralAssumption'
import AssumptionIncome from './AssumptionIncome/AssumptionIncome'

const FeasibiltyReport = () => {
    // state changing
    const [wizardState, setWizardState] = useState(1)
    return (
        <div className='p-5'>
            <div className="  max-h-28 max-w-screen-lg rounded overflow-hidden shadow-lg" style={{ width: "100vh" }}>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 flex gap-3">
                        <button className='rounded-md bg-slate-400 p-1' style={{ border: "1px solid black" }} onClick={() => setWizardState(1)}>Assmption Gen</button>
                        <button className='rounded-md bg-slate-400 p-1' style={{ border: "1px solid black" }} onClick={() => setWizardState(2)}>Assmption Income</button>
                    </div>
                </div>

            </div>

            {/*  content area */}
            <div className='p-5'>
                <div>
                    {
                        wizardState == 1 ?
                        <GeneralAssumption /> :
                        wizardState == 2 ? 
                        <AssumptionIncome/> :""

                    }
                </div>
            </div>
        </div>
    )
}

export default FeasibiltyReport