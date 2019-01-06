
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

function createPost(post){
  return new Promise((resolve, reject) =>{
    
    setTimeout(() => {
      posts.push(post);
      const err = false;
      if(err){
        reject('Error: Something went wrong');
      } else{
        resolve();
      }
    }, 2000);
  });
   
}


// createPost({title: "Post 4", body: "body 4"})
// .then(getPosts)
// .catch(err => console.log(err));

async function init(){
  await createPost({title: "Post 4", body: "body 4"});
  getPosts();
}

init();