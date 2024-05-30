import Post from '../model/post.js';


export const createPost= async(request,response)=>{
    try{
         const post = await new Post(request.body);
         post.save();

         return response.status(200).json('post saved successfully');
        }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const getallPosts= async(request,response)=>{
    let category = request.query.category;
    let Posts;
    try{
        if(category){
           
            Posts = await Post.find({categories:category});
        }
        else{
            
            Posts = await Post.find({});
        }
        

        return response.status(200).json(Posts);
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}

export const getPost= async(request,response)=>{
    try{
            let post = await Post.findById(request.params.id);
            return response.status(200).json(post);
    }
    catch(error){
        return response.status(500).json({msg:error.message});
    }
}
export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const deletePost = async (request, response) => {
    try {
         await Post.findByIdAndDelete(request.params.id); 
        //console.log("gh");
        //await post.delete();

        response.status(200).json('post deleted successfully');
    } catch (error) {
        console.log("dsgsb");
        response.status(500).json(error)
    }
}