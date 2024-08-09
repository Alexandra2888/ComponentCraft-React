import { Input } from "../../Components";
import { Box } from "../../Layout";

export const Radio = () => {
  return (
    <Box className="p-12 border border-gray-300 rounded-xl">
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium">Select option</legend>
        <div className="flex items-center">
          <Input type="radio" id="option1" name="radioGroup" className="mr-2" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center">
          <Input type="radio" id="option2" name="radioGroup" className="mr-2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </fieldset>
    </Box>
  );
};
