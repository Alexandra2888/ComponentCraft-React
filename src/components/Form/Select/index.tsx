import { Stack } from "../../Layout";

export const Select = () => {
  return (
    <Stack>
      <select id="select" className="border border-gray-200 p-2 rounded-lg">
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </Stack>
  );
};
