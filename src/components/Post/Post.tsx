import { PostData } from '../../types/interfaces';

export function Post(props: { post: PostData }) {
  return (
    <div className="post">
      <img src={props.post.image} alt="img"></img>
    </div>
  );
}
