import * as yup from 'yup'

// schema to tell what should be expected
const formSchema = yup.object().shape({
    // name is required with a minimum of 2 chars
    name: yup.string()
            .required('name is a required field')
            .min(2, 'name must be at least 2 characters'),
    // size is required to be one of the items in the list
    size: yup.string()
            .oneOf(['small', 'medium', 'large'], 'please select a size'),
    // sauce is required to be one of the items in the list
    sauce: yup.string()
            .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'please select a sauce'),
    // the rest of the values are not required but they are expected
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    special: yup.string()
})

export default formSchema