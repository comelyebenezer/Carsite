import Header from '@/components/Header'
import { Car } from 'lucide-react'
import React from 'react'
import carDetails from './../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from './components/DropdownField'
import TextAreaField from './components/TextAreaField'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@radix-ui/react-select'
import features from './../Shared/features.json'
import { Checkbox } from "@/components/ui/checkbox"


function AddListing() {
  return (
    <div>
        <Header />

        <div className='px-10 md:px-20 my-1'>
            <h2 className='font-bold text-4xl'> Add New Listing </h2>

            <form action="" className='p-10 border rounded-xl mt-10'>
                {/* Car Details  */}

                <div>
                    <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        {carDetails.carDetails.map((item, index) => (
                          <div key={index}>
                            <label className='text-sm'> {item.label} {item.required && <span className='text-red-600'>*</span>}</label>
                            {item.fieldType== 'text'|| item.fieldType== 'number'
                            ?<InputField item={item}/>
                            :item.fieldType=='dropdown'? <DropdownField item={item}/>
                            :item.fieldType=='textarea'? <Textarea  item={item}/>
                            : null }
                          </div>

                        ))}
                    </div>
                </div>
                <Separator className='my-6'/>

                {/* Features List  */}
                    <div>
                      <h2 className='font-medium text-xl my-6'>Features</h2>
                      <div>
                        {features.features.map((item, index)=>(
                          <div key={index}>
                              <Checkbox /> <h2>{item.label}</h2>

                          </div>
                        ))}
                      </div>
                    </div>

                {/* Car images  */}
            </form>

        </div>
    </div>
  )
} 

export default AddListing