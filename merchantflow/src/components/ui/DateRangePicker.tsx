import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Platform, Pressable, Text } from "react-native";

export default function DateRangePicker() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === "ios"); // keep open on iOS if needed

    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <>
      <Pressable onPress={() => setShow(true)}>
        <Text>Select date</Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
}