import React, { Component } from "react";
import {
  FlexChild,
  FlexLayout,
  PageHeader,
  Card,
  Switcher,
  RangeSlider,
  AutoComplete,
  FileUpload,
} from "ounce-ui";

export default class Config extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      path: "/panel/dashboard",
      rows: [],
      theme: "light",
      minValue: 40,
      maxValue: 80,
    };
  }
  render() {
    return (
      <div>
        <PageHeader title="Config" />
        <FlexLayout childWidth="fullWidth" wrap="wrap" spacing="extraLoose">
          <FlexChild desktopWidth="75">
            <Card cardType="yellow">AA</Card>
          </FlexChild>
          <FlexChild desktopWidth="25">
            <Card cardType="yellow">BB</Card>
          </FlexChild>
          <Card cardType="yellow">CC</Card>
          {/* <Card cardType="yellow">DD</Card> */}
        </FlexLayout>

        <Card>
          <Switcher
            name="Theme"
            checked={this.state.switcherToggle}
            onChange={() => {
              this.setState({ switcherToggle: !this.state.switcherToggle });
            }}
          />
          <br />
          <br />
          <RangeSlider
            type="rangeSlider"
            minValue={this.state.minValue}
            maxValue={this.state.maxValue}
            setmaxValue={this.setmaxValue}
            setminValue={this.setminValue}
          />
          <br />
          <br />
          MIn : {this.state.minValue}
          Max : {this.state.maxValue}
          <AutoComplete
            onChange={() => {}}
            onEnter={function noRefCheck() {}}
            options={[
              {
                label: "option1",
                value: "option1",
              },
              {
                label: "option2",
                value: "option1",
              },
              {
                label: "option3",
                value: "option1",
              },
              {
                label: "Abc",
                value: "Abc",
              },
              {
                label: "Apple",
                value: "Apple",
              },
              {
                label: "Computer",
                value: "Computer",
              },
            ]}
            value=""
          />
          <FileUpload></FileUpload>
        </Card>
      </div>
    );
  }
}
