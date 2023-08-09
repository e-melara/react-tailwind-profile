import PropTypes from "prop-types"

const Card = ({ image, title, subtitle, description }) => {
  return (
    <article className={"bg-white flex flex-col rounded shadow overflow-hidden"}>
      <div className={"h-52"}>
        <img src={image} alt={title} className={"w-full h-full object-cover object-center"} />
      </div>
      <div className={"p-5 flex-1y space-y-3"}>
        <h3 className={"text-sm font-semibold text-sky-500"}>{title}</h3>
        <h2 className={"text-xl font-semibold text-slate-800 leading-tinght"}>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default Card