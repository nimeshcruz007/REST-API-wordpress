var portfolioPostsBtn = document.getElementById('portfolio-posts-btn');
var portfolioPostscont = document.getElementById('portfolio-posts-container');


if(portfolioPostsBtn){
    portfolioPostsBtn.addEventListener('click',()=>{
        var request = new XMLHttpRequest();
        request.open('GET','http://test-site.local/wp-json/wp/v2/posts');
        request.send();
        request.onload = () => {
            if(request.status){
                var data = JSON.parse(request.responseText);
                insertData(data);
                portfolioPostsBtn.remove();
            }
            else{
                console.log("There was an unexpected error in the server");
            }
        }
        request.onerror = function(){
            console.log("connection error");
        }
    })

    function insertData(data){
        var insertHtml = '';
        data.forEach(value => {
            insertHtml += '<h2>' +value.title.rendered + '</h2>';
            insertHtml += value.content.rendered;
        });
        portfolioPostscont.innerHTML = insertHtml;
    }
}


//Quick add form

var quickaddbutton = document.getElementById('quick-add-btn');


if(quickaddbutton) {
    quickaddbutton.addEventListener('click',apiRequestforPostCreation)
}
//         var createPost = new XMLHttpRequest();
//         createPost.open('POST','https://test-site.local/wp-json/wp/v2/posts');
//         createPost.setRequestHeader('X-WP-Nonce',magicData.nonce);
//         createPost.setRequestHeader('Authorization','Basic')
//         createPost.setRequestHeader('Content-Type',"application/json;charset=UTF-8");
//         console.log(createPost.DONE)
//         createPost.send(JSON.stringify(postData));
//     })
// }



function apiRequestforPostCreation(){
var postData = {
    "title": document.getElementById('quick-form-title').value,
    "content": document.getElementById('quick-form-post-content').value,
    "status":"publish"
}

var writePost = fetch('https://test-site.local/wp-json/wp/v2/posts',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'accept':'text/plain',
        'Authorization':`Bearer ${localStorage.getItem('jwt')}`
    },
    body:JSON.stringify(postData),
});

writePost.then((res)=>{
    return res.json();
}).then((res)=>{
    console.log(res);
})

}
