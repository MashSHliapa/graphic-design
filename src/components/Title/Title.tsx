import './Title.scss'
export function Title(props: { children: React.ReactNode }) {
  return (
    <div className="title">
      <h2 className="title__title">{props.children}</h2>
    </div>
  )
}
