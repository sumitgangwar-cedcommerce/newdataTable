import React, { useEffect, useState } from "react";
import { Pagination, Card } from "..";

export default {
  title: "Components/Navigation/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      description: "set no of pages",
      control: {
        type: "number",
      },
      defaultValue: 20,
    },
    totalitem: {
      description: "Set no of total items",
      control: {
        type: "number",
      },
      defaultValue: 200,
    },
    currentPage: {
      description: "set current page",
      control: {
        type: "number",
      },
      defaultValue: 1,
    },
    onNext: {
      description: "onNext function click button then move next page",
      control: {
        disable: true,
      },
    },
    countPerPage: {
      description: "set count of page",
      control: {
        type: "text",
      },
      defaultValue: "10",
    },
    optionPerPage: {
      description: "set count of page",
      control: {
        type: "array",
      },
      defaultValue: [
        { label: "10", value: "10" },
        { label: "15", value: "15" },
        { label: "20", value: "20" },
        { label: "25", value: "25" },
        { label: "50", value: "50" },
        { label: "100", value: "100" },
      ],
    },
    onPrevious: {
      description: "onPrevious function click button then move previous page",
      control: {
        disable: true,
      },
    },
    onCountChange: {
      description: "This function count total number of page",
      control: {
        disable: true,
      },
    },
    simpleView: {
      description: "set simpleview",
      control: {
        type: "boolean",
        boolean: true,
      },
      defaultValue: false,
    },
  },
};

const Template = ({ ...rest }) => {
  const [activePage, updateActivePage] = useState<any>(1);
  const [countP, setCount] = useState(rest.countPerPage);
  function onCountChange(count: number) {
    setCount(count);
    count;
  }
  useEffect(() => {
    setCount(rest.countPerPage);
  }, [rest.countPerPage]);
  return (
    <Card title="Pagination">
      <Pagination
        {...rest}
        totalitem={200}
        totalPages={rest.totalPages}
        onNext={() => {
         
        }}
        // onPrevious={() => {
        //   updateActivePage(activePage - 1);
        // }}
        // currentPage={activePage}
        onEnter={()=>{ alert("onenter")}}
        countPerPage={countP}
        onCountChange={onCountChange}
      />
    </Card>
  );
};

export const Primary = Template.bind({});
