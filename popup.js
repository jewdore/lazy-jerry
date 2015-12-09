// Copyright (c) 2012 The Chromium Authors. All rights reserved.
  // Use of this source code is governed by a BSD-style license that can be
  // found in the LICENSE file.

  var req = new XMLHttpRequest();
  req.open(
      "GET",
      "https://api.flickr.com/services/rest/?" +
          "method=flickr.photos.search&" +
          "api_key=105d0d7849a00ff2c2ea65a03e474519&" +
          "text=hello%20world&" +
          "safe_search=1&" +  // 1 is "safe"
          "content_type=1&" +  // 1 is "photos only"
          "sort=relevance&" +  // another good one is "interestingness-desc"
          "per_page=20",
      true);
//  req.onload = showPhotos;
 // req.send(null);
  getAllTabs();
 /* function showPhotos() {
  var photos = req.responseXML.getElementsByTagName("photo");

    for (var i = 0, photo; photo = photos[i]; i++) {
      var img = document.createElement("img");
      img.src = constructImageURL(photo);
 //     document.body.appendChild(img);
    }
    getAllTabs();
  }*/
  function getAllTabs(){
      function callback(tabs){
        //console.log(tabs);
        for(var i=0,tab;tab=tabs[i];i++){
           var p = document.createElement("p");
           p.innerText=(i+1) +","+tab.title+":"+tab.url;
           document.body.appendChild(p);
        }
     }
     chrome.tabs.getAllInWindow(callback);
  }

  // See: http://www.flickr.com/services/api/misc.urls.html
  function constructImageURL(photo) {
    return "http://farm" + photo.getAttribute("farm") +
        ".static.flickr.com/" + photo.getAttribute("server") +
        "/" + photo.getAttribute("id") +
        "_" + photo.getAttribute("secret") +
        "_s.jpg";
  }
