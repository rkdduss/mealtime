import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function TimeHeader() {
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState("1-1");
  const [items, setItems] = useState([
    { label: "1학년 1반", value: "1-1" },
    { label: "1학년 2반", value: "1-2" },
    { label: "1학년 3반", value: "1-3" },
    { label: "1학년 4반", value: "1-4" },
  ]);

  const data = [
    ["", "월", "화", "수", "목", "금"],
    ["1", "국어", "수학", "과학", "영어", "음악"],
    ["2", "수학", "체육", "사회", "미술", "국어"],
    ["3", "과학", "국어", "체육", "수학", "영어"],
    ["4", "영어", "음악", "미술", "과학", "체육"],
    ["5", "미술", "영어", "국어", "사회", "음악"],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>이번주 시간표</Text>
      <DropDownPicker
        open={open}
        value={selectedClass}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedClass}
        setItems={setItems}
        style={styles.dropdown}
        dropDownContainerStyle={styles.dropdownContainer}
        placeholder="반을 선택해주세요"
      />
      <View style={styles.timetable}>
        {data.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <View
                style={[
                  styles.cell,
                  rowIndex === 0 ? styles.headerCell : null,
                ]}
                key={cellIndex}
              >
                <Text
                  style={[
                    rowIndex === 0 ? styles.dayText : styles.cellText,
                  ]}
                >
                  {cell}
                </Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  headerText: {
    color: "#1F8F2A",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  dropdown: {
    width: 200,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  dropdownContainer: {
    borderColor: "#ccc",
    borderRadius: 10,
  },
  timetable: {
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  headerCell: {
    backgroundColor: "#f0f0f0",
  },
  cellText: {
    fontSize: 12,
    color: "#555",
  },
  dayText: {
    color: 'black'
  }
});
