import './Title.scss'
export function Title(props:string) {
  return (
    <div className="title">
      <div className="title__container _container">
        <h1 className="title__title">{props.children}</h1>
      </div>
    </div>
  )
}
