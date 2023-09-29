import React from "react";
import { Input, Button, Typography } from "@material-tailwind/react";

const Form = () => {
  return (
    <div className="flex justify-center items-center">
      <form
        className="border border-gray-300 p-8 rounded-lg w-80 max-w-screen-lg sm:w-96 mt-5 mb-5"
      >
        <Typography variant="h4" color="blue-gray" className="text-center mb-6">
          Form
        </Typography>

        <div className="mb-4">
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              <label htmlFor="first" className="w-1/3 mt-2">First</label>
              <Input size="lg" id="first" className="w-3/3" />
            </div>
            <div className="flex gap-2">
              <label htmlFor="second" className="w-1/3 mt-2">Second</label>
              <Input size="lg" id="second" className="w-3/3" />
            </div>
          </div>
        </div>
        <Button className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
