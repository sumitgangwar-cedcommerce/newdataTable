import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import { Card } from "../../components/Card";
import Carousel from "../../components/Carousel/Carousel";
import { FlexChild, FlexLayout } from "../../components/FlexLayout";
import TextStyles from "../../components/TextStyles/TextStyles";

export default function Leftbottom() {

  const reviewData = [
    {
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididtur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      avatar: "https://thispersondoesnotexist.com/image",
      name: "Elbert Chank",
      designation: "client",
    },
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididtur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "https://thispersondoesnotexist.com/image",
        name: "Elbert Chank",
        designation: "client",
      },
      {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididtur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        avatar: "https://thispersondoesnotexist.com/image",
        name: "Elbert Chank",
        designation: "client",
      },
  ];

  const finalReviewData = reviewData.map((number,index) =>
    <Card key={index} extraClass="inte-Login__Carousel">
        <FlexLayout direction="vertical" spacing="extraLoose">
          <FlexChild>
            <TextStyles>
             {number.review}
            </TextStyles>
          </FlexChild>
          <FlexChild>
            <FlexLayout spacing="mediumLoose">
              <Avatar image={number.avatar}></Avatar>
              <FlexLayout direction="vertical" spacing="none">
                <TextStyles>{number.name}</TextStyles>
                <TextStyles>{number.designation}</TextStyles>
              </FlexLayout>
            </FlexLayout>
          </FlexChild>
        </FlexLayout>
      </Card>
  );

  return (
    <Carousel slidesToShow={1} autoplay={true} autoplaySpeed={3000} infinite dots dotsalign="bottomCenter">
      {finalReviewData}
    </Carousel>
  );
}
