(function () {
  var searchEl = document.querySelector('.search-do'),
      searchWrap = document.querySelector('.search-wrap'),
      searchContent = document.querySelector('.search-content'),
      inputEl = searchWrap.querySelector('input'),
      resultEl = searchWrap.querySelector('.search-result'),
      oldResultElString = resultEl.innerHTML,
      postData;
  
  function showSearch (e) {
    e.preventDefault();
    searchWrap.style.display = 'flex';
    inputEl.focus();
    getSearchData();
  }

  function hideSearch () {
    searchWrap.style.display = 'none';
    resultEl.innerHTML = oldResultElString;
    postData = null;
  }

  function indexOfIgnoreTransform (a, b) {
    a = (a || '').toLocaleLowerCase();
    b = (b || '').toLocaleLowerCase();

    return a.indexOf(b) > -1;
  }

  function searchFromJson(data, key) {
    if (!data || data.length < 1 || !key) {
      return;
    }
    return data.filter(function(post) {
      if (indexOfIgnoreTransform(post.title, key)) {
        return true;
      }
      if (indexOfIgnoreTransform(post.content, key)) {
        return true;
      }
    })
  }

  function render(data) {
    if (!data || data.length < 1) {
      return resultEl.innerHTML = '<div class="search-no">NOT FIND!</div>';
    }
    var htmlString = '',
      tempEl = document.createElement('div');

    data.forEach(function(post) {
      tempEl.innerHTML = (post.content || '').slice(0, 100)
      htmlString += '<li data-url="' + post.url + '"' + '><h3>' + 
        post.title + '</h3><p>' + tempEl.innerText + '</p></li>'
    });

    resultEl.innerHTML = htmlString;
  }

  function getSearchData (callback) {
    if (postData) {
      callback && callback(postData);
      return;
    }
    fetch('/search.json').then(function (respons) {
      respons.json().then(function(data){
        postData = data;
        callback && callback(postData);
      }); 
    }).catch(function() {
      callback && (resultEl.innerHTML = 'An error has occurred！');
    });
  }

  function doSearch (e) {
    if (e.isComposing) {
      return;
    }
    if (!e.target.value) {
      resultEl.innerHTML = oldResultElString;
      return;
    }
    getSearchData(function(data){
      render(searchFromJson(data, e.target.value));
    });
  }

  function goto (url) {
    window.location.href = url;
  }

  function gotoSearchResult(e) {
    e.stopPropagation();
    var el = e.target;

    if (el.tagName !== 'LI') {
      el = el.parentNode;
    }
    if (el.tagName !== 'LI' || !el.dataset.url) {
      return;
    }
    goto(window.location.origin + el.dataset.url);
  }

  function onDocKeydown (e) {
    if (e.keyCode === 27) {
      hideSearch();
    }
  }

  searchEl.addEventListener('click', showSearch);
  inputEl.addEventListener('input', doSearch);
  searchWrap.addEventListener('click', hideSearch);
  searchContent.addEventListener('click', gotoSearchResult);
  inputEl.addEventListener('compositionend', doSearch);
  document.addEventListener('keydown', onDocKeydown);
})();