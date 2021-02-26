import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup.string()
            .required('name is a required field')
            .min(2, 'name must be at least 2 characters'),
    size: yup.string()
            .oneOf(['small', 'medium', 'large'], 'please select a size'),
    sauce: yup.string()
            .oneOf(['Original Red', 'Garlic Ranch', 'BBQ Sauce', 'Spinach Alfredo'], 'please select a sauce'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    special: yup.string()
})

export default formSchema