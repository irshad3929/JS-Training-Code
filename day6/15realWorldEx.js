async function userInfo(userId){
    try {
        //fetch user data
        let userResponse = await fetch("https://api.example.com/users/${userId}")
        if(!userResponse){
            throw new Error("failed to fetch user response");
        }else{
            var user = userResponse.json();
        }

        //Fetch user post
        let postResponse = await fetch("https://api.example.com/users/${userId}/post");
        if(!postResponse){
            throw new Error("failed to fetch user post")
        }else{
            var post = postResponse.json();
        }

        return {user,post};
        
    } catch (error) {
        console.log("error occured",error);
    }
}

userInfo(1).then((data)=>{
    if(data){
        console.log("User: ",data.user);
        console.log("Post: ",data.post);
    }
});