

const listOfPosts = document.getElementById('posts-list') ;

const DisplayPost = () =>{
    //PostHolder , like a container that holds the HTML code
    const PostHolder = `
        <div class="post">
                <header>
                    <div class="tittle">
                        <img src="images/person1.jpg" alt="" height="50px" width="50px">
                        <div class="sub-tittle">
                            <span class="name">Rita Joezif</span>
                            <span class="sub">Super Artist</span>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </header>

                <div class="content">
                    <img src="images/post1.jpg" alt="">

                    <div class="under-photo">
                        <ul class="right">
                            <li><i class="fa-regular fa-heart"></i></li>
                            <li><i class="fa-regular fa-comment"></i></li>
                            <li><i class="fa-regular fa-paper-plane"></i></li>
                            <li><i class="fa-regular fa-bookmark"></i></li>

                        </ul>
                    </div>
                    <p class="userName"><b>Rita Joezif :&nbsp;</b>The image shows a dreamy cityscape under a moonlit
                        sky
                        with gothic buildings and warm lights, creating a magical atmosphere. <span class="hash">#
                            visit
                            us</span></p>
                    <p class="comments">View all 10 comments .</p>
                    <p class="comments">3 hours ago . <span>See Translation</span></p>
                </div>
            </div>
    `
    listOfPosts.insertAdjacentHTML('beforeend',PostHolder);

}

// DisplayPost();
// DisplayPost();
// DisplayPost();
// DisplayPost();
// DisplayPost();
// DisplayPost();
// DisplayPost();
// DisplayPost();
for (let i = 0; i < 20; i++) {
    DisplayPost();
    
}


