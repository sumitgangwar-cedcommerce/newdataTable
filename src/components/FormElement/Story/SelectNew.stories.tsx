/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef, useState } from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Card } from "../../Card";
import SelectNew from "../SelectNew";
import * as Icon from "../../../storybook/Foundation/Icons/Icons";
const allIcons: any = { ...Icon };
export default {
    title: "Components/Form/SelectNew",
    component: SelectNew,
    argTypes: {
        value: {
            description: "Get array of values",
            control: {
                type: "array",
                disable: true
            },

        },
        label: {
            description: "Add label text",
            control: {
                type: "text",
            },
            defaultValue: "Label",
        },
        controlStates: {
            description: "Select Control states from below mentioned options as per requirement like success , danger",
            control: {
                type: "radio",
                options: ["Success", "Warning", "Error", "none"],
            },
        },
        disabled: {
            description: "Disable select box from here",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        required: {
            description: "This select box could not be empty and then select required as true",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        searchable: {
            description: "Select with search field",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        clearable: {
            description: "Select with clear button",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        loading: {
            description: "Select with loading",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        multiSelect: {
            description: "Select with multiple selection",
            control: {
                type: "boolean",
            },
            defaultValue: false,
        },
        placeholder: {
            description: "Add any placeholder as text",
            control: {
                type: "text",
            },
            defaultValue: "Select",
        },
        helpIcon: {
            description: "set icon beside help text",
            control: {
                type: "select",
                options: Object.keys(allIcons),
            },
            defaultValue: "Search"
        },
        helperText: {
            description: "Select with help text",
            control: {
                type: "text",
            },
            defaultValue: "Write help text here",
        },
        container: {
            description: "Open the dropdown below the select box always or Open the dropdown where the space is available means in body",
            control: {
                type: "radio",
                options: ["body", "element"],
            },
            defaultValue: "body",
        },
        ellipsis: {
            description: "Truncate selection if it oerflows the Select Box",
            control: {
                type: "boolean",
            },
            defaultValue: true,
        },
        debounceTimer: {
            description: "Debounce timer for searching items from select box",
            control: {
                type: "number",
            },
            defaultValue: 500,
        },
        customClass: {
            description: "Add any desired custom class on Dropdown popover",
            control: {
                type: "text",
            },
            defaultValue: "CustomClass",
        },
        customRef: {
            description: "This is a ref which is used for doing any functionality",
            control: {
                type: "text",
            },
            defaultValue: "CustomRef",
        },
        tabIndex: {
            description: "Provide the tab index on select box",
            control: {
                type: "number",
            },
            defaultValue: 0,
        }
    },
} as Meta;
const Template = ({ ...rest }) => {
    const [value1, setValue1] = useState("");
    const customUserRef = useRef<HTMLDivElement>(null)
    function onSelectChange(val: string) {
        setValue1(val);
    }
    return (
        <Card>
            <SelectNew
                {...rest}
                label={rest.label}
                helperText={rest.helperText}
                options={rest.options}
                multiSelect={rest.multiSelect}
                searchable={rest.searchable}
                clearable={rest.clearable}
                required={rest.required}
                controlStates={rest.controlStates}
                container={rest.container}

                helpIcon={allIcons[rest.helpIcon]({ size: 20, color: `${rest.controlStates == "Error" ? "#C4281C" : "#616771"}` })}
                disabled={rest.disabled}
                placeholder={rest.placeholder}
                loading={rest.loading}
                onChange={(e) => {
                    onSelectChange(e);
                }}
                value={value1}
                debounceTimer={rest.debounceTimer}
                onblur={() => { alert("G") }}
                tabIndex={rest.tabIndex}
                customRef={customUserRef}
            />
        </Card>
    );
};

const options = [
    { "label": "Afghanistan", "value": "AF", "description": "Lorem ipsum dolor sit amet, consectetur" },
    { "label": "Åland Islands", "value": "AX" },
    { "label": "Albania", "value": "AL" },
    { "label": "Algeria", "value": "DZ" },
    { "label": "American Samoa", "value": "AS" },
    { "label": "Andorra", "value": "AD" },
    { "label": "Angola", "value": "AO", "description": "Lorem ipsum dolor sit amet, consectetur" },
    { "label": "Anguilla", "value": "AI", "description": "Lorem ipsum dolor sit amet, consectetur" },
    { "label": "Antarctica", "value": "AQ" },
    { "label": "Antigua and Barbuda", "value": "AG" },
    { "label": "Argentina", "value": "AR" },
]

const Select = ({ ...rest }) => {
    const [value1, setValue] = useState("");
    const customUserRef = useRef<HTMLDivElement>(null)
    function onSelectChange(val: string) {
        setValue(val);
    }
    return (
        <Card>
            <SelectNew
                {...rest}
                label={rest.label}
                helperText={rest.helperText}
                options={rest.options}
                multiSelect={rest.multiSelect}
                searchable={rest.searchable}
                clearable={rest.clearable}
                required={rest.required}
                controlStates={rest.controlStates}
                container={rest.container}
                helpIcon={allIcons[rest.helpIcon]({ size: 20, color: `${rest.controlStates == "Error" ? "#C4281C" : "#8C9098"}` })}
                disabled={rest.disabled}
                placeholder={rest.placeholder}
                loading={rest.loading}
                debounceTimer={rest.debounceTimer}
                onChange={(e) => {
                    onSelectChange(e);
                }}
                value={value1}
                onblur={() => { alert() }}
                tabIndex={rest.tabIndex}
                customRef={customUserRef}
            />
        </Card>
    );
};

export const Primary = ({ ...args }) => <Select {...args} />;
Primary.args = {
    options: [
        { "label": "Afghanistan", "value": "AF", "description": "Lorem ipsum dolor sit amet, consectetur" },
        { "label": "Åland Islands", "value": "AX" },
        { "label": "Albania", "value": "AL" },
        { "label": "Algeria", "value": "DZ" },
        { "label": "American Samoa", "value": "AS" },
        { "label": "Andorra", "value": "AD" },
        { "label": "Angola", "value": "AO", "description": "Lorem ipsum dolor sit amet, consectetur" },
        { "label": "Anguilla", "value": "AI", "description": "Lorem ipsum dolor sit amet, consectetur" },
        { "label": "Antarctica", "value": "AQ" },
        { "label": "Antigua and Barbuda", "value": "AG" },
        { "label": "Argentina", "value": "AR" },
    ]
    // options: [
    //     {
    //         label: 'This is Colors Heading',
    //         group: [
    //             { value: 'ocean', label: 'Ocean' },
    //             { value: 'blue', label: 'Blue' },
    //             { value: 'purple', label: 'Purple' },
    //             { value: 'red', label: 'Red' },
    //             { value: 'orange', label: 'Orange' },
    //             { value: 'yellow', label: 'Yellow' },
    //             { value: 'green', label: 'Green' },
    //             { value: 'forest', label: 'Forest' },
    //             { value: 'slate', label: 'Slate' },
    //             { value: 'silver', label: 'Silver' },
    //         ],
    //     },
    //     {
    //         label: 'This is Chocolates Heading',
    //         group: [
    //             { value: 'vanilla', label: 'Vanilla' },
    //             { value: 'chocolate', label: 'Chocolate' },
    //             { value: 'strawberry', label: 'Strawberry' },
    //             { value: 'salted-caramel', label: 'Salted Caramel' },
    //         ],
    //     },
    //     {
    //         label: 'This is States Heading',
    //         group: [
    //             { value: 'AL', label: 'Alabama' },
    //             { value: 'AK', label: 'Alaska' },
    //             { value: 'AS', label: 'American Samoa' },
    //             { value: 'AZ', label: 'Arizona' },
    //             { value: 'AR', label: 'Arkansas' },
    //             { value: 'CA', label: 'California' },
    //             { value: 'CO', label: 'Colorado' },
    //             { value: 'CT', label: 'Connecticut' },
    //             { value: 'DE', label: 'Delaware' },
    //         ]
    //     }
    // ]
};

export const SelectWithLoading: any = Template.bind({});
SelectWithLoading.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    value={value1}
                    placeholder={"Select"}
                    loading
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const ClearableSelect: any = Template.bind({});
ClearableSelect.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    placeholder={"Select"}
                    clearable
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const DisabledSelect: any = Template.bind({});
DisabledSelect.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    placeholder={"Select"}
                    disabled
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const SelectHavingError: any = Template.bind({});
SelectHavingError.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    onblur={() => { }}
                    value={value1}
                    placeholder={"Select"}
                    options={options}
                    controlStates="Error"
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const SelectPopoverPosition: any = Template.bind({});
SelectPopoverPosition.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    placeholder={"Select"}
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const SingleSelect: any = Template.bind({});
SingleSelect.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    placeholder={"Select"}
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const MultiSelect: any = Template.bind({});
MultiSelect.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    multiSelect
                    placeholder={"Select"}
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const SearchEnableSelect: any = Template.bind({});
SearchEnableSelect.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    searchable
                    placeholder={"Select"}
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const SelectWithLabel: any = Template.bind({});
SelectWithLabel.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    label="Label"
                    placeholder={"Select"}
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                />
            </Card>
        );
    },
];

export const SelectWithHelpTextAndIcon: any = Template.bind({});
SelectWithHelpTextAndIcon.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    placeholder={"Select"}
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                    helpIcon={<Icon.Search size={20} color="#8C9098" />}
                    helperText="Select With Help Text"
                />
            </Card>
        );
    },
];

export const SelectWithHelpTextAndWithoutIcon: any = Template.bind({});
SelectWithHelpTextAndWithoutIcon.decorators = [
    () => {
        const [value1, setValue] = useState("");
        function onSelectChange(val: string) {
            setValue(val);
        }
        return (
            <Card>
                <SelectNew
                    options={options}
                    onblur={() => { }}
                    value={value1}
                    placeholder={"Select"}
                    onChange={(e: any) => {
                        onSelectChange(e);
                    }}
                    helperText="Select With Help Text"
                />
            </Card>
        );
    },
];