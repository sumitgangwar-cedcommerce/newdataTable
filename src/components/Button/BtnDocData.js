import React from "react";
import Button from "./Button";

export const DocData = [
  {
    title: "Best Practice ",
    description: (
      <div>
        <blockquote>
          No matter what shape you choose, be sure to maintain consistency
          throughout your interface controls so that your user will be able to
          identify and recognize the appropriate UX elements as buttons.
        </blockquote>
        <h4>
          <strong>When to use Button and Link Text</strong>
        </h4>
        <ol>
          <li>
            A link will redirect you to a new page or a section within the same
            page.
          </li>
          <li>
            Buttons are used when you are performing an action, such as:
            “submit,” “merge,” “create new,” “upload,” etc.
          </li>
        </ol>
        <h4>
          <strong>Placement</strong>
        </h4>
        <p>
          Regarding UX button placement, try to use traditional layouts and
          standard UI patterns as much as possible because conventional
          placement for buttons improves discoverability. Using a standard
          layout will help users understand the purpose of each element — even
          if it’s a button without other strong visual signifiers. Combining a
          standard layout with clean visual design and ample whitespace makes
          the layout more understandable.
        </p>
      </div>
    ),
  },
  {
    title: "Button Labelling",
    description: (
      <div>
        <blockquote className="css-kxg3mc">
          Buttons with generic or misleading labels can be a huge source of
          frustrations for your users. Write button labels that clearly explain
          what each button does. Ideally, the button’s label should clearly
          describe its action.
        </blockquote>
        <ol>
          <li>Choose sentence case or title case over uppercase.</li>
          <li>Good button label invites users to take action</li>
          <li>
            How much text can I use for labels in buttons? While more words
            might mean more clarity, more words also mean more visual clutter.
          </li>
        </ol>
        <h4>
          <strong>Here are two things to remember:</strong>
        </h4>
        <ol>
          <li>
            Avoid wrapping text. To keep text legible a text label shoold remain
            on a single line.
          </li>
          <li>Try to use one or two words per button.</li>
        </ol>
        <div className="story-DoesDonts">
          <div className="story-donts">
            <Button>
              Send <br />
              Message
            </Button>
          </div>
          <div className="story-does">
            <Button>Send Message</Button>
          </div>
        </div>
      </div>
    ),
  },
];
