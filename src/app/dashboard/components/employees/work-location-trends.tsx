"use client";
import React from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { name: "1월", office: 82, wfh: 44 },
  { name: "2월", office: 80, wfh: 40 },
  { name: "3월", office: 83, wfh: 42 },
  { name: "4월", office: 50, wfh: 50 },
  { name: "5월", office: 40, wfh: 60 },
  { name: "6월", office: 60, wfh: 40 },
  { name: "7월", office: 55, wfh: 55 },
  { name: "8월", office: 49, wfh: 61 },
  { name: "9월", office: 44, wfh: 70 },
  { name: "10월", office: 40, wfh: 40 },
  { name: "11월", office: 50, wfh: 50 },
  { name: "12월", office: 50, wfh: 50 },
];

const WorkLocationTrends: React.FC = () => {
  const fontStyle = {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontSize: "14px",
    fill: "#fff",
  };

  return (
    <ResponsiveContainer height={350} width={"100%"}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" tick={{ ...fontStyle }} />
        <YAxis stroke="#888888" tick={{ ...fontStyle }} />
        <Tooltip
        contentStyle={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        formatter={(value, name, props) => {
            if (Array.isArray(props?.payload)) {
            const barEntry = props.payload.find((entry) => entry.dataKey === name);
            if (barEntry) {
                const translatedName = name === "office" ? "사무실 근무" : "재택 근무";
                return [value, translatedName];
            }
            }
            return [value, name]; // 기본적으로 원래 값 반환
        }}
        />


        <Bar dataKey="office" stackId="1" fill="#ec4889" name="사무실 근무" />
        <Bar dataKey="wfh" stackId="2" fill="#6b7280" radius={[4, 4, 0, 0]}   name="재택 근무" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default WorkLocationTrends;
