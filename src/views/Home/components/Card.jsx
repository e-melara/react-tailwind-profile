import PropTypes from "prop-types"

const Card = ({ image, title, subtitle, description, author }) => {
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
      <div className={"flex space-x-2 p-5"}>
        <img className={"h-10 w-10 rounded-full"} src={`https://ui-avatars.com/api?name=${author.name}`}
             alt={author.name} />
        <div className={"flex flex-col justify-center"}>
          <span className={"text-sm leading-4 font-semibold text-slate-600"}>{author.name}</span>
          <span className={"text-sm text-slate-500"}>{author.date}</span>
        </div>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
}

export default Card