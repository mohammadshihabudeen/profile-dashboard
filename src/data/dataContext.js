import { createContext, useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import api from "../api/api";
import dummyData from "./dummyData";
const DataContext = createContext({})
export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userDetails, setuserDetails] = useState(null)
    const [newUserDetails,setNewUserDetails] = useState(null)
    const [projectStatus, setProjectStatus] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [socialName, setSocialName] = useState(null)
    const [follow, setFollow] = useState(null)
    const [role, setRole] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("user");
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchData()
    }, [api])
    useEffect(() => {
        if (data) {
            console.log(data[0].userDetails)
            setLoading(true)
            setuserDetails(data[0].userDetails)
            setNewUserDetails(data[0].userDetails)
            setProjectStatus(data[1].projectStatus)
            setFollow(data[2].followStatus)
            setSocialName(data[0].userDetails[0].value)
            setRole(data[2].role)
            setLoading(false)
        }
    }, [data])
    const FormSubmitHandler = async () => {
        try {
            await api.patch(`user/${data[0].id}`, {"id": "1",
            "userDetails": newUserDetails});
          }
          catch (err) {
            console.log(err)
          }
        console.log(newUserDetails)
        setuserDetails(newUserDetails)
        setIsEdit(false)
        setSocialName(newUserDetails[0].value) 
    }
    return <DataContext.Provider
        value={{
            isEdit: isEdit, setIsEdit: setIsEdit,
            formOnSubmit: FormSubmitHandler,
            socialName: socialName, role: role, setRole: setRole, follow: follow, setFollow: setFollow,
            newUserDetails: newUserDetails,setNewUserDetails:setNewUserDetails,userDetails:userDetails,
            projectStatus: projectStatus,
            data,error,loading
        }}
    >{children}</DataContext.Provider>
}

export default DataContext