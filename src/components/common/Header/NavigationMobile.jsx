import PropTypes from "prop-types"

const NavigationMobile = ({ items }) => {
  return (
    <div className={"space-y-2 border-t pb-3 pt-2 md:hidden hidden"}>
      {
        items.map((item, index) => (
          <a key={index} href={item.href}
             className={"block hover:bg-sky-500 hover:text-white px-2 py-3 rounded-md transition-colors duration-200"}>{item.name}</a>
        ))
      }
    </div>
  )
}

NavigationMobile.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired
    })
  ).isRequired
}

export default NavigationMobile