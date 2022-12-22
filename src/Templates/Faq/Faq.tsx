// / eslint-disable react/jsx-key /
// / eslint-disable @typescript-eslint/no-unused-vars /
// / eslint-disable @typescript-eslint/no-explicit-any /
import React, { useEffect, useState } from "react";
import { PlusCircle } from "react-feather";
import Button from "../../components/Button/Button";
import FlexLayout from "../../components/FlexLayout/FlexLayout";
import Card from "../../components/Card/Card";
import Accordion from "../../components/Accordion/Accordion";
import TextStyles from "../../components/TextStyles/TextStyles";
import PageHeader from "../../components/PageHeader/PageHeader";
import AutoComplete from "../../components/AutoComplete/AutoComplete";
function Faq({
  title,
  icon,
  iconAlign,
  textColor,
  count = 1,
  data,
  onSearch,
  Searchvalue,
  description,
  onClick,
  onEnter,
  clearFunction,
  reverseNavigation,
  placeholder = "Search",
}: FaqI): JSX.Element {
  const [clicked, setClicked] = useState<number>(-1);
  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(count);
  const [dataReplica, setDataReplica] = useState<any>({});
  const handleToggle = (index: any) => {
    if (clicked === index) {
      setClicked(-1);
    } else {
      setClicked(index);
    }
  };

  const [accordian1, setAccordian1] = useState([
    {
      label: "",
      value: "",
    },
  ]);
  const handleShowMore = (section: any) => {
    setDataReplica((prevData: any) => ({
      ...prevData,
      [section]: !prevData[section]
        ? 2 * numberOfitemsShown
        : prevData[section] + numberOfitemsShown,
    }));
  };
  const clone: any = [];
  useEffect(() => {
    Object.keys(data)?.map((title, index) => {
      Object.keys(data[title])?.map((e, idx) => {
        clone.push({
          label: data[title][e].title,
          value: data[title][e].title,
        });
      });
    });
    setAccordian1(clone);
  }, []);

  useEffect(() => {
    setNumberOfItemsToShown(count);
    setDataReplica({});
  }, [count]);
  return (
    <FlexLayout direction="vertical" spacing="loose">
      <PageHeader
        description={description}
        onClick={onClick}
        reverseNavigation={reverseNavigation}
        title={title}
      />
      <AutoComplete
        onEnter={onEnter}
        value={Searchvalue}
        onChange={onSearch}
        options={accordian1}
        setHiglighted
        clearButton
        clearFunction={clearFunction}
        placeHolder={placeholder}
      />
      <Card>
        <FlexLayout direction="vertical" spacing="loose">
          {Object.keys(data)?.map((title, index) => {
            return (
              <FlexLayout spacing="loose" direction="vertical" key={index}>
                <TextStyles type="SubHeading" fontweight="bold">
                  {title}
                </TextStyles>
                {Object.keys(
                  data[title].slice(0, dataReplica[title] ?? numberOfitemsShown)
                ).map((e, idx) => {
                  function createMarkup() {
                    return {__html: data[title][e].content};
                  }
                  return (
                    <Accordion
                      key={idx}
                      icon={icon}
                      active={clicked == data[title][e].title}
                      title={data[title][e].title}
                      iconAlign={iconAlign}
                      onClick={() => handleToggle(data[title][e].title)}
                    >
                      <TextStyles textcolor={textColor}>
                      <div dangerouslySetInnerHTML={createMarkup()} />
                      </TextStyles>
                    </Accordion>
                  );
                })}
                {data[title] ?? 2 < data[title].length ? (
                  <FlexLayout halign="center">
                    {(dataReplica[title] ?? 2) <= data[title].length ? (
                      <>
                        <Button
                          type="Outlined"
                          iconRound={false}
                          thickness="thin"
                          content="Show More"
                          icon={<PlusCircle color="#5C5F62" />}
                          onClick={() => handleShowMore(title)}
                        />
                      </>
                    ) : null}
                  </FlexLayout>
                ) : null}
              </FlexLayout>
            );
          })}
        </FlexLayout>
      </Card>
    </FlexLayout>
  );
}
export interface FaqI {
  title?: string;
  reverseNavigation?: boolean;
  description?: string;
  options?: any;
  onEnter?: (e: string) => void;
  Searchvalue?: any;
  onSearch?: (e: string) => void;
  onClick?: () => void;
  data?: any;
  textColor?: string;
  icon?: boolean;
  iconAlign?: string | any;
  count?: number;
  clearFunction?: (e: string) => void;
  placeholder?: string;
}

export default Faq;
