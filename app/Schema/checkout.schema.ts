import * as z from 'zod';

export const CheckoutSchema = z.object({
    details:z.string().nonempty("Details is requried"),
    city:z.string().nonempty("City is requried"),
    phone:z.string().nonempty("Phone is requried"),
})