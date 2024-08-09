import { Input, Text } from "../../Components";
import { Box, Stack } from "../../Layout";

export const Checklist = () => {
  return (
    <Box className="p-12 border border-gray-300 rounded-xl">
      <Stack>
        <Text as="label" size={"sm"} weight={"medium"} className="mb-1.5">
          Check options
        </Text>
        <div className="space-y-3">
          <label className="flex items-center">
            <Input type="checkbox" className="mr-4" id="check1" />
            <span>Check 1</span>
          </label>
          <label className="flex items-center">
            <Input type="checkbox" className="mr-4" id="check2" />
            <span>Check 2</span>
          </label>
          <label className="flex items-center">
            <Input type="checkbox" className="mr-4" id="check3" />
            <span>Check 3</span>
          </label>
        </div>
      </Stack>
    </Box>
  );
};
