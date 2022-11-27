import {useState} from "react";
import {dummyPost, postInterface} from "./dummyPost";

const Post = () => {

	const [isPost , setPost] = useState<postInterface[]>(dummyPost);

	return <>
		{isPost.map( (item: postInterface, idx:number) => {
			return <div key={idx} className={"cardPostBox"}>
				{item.img ? <div className={"imgBox"} style={{
					backgroundImage: "url("+item.img+")"
				}}></div> : null}
				<p className={"descBox"}>{item.desc}</p>
				<p>{item.date}</p>
			</div>
		})}
	</>
}

export default Post