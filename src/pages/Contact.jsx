 import { Formik, ErrorMessage, Form, Field } from 'formik'
 import * as Yup from 'yup';
 import Select from 'react-select'; 
 import { useState } from 'react';

const Contact = () => {

    const [selectedOption, setSelectedOption] = useState(null)

    const options = [
        { value: 'generalInquiry', label: 'General Inquiry' },
        { value: 'feedback', label: 'Article Feedback' },
        { value: 'postSubmission', label: 'Guest Post/Submissions' },
        { value: 'advert', label: 'Advertising and Sponsorship' },
        { value: 'issues', label: 'Technical Issues' },
        { value: 'media', label: 'Press/Media Inquiries' },
        { value: 'content', label: 'Content Requests' },
        { value: 'partnership', label: 'Partnership Inquiries' },
        { value: 'privacy', label: 'Privacy and Data Requests' },
    ]

    const handleUptionChange = (option, formik) => {
        setSelectedOption(option)
        option ? formik.setFieldValue('subject', option.label) : formik.setFieldValue('subject', '')
    }

    const initialValues = {
        firstname: '',
        email: '',
        subject: '',
        message: ''
    }

    const validationSchema = Yup.object({
        firstname: Yup.string().min(3, 'First Name must be at least 3 characters').required('Required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        subject: Yup.string().required('Required'),
        message: Yup.string().required('Required')
    })

    const handleSubmit = (values, actions) => {
        console.log(values)
        setSelectedOption(null)
        actions.resetForm()
    }

  return (
    <div className='container mx-auto flex flex-col lg:justify-center gap-20 lg:px-8 py-20'>
        <section className='lg:w-[770px] mx-auto flex flex-col items-center justify-center  lg:gap-8  text-center'>
            <h3 className='uppercase  text-base font-black'>Contact us</h3>
            <h2 className='font-bold text-5xl'>Let’s Start a Conversation</h2>
            <p className='text-[#6D6E7]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </section>
        <section>
            <div className="bg-[#592EA9] lg:w-[770px] mx-auto flex gap-10 px-16 py-12">
                <div className=" w-full flex flex-col gap-3">
                    <p className='text-sm text-gray-400'>Working hours</p>
                    <div className='border-b border-gray-500 ' > </div>
                    <h2 className='font-bold text-2xl text-white'>Monday To Friday</h2>
                    <h2  className='font-bold text-2xl text-white'>9:00 AM to 8:00 PM </h2>
                    <p className="text-gray-400">Our Support Team is available 24/7</p>
                </div>
                <div className="w-full  flex flex-col gap-3">
                    <p className='text-sm text-gray-400'>Contact Us</p>
                    <div className='border-b border-gray-500 ' > </div> 
                    <h2 className='font-bold text-2xl text-white'>020 7993 2905</h2>
                    <p className="text-gray-400">hello@finsweet.com</p>
                </div>
            </div>
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                     >
                { (formik) => (
                    <Form className='lg:w-[770px] mx-auto flex flex-col gap-4 py-10'>
                        <div className="w-full">
                            <Field type="text" name="firstname" placeholder="Name" className='lg:p-6 border border-gray-300 w-full outline-none' />
                            <ErrorMessage name="firstname" component="div" className='text-red-600 text-sm' />
                                                                    </div>
                            <div className=" ">
                                <Field type="email" name="email" placeholder="Email"  className='lg:p-6 border border-gray-300 w-full outline-none'  />
                                                    <ErrorMessage name="email" component="div" className='text-red-600 text-sm' />
                        </div>
                        <div className=" ">
                           
                          
                            <Select
                                options={options}
                                value={selectedOption}
                                onChange={(option) => handleUptionChange(option, formik)}   
                                isClearable
                                onClear={() => setSelectedOption(null)}
                                placeholder="Subject"
                                // className='lg:p-6 border border-gray-300 w-full outline-none'
                                styles = {{
                                    control: (baseStyles,  ) => ({
                                ...baseStyles,
                                borderColor:  '#ccc',
                                border:  '1px solid #ccc' ,
                                outline: 'none',
                                boxShadow: 'none',
                                width: '100%',
                                padding: '1rem',
                                borderRadius: '0px',
                                ':focus': {
                                borderColor: '#ccc', // Keep the red border even on focus
                                boxShadow: 'none', // Remove box-shadow on focus
                                },
                                ':hover': {
                                borderColor: '#ccc', // Keep the gray border even on hover
                                }
                            }),
                            option: (baseStyles, state) => ({
                                ...baseStyles,
                                backgroundColor: state.isFocused 
                                ? '#FFD050' 
                                : state.isSelected
                                ? '#FEF3C7'
                                : '#fff',
                                color: state.isFocused ? '#fff' : '#000',
                                cursor: 'pointer',
                            }),}}
                            />
                            <ErrorMessage name="subject" component="div" className='text-red-600 text-sm mt-2' />
                        </div>
                        <div className=" ">
                            <Field  as="textarea"  rows="4"  cols="50" name="message" placeholder="Message"  className='lg:p-6 border border-gray-300 w-full outline-none'  />
                            <ErrorMessage name="message" component="div" className='text-red-600 text-sm mt-2' />
                        </div>
                        <button type="submit" className='lg:p-4 border border-gray-300 bg-[#FFD050] font-bold text-2xl'>Send Message</button>
                    </Form>)
                }
            </Formik>
        </section>
    </div>
  )
}

export default Contact