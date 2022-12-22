import React from 'react'
import Button from '../../components/Button/Button'
import { FlexLayout } from '../../components/FlexLayout'
import TextStyles from '../../components/TextStyles/TextStyles'

export default function Footer() {
  return (
    <div className="inte_Onboard--Footer">
    <FlexLayout valign="center" halign="center" spacing="extraTight">
        <TextStyles>
        CedCommerce Inc Product @2022. Need Help?
        </TextStyles>
        <Button type="TextButton">Get Support</Button>
    </FlexLayout>
    </div>
  )
}
