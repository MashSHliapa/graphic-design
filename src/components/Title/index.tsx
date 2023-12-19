import './Title.scss'
export function Title(props: { children: React.ReactNode }) {
  return (
    <div className="title">
      <div className="title__container _container">
        <div className="title__title">{props.children}</div>
      </div>
    </div>
  )
}
