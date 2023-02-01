
import { Card } from "../Card";
import { FlexLayout } from '../FlexLayout';
import TextStyles from '../TextStyles/TextStyles';
import React, { FC } from 'react';
import './FallBack.css';




export interface FallBackI {
    illustration?: string | React.ReactNode;
    title?: string | React.ReactNode;
    subTitle?: string | React.ReactNode;
    action?: React.ReactNode;
    extraclass?: string;
    FallBackHeight?: 'FullPage' | 'NormalPage';
    buttonText?: string;
}

export const FallBack = ({ extraclass, FallBackHeight = "NormalPage", ...props }: FallBackI) => {
    return (
        <div className={`inte-Fallback ${extraclass} `}>
            <div className="inte-Fallback--inner">
                <Card>
                    <div className={`inte-Fallback--${FallBackHeight}`}>
                        <div className="inte-Fallback--inner">
                            <FlexLayout direction="vertical" spacing="extraTight" halign="center">
                                <div className="inte-Fallback--illustration">
                                    {props.illustration}
                                </div>
                                {props.title && (
                                    <div className="inte-Fallback--title">
                                        <TextStyles
                                            alignment="center"
                                            fontweight="extraBold"
                                            subheadingTypes="XS-1.6"
                                            textcolor="dark"
                                            type="SubHeading"
                                            utility="none"
                                        >
                                            {props.title}
                                        </TextStyles>
                                    </div>
                                )}
                                {props.subTitle && (
                                    <div className="inte-Fallback--subtitle">
                                        <TextStyles
                                            alignment="center"
                                            fontweight="normal"
                                            paragraphTypes="MD-1.4"
                                            textcolor="light"
                                            type="Paragraph"
                                            utility="none">
                                            {props.subTitle}
                                        </TextStyles>
                                    </div>
                                )}
                                {props.action && (
                                    <div className="inte-Fallback--action">
                                        <FlexLayout halign="center">
                                            {props.action}
                                        </FlexLayout>
                                    </div>
                                )}
                            </FlexLayout>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
};

export default FallBack;
