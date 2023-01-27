import { useEffect } from '@storybook/addons'
import React, { useState } from 'react'
import Radio from './Radio'


export interface radioI {
    label?: string
    description?: string
    value?: any
}

export interface radioGrpI {
    label?: string | React.ReactNode
    data: radioI[]
    name?: string
    value?:any
}

const RadioGrp = ({ data, label, name , value }: radioGrpI) => {

    const [currentChecked , setCurrentchecked] = useState(value)


    const radioClickHandler = (val : any) => {
        console.log(val);
        setCurrentchecked(val)
    }

    // useEffect(()=>{
    //     setCurrentchecked(value)
    // },[value])


    return (
        <div>
            <h2>{label}</h2>
            {
                data.map((item: radioI, ind: number) => 
                    <Radio 
                        name={name} 
                        labelVal={item.label} 
                        description={item.description}
                        checked={item.value === currentChecked}
                        onClick={()=>radioClickHandler(item.value)}
                    />
                )
            }
        </div>
    )
}

export default RadioGrp