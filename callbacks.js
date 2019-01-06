
const posts = [
    {title: "Post 1", body: "body 1"}, 
    {title: "Post 2", body: "body 2"}, 
    {title: "Post 3", body: "body 3"}];

function getPosts(){
    setTimeout(() => {
      let output = '';
      posts.forEach((post, index) =>{
        output += `<li> ${post.title} </li>`
      });
      document.body.innerHTML = output;
    }, 1000);  

}

function createPost(post, callback){
    setTimeout(() => {
      posts.push(post);
      callback();
    }, 2000)
    
}


createPost({title: "Post 4", body: "body 4"}, getPosts);