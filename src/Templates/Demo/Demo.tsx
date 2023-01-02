import React from "react";
import { ChevronDown, X } from "react-feather";
import { Card } from "../../components";
import "./Demo.css";

const GrandFather = [
  {
    Name: "Sumesh",
    Address: "Lucknow",
    Age: "70",
    ChildrenCount: "4",
    Children: [
      {
        Name: "Mahesh",
        Address: "Barabanki",
        Age: "38",
        ChildrenCount: "2",
        Children: [
          {
            Name: "Arjun",
            Address: "Barabanki",
            Age: "10",
            ChildrenCount: "0",
          },
          {
            Name: "Nakul",
            Address: "Barabanki",
            Age: "5",
            ChildrenCount: "0",
          },
        ],
      },
      {
        Name: "Bhupesh",
        Address: "Azamgarh",
        Age: "35",
        ChildrenCount: "0",
        Children: []
      },
      {
        Name: "Suresh",
        Address: "Unnao",
        Age: "30",
        ChildrenCount: "0",
        Children: []

      },
      {
        Name: "Lokesh",
        Address: "Kanpur",
        Age: "25",
        ChildrenCount: "0",
        Children: []

      },
    ],
  },
];

const Accordion = ({ title, children, index }:any) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <div
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        <span className="index">{index }</span>
        <h2> {title}</h2>
        <ChevronDown size={20} color={"red"} />
      </div>
      <div
        className={`accordion-content-wrapper ${!isOpen ? "collapsed" : ""}`}
      >
        <div className="accordion-content">{children}</div>
      </div>
    </React.Fragment>
  );
};

export default function Demo() {
  return (
   <>
    <Card>
      <div className="accordion-wrapper">
        {GrandFather.map((detail, g) => (
         
          <React.Fragment key={g}>
            
            <Accordion title={"GrandFathers :-" + detail.Name} index={g+1}>
              <div>
                <h3>
                  <span>Name:-</span> <span>{detail.Name}</span>{" "}
                </h3>
                <h3>
                  <span>Address:-</span>
                  <span>{detail.Address}</span>
                </h3>
                <h3>
                  <span>Age:-</span>
                  <span>{detail.Age}</span>
                </h3>
                <h3>
                  <span>Count of Children:-</span>
                  <div>
                    <span>{detail.ChildrenCount}</span>
                  </div>
                </h3>
              </div>

              {detail.Children.map((son: any, s) => (
                <div className="accordion-wrapper">
                  <Accordion
                    title={"Son :- " + son.Name}
                    index={g+1 + "." + (s+1)}
                  >
                    <div>
                      <h3>
                        <span>Name:-</span> <span>{son.Name}</span>{" "}
                      </h3>
                      <h3>
                        <span>Address:-</span>
                        <span>{son.Address}</span>
                      </h3>
                      <h3>
                        <span>Age:-</span>
                        <span>{son.Age}</span>
                      </h3>

                      <h3>
                        <span>Count of Children:-</span>
                        <div>
                          <span>{son.ChildrenCount}</span>
                        </div>
                      </h3>
                    </div>
                    {son.Children.map((grandchildren: any, i: any) => (
                      <div className="accordion-wrapper">
                        <Accordion
                          title={"GrandSon:- " + grandchildren.Name}
                          index={g+1 + "." + (s+1) + (i+1)}
                        >
                          <div>
                            <h3>
                              <span>Name:-</span> <span>{grandchildren.Name}</span>{" "}
                            </h3>
                            <h3>
                              <span>Address:-</span>
                              <span>{grandchildren.Address}</span>
                            </h3>
                            <h3>
                              <span>Age:-</span>
                              <span>{grandchildren.Age}</span>
                            </h3>

                            <h3>
                              <span>Count of Children:-</span>
                              <div>
                                <span>{grandchildren.ChildrenCount}</span>
                              </div>
                            </h3>
                          </div>
                        </Accordion>
                      </div>
                    ))}
                  </Accordion>
                </div>
              ))}
            </Accordion>
          </React.Fragment>
        ))}
      </div>
    </Card>
    <Accordion index={1} title={"Hello"}>hello Children</Accordion>
   </>
  );
}
