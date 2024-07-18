import FormUser from "../components/formUser";
import { Link, redirect } from "react-router-dom";

export default function User(){
    const handleSucess = async() => {
        return redirect("/list_user",302)
    }
    return (
        <>
            <Link to={"/list_user"}>Liste des utilisteurs</Link>
            <FormUser
                onSuccess={handleSucess}
            />
        </>
    )
}