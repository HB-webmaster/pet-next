import Heading from "../../components/Heading/Heading";
import PostItem from "../../components/Post-item/PostItem";

const Blog = ({ posts = [] }) => {
    return (
        <div className="container">
           <Heading text="Post page title"/>
           <PostItem/>
        </div>  
    )
}

export default Blog;