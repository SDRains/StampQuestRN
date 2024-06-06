import {Redirect} from "expo-router";

export default function TabIndex() {
    const isAuthenticated = false
    return isAuthenticated ? <Redirect href="/home/" /> : <Redirect href={"/loginPage"} />
}