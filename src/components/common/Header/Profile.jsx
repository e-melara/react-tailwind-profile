const Profile = () => {
  return (
    <div className={"flex"}>
      <button className={"rounded-full mr-4 text-slate-500 transition-colors hover:text-sky-500"}>
        <img className={"h-6 w-6"} src="/imgs/icons/ligth.svg" alt="icon ligth page" />
      </button>
      <button
        className={"rounded-full text-slate-500 transition-colors hover:text-sky-500 focus:ring-2 focus:ring-slate-200 focus:ring-offset-1"}>
        <img
          src="https://ui-avatars.com/api/?name=Edwin+Melara"
          alt="Logo"
          className="w-8 h-8 rounded-full"
        />
      </button>
    </div>
  )
}

export default Profile