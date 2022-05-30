$(document).ready(() => {
  $("button").click(() => {console.log("hi")})
  $("li").click(() => {
    if (event.target.id == "loc") {
      $("iframe").attr('src', "https://www.youtube.com/embed/H-kjyRMXHjE")
    } else if (event.target.id == "gbf") {
      $("iframe").attr('src', "https://www.youtube.com/embed/SNKGeqO6UHw")
    } else if (event.target.id == "mbj") {
      $("iframe").attr('src', "https://www.youtube.com/embed/TiFxoiVKYO8")
    }
  })
})
