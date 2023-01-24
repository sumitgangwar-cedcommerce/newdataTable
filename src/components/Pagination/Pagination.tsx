/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useEffect, useState } from "react";
import { Button, FlexLayout } from "..";
import TextStyles from "../TextStyles/TextStyles";
import { Select, TextField } from "../FormElement";
import { FlexChild } from "../FlexLayout";
import { ChevronLeft, ChevronRight } from "react-feather";
import "./Pagination.css";

const Pagination: React.FC<PaginationI> = ({
  onNext = () => {}, //onNext function click button then move next page
  onPrevious = () => {}, //onPrevious function click button then move previous page
  currentPage,
  countPerPage,
  totalitem,
  optionPerPage = [],
  onCountChange = () => {
    return ""; // This function count total number of page
  },
  simpleView = false,
  onEnter = () => {
    return null; // Press the "Enter" key inside the input field to trigger the button:
  },
}: PaginationI) => {
  const [activePage, updateActivePage] = useState<any>(currentPage);
  const [pageReplica, setpageReplica] = useState(activePage);
  const [page, setpage] = useState(false);
  useEffect(() => {
    if (activePage !== undefined && activePage != "" && page) {
      setpageReplica(activePage);
    }
  }, [activePage]);
  useEffect(() => {
    updateActivePage(currentPage);
  }, [currentPage]);

  return (
    <div
      className={`inte-Pagination ${
        simpleView ? "inte-Pagination--Simple" : ""
      }`}
    >
      <FlexLayout
        spacing="tight"
        valign="center"
        halign={simpleView ? "center" : "fill"}
      >
        {countPerPage && !simpleView ? (
          <FlexChild>
            <FlexLayout spacing="mediumTight" valign="center">
              <TextStyles>Items : </TextStyles>
              <div className="inte-Pagination-perPage--Sorter">
                <Select
                  customClass="inte-Pagination--perPage"
                  options={optionPerPage}
                  popoverContainer="body"
                  onChange={(e) => {
                    onCountChange(parseInt(e));
                  }}
                  placeholder={countPerPage}
                  value={countPerPage}
                />
              </div>
              <TextStyles textcolor="light">
                <span>Showing</span>{" "}
                {pageReplica == 0
                  ? countPerPage * 1 + 1 - countPerPage
                  : countPerPage * pageReplica + 1 - countPerPage}{" "}
                -{" "}
                {pageReplica * countPerPage >= totalitem
                  ? totalitem
                  : pageReplica == 0
                  ? 1 * countPerPage
                  : pageReplica * countPerPage}{" "}
                of {totalitem}
              </TextStyles>
            </FlexLayout>
          </FlexChild>
        ) : null}
        <FlexLayout spacing="mediumTight" valign="center">
          <Button
            icon={<ChevronLeft size={20} color={"#2a2a2a"} />}
            thickness="thin"
            type="TextButton"
            disable={activePage <= 1}
            onClick={() => {
              setpage(true);
              onPrevious();
            }}
          />
          <div className="inte-Pagination--PageCount">
            <TextField
              value={activePage}
              type="text"
              min={1}
              onChange={(e) => {
                const reg: any = /^[0-9]*$/;
                setpage(false);
                if ((reg.test(parseInt(e)) && e !== "0") || e == "") {
                  if (e == "") {
                    updateActivePage(e);
                  } else if (
                    parseInt(e) >= 0 &&
                    parseInt(e) <= Math.ceil(totalitem / countPerPage)
                  ) {
                    updateActivePage(parseInt(e, 10));
                  } else {
                    updateActivePage(Math.ceil(totalitem / countPerPage));
                  }
                }
              }}
              onEnter={() => {
                if (activePage >= 1) {
                  setpageReplica(activePage);
                  onEnter(activePage);
                }
              }}
            />
          </div>
          <TextStyles>
            of &nbsp;{Math.ceil(totalitem / countPerPage)}
          </TextStyles>
          <Button
            icon={<ChevronRight size={20} color={"#2a2a2a"} />}
            type="Secondary"
            thickness="thin"
            disable={
              Math.ceil(totalitem / countPerPage) <= activePage ||
              activePage == ""
            }
            onClick={() => {
              setpage(true);
              onNext();
            }}
          />
        </FlexLayout>
      </FlexLayout>
    </div>
  );
};

export interface PaginationI {
  currentPage?: number | string | any;
  totalitem?: number | any;
  totalPages?: number;
  countPerPage?: string | any;
  optionPerPage?: Array<ObjI>;
  simpleView?: boolean;
  onNext?: () => void;
  onPrevious?: () => void;
  onEnter?: (page: number | string) => void;
  onCountChange?: (count: number) => void;
}

interface ObjI {
  label: string;
  value: string;
}

export default Pagination;
