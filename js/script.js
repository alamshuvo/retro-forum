const postContainer=document.getElementById('post-container');
const cardRight=document.getElementById('card-right');
const count=document.getElementById('count');
let totalCount=0;

const allPost= async()=>{
    const res=await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data=await res.json();
    data.posts.forEach(post => {
        console.log(post);
        const div=document.createElement('div');
      
        div.innerHTML=`
        <div class="card lg:card-side  shadow-xl lg:p-10">
              <!-- indicator -->
              <div class="indicator ">
                <span id="active" class="indicator-item badge ${post.isActive ? 'bg-green-500':'bg-red-400'}"></span> 
                <div class="grid  w-32 h-32 bg-base-300 place-items-center "><img src="${post.image} " alt="" srcset=""></div>
              </div>
          
              <div class="card-body flex lg:gap-10 gap-4">
                <div class="flex gap-10 text-xl font-bold">
                  <h1>#${post.category}</h1>
                  <p>Author: ${post.author.name}</p>
                </div>
                <p class="text-[#12132D] text-[20px] font-extrabold">${post.title}</p>
                <p>${post.description}</p>
                <hr>
                <div class="flex justify-center lg:justify-between flex-col lg:flex-row gap-5">
                  <div class="flex gap-5 ">
                  <div class="flex flex-row justify-center items-center gap-2">
                    <i class="fa-regular fa-comment"></i>
                    <p>${post.comment_count}</p>
                  </div>
                  <div class="flex flex-row justify-center items-center gap-2">
                    <i class="fa-regular fa-eye"></i>
                    <p>${post.view_count}</p>
                  </div>
                  <div class="flex flex-row justify-center items-center gap-2">
                    <i class="fa-regular fa-clock"></i>
                    <p>${post.posted_time} min</p>
                  </div>
                </div>
                  <div class="text-center">
                    <button onclick="handleBtn(('${post.title}'),(${post.view_count}))" class="btn btn-circle  bg-green-400">
                      <i class="fa-regular fa-envelope-open"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
        `
       
      
        postContainer.appendChild(div);
     
    });
  
}



const handleBtn=(a,b)=>{
    totalCount++;
    count.innerText=totalCount
  console.log("fff");
  const div=document.createElement("div");
  div.innerHTML=`
  <div class="flex lg:justify-between lg:flex-row flex-col justify-center my-10 bg-white p-7 rounded-2xl">
              <h1 class="text-center lg:text-start">${a}</h1>
              <div class="flex flex-row justify-center items-center gap-2">
                <i class="fa-regular fa-eye"></i>
                <p>${b}</p>
              </div>
            </div>
  `;
 
  
  cardRight.appendChild(div)
}


allPost()