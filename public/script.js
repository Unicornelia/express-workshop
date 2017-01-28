$(document).ready(function() {
    $.ajax({
        url: '/get-posts',
        dataType: 'json',
        success: function(data) {

            for (var post in data.blogpost) {
                var postDiv         = document.createElement('div');
                var postText        = document.createElement('p');
                var postDate = document.createElement('h5');
                var thumbnail       = document.createElement('img');
                var postContainer   = document.getElementsByClassName('post-container')[0];

                thumbnail.src = "./img/logo2.png";
                thumbnail.className = "thumbnail";
                console.log(data);
                postText.innerHTML = data.blogpost[post];
                postDate.innerHTML = new Date(parseInt(post, 10));
                debugger;
                postDiv.className = "post";

                postDiv.appendChild(thumbnail);
                postDiv.appendChild(postText);
                postContainer.appendChild(postDiv);
                postDiv.appendChild(postDate);
            }
        },
        error: function(error){
            console.log(error);
        }
    });
});
