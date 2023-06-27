

const Person = ({ id,name,age,image,removeItem}) => {
  return (
      <article className="person">
          <img src={image} alt={name} className="img" />
          <div>
              <h4>{name}</h4>
              <p>{ age}</p>
          </div>
          <button className="btn btn-block" onClick={()=>removeItem(id)}>DeletePeople</button>
    </article>
  )
}
export default Person