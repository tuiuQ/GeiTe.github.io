$(function () {

  let gallery = $(".tz-gallery .row")
  let canvas = $(".tz-canvas .row")

  let videozhu = $(".tz-video .row")
  let videoci = $(".tz-video .row .ci")

  ajaxload(1, gallery, createHot)

  ajaxload(3, canvas, createCanvasItem)


  $.ajax({
    url: 'http://localhost:8989/api/hot/category',
    type: 'get',
    data: {
      "category_id": 2
    },
    success: res => {
      $.each(res, (index, ele) => {
        if (index > 4) return false
        if (index == 0) {
          videozhu.prepend(createVideoItem(ele))
        } else {
          videoci.append(createVideoItem(ele))
        }
      })
    }
  })

  function ajaxload(index, we, obj) {
    $.ajax({
      url: "http://localhost:8989/api/hot/category/",
      type: "get",
      data: {
        "category_id": index
      },
      success: res => {
        $.each(res, (index, ele) => {
          let item = obj(ele)
          we.append(item)
        })
        if (index == 1) {
          baguetteBox.run('.tz-gallery');
        }
      }
    })
  }

  function createHot(ele) {
    let item = $("<div class=\"col-sm-6 col-md-4\">\n" +
        "\t\t                <div class=\"thumbnail\">\n" +
        "\t\t                    <a class=\"lightbox\" href=\""+ele.thumbnail+"\">\n" +
        "\t\t                        <img src=\""+ele.thumbnail+"\" alt=\""+ele.name+"\">\n" +
        "\t\t                    </a>\n" +
        "\t\t                    <div class=\"caption\">\n" +
        "\t\t                        <h3 data-news-id='"+ele.nid+"'>"+ele.name+"</h3>\n" +
        "\t\t                        <p>"+ele.desc+"</p>\n" +
        "\t\t                    </div>\n" +
        "\t\t                </div>\n" +
        "\t\t            </div>")
    return item
  }

  function createVideoItem(ele) {
    let item = $("<div class=\"col-sm-6 col-md-6\">\n" +
        "\t\t    \t\t\t\t<div class=\"thumbnail\">\n" +
        "\t\t                    <a class=\"lightbox\" href=\"./playvideo.html?vided_id="+ele.vid+"\" name=\"V_Van\">\n" +
        "\t\t                        <img src=\""+ele.thumbnail+"\" alt=\"Park\">\n" +
        "\t\t                    </a>\n" +
        "\t\t                    <div class=\"caption\">\n" +
        "\t\t                        <h3>"+ele.name+"</h3>\n" +
        "\t\t                        <p>"+ele.desc+"</p>\n" +
        "\t\t                    </div>\n" +
        "\t\t                </div>\n" +
        "\t\t    \t\t\t</div>")

    return item
  }

  function createVideoZhuItem(ele) {

  }

  function createCanvasItem(ele) {
    let item = $("<div class=\"col-sm-6 col-md-2\"><a href=\"./playvideo.html?canvas_id="+ele.cid+"\" name=\"C_carrot\"><div><img src=\""+ele.thumbnail+"\" alt=\"\"class=\"img-rounded\"></div></a></div>")
    return item
  }
})