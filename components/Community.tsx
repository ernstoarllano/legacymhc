import { Community } from 'interfaces/Community'

const Community = ({
  id,
  category,
  title,
  city,
  state,
  website,
}: Community) => {
  return (
    <div className="flex flex-col">
      <div>Image</div>
      <div className="flex flex-col">
        <span>{category}</span>
        <h3>
          <a href={website} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
        <span>
          {city}, {state}
        </span>
      </div>
    </div>
  )
}

export default Community
