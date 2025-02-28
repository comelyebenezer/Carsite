import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  

function DropdownField({item,handleInputChange}) {
  return (
    <div>
        <Select onValueChange={(value)=>handleInputChange(item.name,value)}
          required={item.required}> 
            <SelectTrigger className="w-full">
                <SelectValue placeholder={item.label} />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                {item?.options?.map((option, index)=>(
                    <SelectItem value={option}>{option}</SelectItem>

                ))}
            </SelectContent>
        </Select>

    </div>
  )
}

export default DropdownField