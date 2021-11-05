function post() {
    let file = $("#input-pic")[0].files[0];
    let title = $("#post-title").val();
    let comment = $("#textarea-post").val();

    let form_data = new FormData();

    form_data.append("file_give", file);
    form_data.append("title_give", title);
    form_data.append("comment_give", comment);

    $.ajax({
        type: "POST",
        url: "/posting",
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert(response["msg"]);
            $("#modal-post").removeClass("is-active")
            window.location.reload()
        }
    });
}

function setThumbnail(value) {
    let file = $("#input-pic").val().split("\\");
    let file_name = file[file.length - 1];
    $("#file-name").text(file_name);

    if (value.files && value.files[0]) {
        let reader = new FileReader();
        reader.onload = function (e) {
            $("#preview-image").attr("src", e.target.result);
        }
        reader.readAsDataURL((value.files[0]));
    }
}

function time2str(date) {
    let today = new Date()
    let time = (today - date) / 1000 / 60  // 분

    if (time < 60) {
        return parseInt(time) + "분 전"
    }
    time = time / 60  // 시간
    if (time < 24) {
        return parseInt(time) + "시간 전"
    }
    time = time / 24
    if (time < 7) {
        return parseInt(time) + "일 전"
    }
    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
}

function num2str(count) {
    if (count > 10000) {
        return parseInt(count / 1000) + "k"
    }
    if (count > 500) {
        return parseInt(count / 100) / 10 + "k"
    }
    if (count == 0) {
        return ""
    }
    return count
}

function toggle_like(post_id, type) {
    console.log(post_id, type)
    let $a_like = $(`#${post_id} a[aria-label='${type}']`)
    let $i_like = $a_like.find("i")
    let class_s = {"heart": "fa-heart", "star": "fa-star", "like": "fa-thumbs-up"}
    let class_o = {"heart": "fa-heart-o", "star": "fa-star-o", "like": "fa-thumbs-o-up"}
    if ($i_like.hasClass(class_s[type])) {
        $.ajax({
            type: "POST",
            url: "/update_like",
            data: {
                post_id_give: post_id,
                type_give: type,
                action_give: "unlike"
            },
            success: function (response) {
                console.log("unlike")
                $i_like.addClass(class_o[type]).removeClass(class_s[type])
                $a_like.find("span.like-num").text(num2str(response["count"]))
            }
        })
    } else {
        $.ajax({
            type: "POST",
            url: "/update_like",
            data: {
                post_id_give: post_id,
                type_give: type,
                action_give: "like"
            },
            success: function (response) {
                console.log("like")
                $i_like.addClass(class_s[type]).removeClass(class_o[type])
                $a_like.find("span.like-num").text(num2str(response["count"]))
            }
        })

    }
}

function get_posts(username) {
    if (username == undefined) {
        username = ""
    }
    $("#post-box").empty()
    $.ajax({
        type: "GET",
        url: `/get_posts?username_give=${username}`,
        data: {},
        success: function (response) {
            if (response["result"] == "success") {
                let posts = response["posts"]
                for (let i = 0; i < posts.length; i++) {
                    let post = posts[i]
                    let time_post = new Date(post["date"])
                    let time_before = time2str(time_post)

                    let html_temp = `<div class="card" id="${post["_id"]}" style="width: 20%; height: 20%; position: relative; float:left; margin: 5px;" >
                                      <div class="card-image">
                                        <figure class="image is-4by3">
                                          <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                                        </figure>
                                      </div>
                                      <div class="card-content">
                                        <div class="media">
                                          <div class="media-left">
                                            <a class="image is-64x64" href="/user/${post['username']}">
                                                <img class="is-rounded" src="/static/profile_pics/${post['profile_pic_real']}" alt="Image">
                                            </a>
                                          </div>
                                          <div class="media-content">
                                            <p class="title is-4">${post['profile_name']}</p>
                                            <p class="subtitle is-6">@${post['username']}</p>
                                          </div>
                                        </div>
                                        <div class="content">
                                          ${post['comment']}
                                          <br>
                                          <time datetime="2016-1-1">${time_before}</time>
                                        </div>
                                      </div>
                                    </div>`
                    $("#post-box").append(html_temp)
                }
            }
        }
    })
}


/*삭제*/
function deleteCard(post_id) {
    let id_value = post_id;

    $.ajax({
        type: "DELETE",
        url: "/deleteCard",
        data: {
            id_value_give: id_value
        },
        success: function (response) {
            alert(response["msg"]);
            window.location.reload()
        }
    });
}
