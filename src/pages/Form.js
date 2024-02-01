import { useForm } from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

export const Form = () => {


    const schema = yup.object().shape({
        fullName : yup.string().required("your full name is required"),
        email: yup.string().email().required("insert an good email"),
        age: yup.number().positive().integer().min(18).required("you must be 18 plus"),
        password: yup.string().min(4).max(20).required("valid password pls"),
        Cpassword: yup.string().min(4).oneOf([yup.ref("password"), null], "the password is not matching").required()

    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data)=>{
        console.log(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name here..." {...register("fullName")}/>
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="email..." {...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="age..." {...register("age")}/>
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="confirm password..." {...register("Cpassword")}/>
            <p>{errors.Cpassword?.message}</p>
            <input type="submit"/>
        </form>
    )
}
