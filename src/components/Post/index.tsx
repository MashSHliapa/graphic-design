import { PostData } from '../../types/interfaces'

export function Post(props: { post: PostData }) {
  return (
    <div className="server__item">
      <img src={props.post.image} alt="img"></img>
    </div>
  )
}
