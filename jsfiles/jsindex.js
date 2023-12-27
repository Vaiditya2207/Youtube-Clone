  function click_thumbnail_1() {
    window.location.href = 'inner-pages/video-1.html'
  }

  function mouse_thumbnail_1(x, image) {
    if (x === 1){
      image.src = "movingthumbnail/video-1.webp"
    }
    else if (x === 2) {
      image.src = "thumbnails/video-1.jpg"
    }
  }

  function click_thumbnail_2() {
    window.location.href = 'inner-pages/video-2.html'
  }

  function mouse_thumbnail_2(x, image) {
    if (x === 1){
      image.src = "movingthumbnail/video-2.webp"
    }
    else if (x === 2) {
      image.src = "thumbnails/video-2.jpg"
    }
  }

  function click_thumbnail_3() {
    window.location.href = 'inner-pages/video-3.html'
  }

  function mouse_thumbnail_3(x, image) {
    if (x === 1){
      image.src = "movingthumbnail/video-3.webp"
    }
    else if (x === 2) {
      image.src = "thumbnails/video-3.jpg"
    }
  }

  function click_thumbnail_4() {
    window.location.href = 'inner-pages/video-4.html'
  }

  function mouse_thumbnail_4(x, image) {
    if (x === 1){
      image.src = "movingthumbnail/video-4.webp"
    }
    else if (x === 2) {
      image.src = "thumbnails/video-4.webp"
    }
  }

  function click_thumbnail_5() {
    window.location.href = 'inner-pages/video-5.html'
  }

  function mouse_thumbnail_5(x, image) {
    if (x === 1){
      image.src = "movingthumbnail/video-5.webp";
    }
    else if (x === 2) {
      image.src = "thumbnails/video-5.webp";
    }
  }

  function click_thumbnail_6() {
    window.location.href = 'inner-pages/video-6.html';
  }

  function mouse_thumbnail_6(x, image) {
    if (x === 1){
      image.src = "movingthumbnail/video-6.webp";
    }
    else if (x === 2) {
      image.src = "thumbnails/video-6.jpg";
    }
  }
  function searchBox() {
    quarry = document.getElementById("searchBar").value;
    localStorage.setItem("search", quarry); 
    window.location.href = "inner-pages/search.html";
  }