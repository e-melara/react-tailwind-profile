import PropTypes from "prop-types"

const Navigation = (props) => {
  const { items } = props
  return (
    <div className={"-ml-4 flex justify-center items-center"}>
      <a href="#" className={"text-sky-500 hover:rotate-12 duration-200"}>
        <img src="/imgs/icons/logo.svg" alt="logo apps" className={"h-8 w-8"} />
      </a>
      <nav className={"md:flex space-x-8 ml-8 hidden"}>
        {items.map((item, index) => {
          return <a key={index} href={item.url}
                    className={"px-3 py-2 text-slate-600 hover:text-sky-500"}>{item.name}</a>
        })}
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

export default Navigation