import { z } from 'zod'

const registerUserValidationSchema = z.object({
    body: z.object({
        user: z.object({
            name: z.string({ required_error: 'Name is required' }),
            email: z.string({ required_error: 'Email is required' }),
            password: z.string({
                required_error: 'Password is required',
            }),
        }),
    }),
})

export const UserValidations = {
    registerUserValidationSchema,
}
