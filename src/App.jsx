import UserList from "./redux/features/UserList"

function App() {

  return (
    <>
      <div className="h-screen bg-slate-950">
        <div className="grid place-items-center pt-20 gap-4">
          <h2 className="text-gray-200 text-3xl font-bold"> Fetching User List Using Redux </h2>
          <div className="px-10 container max-w-4xl mx-auto">
            <UserList />
          </div>
        </div>

      </div>
    </>
  )
}

export default App
