import { useEffect } from "react";
import { MdDeleteForever } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, deleteUser } from "./userSlice";

const UserList = () => {

    // Retrieves the Redux store's dispatch function for updating state with actions.
    const dispatch = useDispatch();


    // The line uses useSelector to extract users, loading, and error from the store.
    const { users, loading, error } = useSelector((state) => state.users);


    // The useEffect hook dispatches getUsers action on component mount or dispatch change, fetching users' data.
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);


    // handleDeleteUser dispatches deleteUser action to delete specific user.
    const handdleDeleteUser = (id) => {
        dispatch(deleteUser({ id }))
    }

    let content;

    // Loading state becomes true during pending user data fetching, indicating ongoing progress.
    if (loading) {
        content = (
            <div className="flex justify-center pt-20 items-center">
                <span className='mr-3 border-t-transparent border-solid animate-spin rounded-full border-slate-400 border-2 h-6 w-6'></span>
                <p className="text-gray-400 text-xl font-semibold">Loading...</p>
            </div>
        )
    }


    // Error state reflects the error message when users API request is rejected, indicating a fetching error.
    if (error) {
        content = (
            <div className="flex flex-col items-center gap-2 justify-center pt-20">
                <p className="text-red-700 text-xl font-semibold">{error}</p>
                <span className="text-gray-500 text-md  "> Please check the API.</span>
            </div>
        )
    }


    // If API request is fulfilled but response status is 404, "No Users Found" message is set for empty data display.
    if (users?.noUsers) {
        content = (
            <div className="flex flex-col items-center gap-2 justify-center pt-20">
                <p className="text-red-700 text-2xl font-bold" >{users?.noUsers}</p>
                <span className="text-gray-500 text-lg  "> Please check the API.</span>
            </div>
        )
    }

    /* When users API request is successful, this code renders user data as cards, 
    displaying name, email, and phone number in an appealing format.*/
    if (users.length) {
        content = (
            <div className='grid gap-5 md:grid-cols-2 max-h-[600px] overflow-auto p-5'>
                {users.map((user) => (
                    <div key={user.id} className='rounded flex justify-between p-5 items-center bg-slate-800'>
                        <div className="text-gray-400 text-gray text-left flex flex-col gap-2">
                            <p className="text-gray-300 text-xl font-semibold">{user.name}</p>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                        </div>
                        <div>
                            <button
                                onClick={() => handdleDeleteUser(user.id)}
                                className="text-gray-500 p-2 rounded-full hover:bg-slate-700 hover:text-gray-300"
                                title="Delete User"
                            >
                                <MdDeleteForever size={22} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }


    return content
}

export default UserList