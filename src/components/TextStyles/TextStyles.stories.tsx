import React from 'react'
import { FlexLayout, TextStyles } from '..'
import { TextStylesI } from './TextStyles'
import { Card } from '../Card'

export default {
  title: 'Components/Entity/TextStyles',
  component: TextStyles,
  argTypes: {
    children: {
      description: 'Your content goes here',
      control: {
        type: 'text',
      },
      defaultValue:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    type: {
      description: 'You Can change the Text Size ',
      control: {
        type: 'radio',
        options: ['Heading', 'SubHeading', 'Paragraph', 'Display'],
      },
      defaultValue: 'simpleText',
    },
    headingTypes: {
      control: {
        type: 'radio',
        options: ['LG-2.8', 'MD-2.7'],
      },
    },
    subheadingTypes: {
      control: {
        type: 'radio',
        options: ['LG-2.5', 'MD-2.2', 'SM-1.8', 'XS-1.6'],
      },
    },

    paragraphTypes: {
      control: {
        type: 'radio',
        options: ['LG-1.5', 'MD-1.4', 'SM-1.3', 'XS-1.2'],
      },
    },
    displayTypes: {
      control: {
        type: 'radio',
        options: ['XL-4.3', 'LG-3.8', 'MD-3.6', 'SM-3.4', 'XS-3.2'],
      },
    },

    lineHeight: {
      control: {
        type: 'radio',
        options: [
          'LH-1.4',
          'LH-1.6',
          'LH-2.0',
          'LH-2.4',
          'LH-2.8',
          'LH-3.2',
          'LH-3.6',
          'LH-4.0',
          'LH-4.4',
          'LH-4.8',
        ],
      },
    },

    textcolor: {
      description: 'Change the Text Color',
      control: {
        type: 'radio',
        options: ['dark', 'light', 'positive', 'negative', 'primary'],
      },
      defaultValue: 'dark',
    },

    alignment: {
      description: 'Change the alignment of your Text',
      control: {
        type: 'radio',
        options: ['left', 'right', 'center'],
      },
      defaultValue: 'left',
    },
    utility: {
      description: 'set utlity of text',
      control: {
        type: 'radio',
        options: ['utility', 'none'],
      },
      defaultValue: 'none',
    },
    fontweight: {
      description: 'set Fontweight of text',
      control: {
        type: 'radio',
        options: ['light', 'normal', 'bold', 'extraBold' ,'extraBolder'],
      },
      defaultValue: 'normal',
    },
    icon: {
      table: {
        disable: true,
      },
    },
    content: {
      description: 'Your content here Pass a React Node ',
      control: {
        type: 'text',
      },
    },
  },
}

const Template = (rest: TextStylesI) => {
  return (
    <Card>
      <TextStyles
        {...rest}
        content={rest.content}
        headingTypes={rest.headingTypes}
        subheadingTypes={rest.subheadingTypes}
        paragraphTypes={rest.paragraphTypes}
        displayTypes={rest.displayTypes}
        lineHeight={rest.lineHeight}
      />
    </Card>
  )
}

export const Primary = Template.bind({})
//
export const TextStylesColors: any = Template.bind({})
TextStylesColors.decorators = [
  () => {
    return (
      <Card title="TextStyle Colors">
        <FlexLayout spacing="loose" direction="vertical">
          {['dark', 'light', 'positive', 'negative', 'primary'].map(
            (items: any) => {
              return (
                <TextStyles
                  textcolor={items}
                  content={`TextStyle ${items} Color`}
                />
              )
            },
          )}
        </FlexLayout>
      </Card>
    )
  },
]
//
export const TextStylesFontWeight: any = Template.bind({})
TextStylesFontWeight.decorators = [
  () => {
    return (
      <Card title="TextStyles FontWeight">
        <FlexLayout spacing="loose" direction="vertical">
          {['light', 'normal', 'bold', 'extraBold'].map((items: any) => {
            return (
              <TextStyles
                fontweight={items}
                content={`TextStyle ${items} Font Weight` }
              />
            )
          })}
        </FlexLayout>
      </Card>
    )
  },
]
//
export const TextStylesAlignment: any = Template.bind({})
TextStylesAlignment.decorators = [
  () => {
    return (
      <Card title="TextStyles Alignment">
        <FlexLayout spacing="loose" direction="vertical">
          {['left', 'center', 'right'].map((items: any) => {
            return (
              <TextStyles
                alignment={items}
                content={`TextStyle ${items} Alignment`}
              />
            )
          })}
        </FlexLayout>
      </Card>
    )
  },
]
//
export const TextStylesTypes: any = Template.bind({})
TextStylesTypes.decorators = [
  () => {
    return (
      <>
        <Card title="TextStyle Heading Types">
          <FlexLayout spacing="loose" direction="vertical">
            {['LG-2.8', 'MD-2.7'].map((items: any) => {
              return (
                <TextStyles
                  type="Heading"
                  headingTypes={items}
                  content={`TextStyle ${items} HeadingType`}
                />
              )
            })}
          </FlexLayout>
        </Card>
        <Card title="TextStyle SubHeading Types">
          <FlexLayout spacing="loose" direction="vertical">
            {['LG-2.5', 'MD-2.2', 'SM-1.8', 'XS-1.6'].map((items: any) => {
              return (
                <TextStyles
                  type="SubHeading"
                  subheadingTypes={items}
                  content={`TextStyle ${items} SubHeading Type`}
                />
              )
            })}
          </FlexLayout>
        </Card>
        <Card title="TextStyle Paragraph Types">
          <FlexLayout spacing="loose" direction="vertical">
            {['LG-1.5', 'MD-1.4', 'SM-1.3', 'XS-1.2'].map((items: any) => {
              return (
                <TextStyles
                  type="Paragraph"
                  paragraphTypes={items}
                  content={`TextStyle ${items} Paragraph Type`}
                />
              )
            })}
          </FlexLayout>
        </Card>
        <Card title="TextStyle Display Types">
          <FlexLayout spacing="loose" direction="vertical">
            {['XL-4.3', 'LG-3.8', 'MD-3.6', 'SM-3.4', 'XS-3.2'].map(
              (items: any) => {
                return (
                  <TextStyles
                    type="Display"
                    displayTypes={items}
                    content={`TextStyle ${items} Display Type`}
                  />
                )
              },
            )}
          </FlexLayout>
        </Card>
      </>
    )
  },
]
//
export const TextStylesLineHeight: any = Template.bind({})
TextStylesLineHeight.decorators = [
  () => {
    return (
      <Card title="TextStyles LineHeight">
        <FlexLayout spacing="loose" direction="vertical">
          {[
            'LH-1.6',
            'LH-2.0',
            'LH-2.4',
            'LH-2.8',
            'LH-3.2',
            'LH-3.6',
            'LH-4.0',
            'LH-4.4',
            'LH-4.8',
          ].map((items: any) => {
            return (
              <>
              <TextStyles type='Heading' textcolor='primary' headingTypes='MD-2.7' content={`LineHeight Is ${items}`}/>
              <TextStyles
               type='Paragraph'
               paragraphTypes='SM-1.3'
                lineHeight={items}
                content={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
              />
              </>
            )
          })}
        </FlexLayout>
      </Card>
    )
  },
]