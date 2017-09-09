# Hexo Theme Icer

A simple theme for [Hexo](http://hexo.io).

## Demo 

[ICE.GS](https://ice.gs)

## Version

1.0.0

## Dependencies

This theme depends on the following Hexo plugins to work correctly:

- hexo-generator-tag
- hexo-renderer-ejs
- hexo-renderer-sass
- hexo-renderer-marked
- hexo-pagination


- hexo-generator-search

The blog root path  `_config.yml` you can set:

- Config search  (depend on hexo-generator-search)
- Config disqus or gitalk commit

```
# Search
search:
  path: search.json
  field: post

## Commit
#disqus:
#  shortname: ggice

#Config gitalk see https://github.com/gitalk/gitalk
gitalk:
  admin: ['GGICE']
```

Please make sure these plugins are installed before generate the site.

## Customization

The theme path `_config.yml` you can set: 

- Navigation
- Friendly link
- Social account
- Local search
- Favicon

```
# Navigation
navigation:
- name: home
  slug: home
  url: /
- name: web development
  slug: web development
  url: /tags/web-development/
- name: soft
  slug: soft
  url: /tags/soft/
- name: os
  slug: os
  url: /tags/os/
- name: others
  slug: others
  url: /tags/others/
- name: archives
  slug: archives
  url: /archives

# Friendly link
links:
  - name: Tian1x0
    url: http://1x0.xyz/
  - name: Hankzhou
    url: http://www.royalmice.com/hankzhou/
  - name: 设计有点货
    url: http://sjydh.me/
  - name: Web fundamentals
    url: https://developers.google.com/web/fundamentals/

# Social account
social:
- slug: twitter
  url: https://twitter.com/iggice
- slug: github
  url: https://github.com/ggice
- slug: facebook
  url: # https://www.facebook.com/some
- slug: linkedin
  url: # https://www.linkedin.com/some
- slug: weibo
  url: #http://weibo.com/309683593
- slug: tumblr
  url: http://ggice.tumblr.com/
- slug: dribbble
  url: https://dribbble.com/ggice
- slug: email
  url: mailto:i@ice.gs
- slug: rss
	url: /atom.xml

# Google_analytics
google_analytics: UA-93986029-1

# Local search
local_search:
  enable: true
  
# Favicon
#favicon: /image/favicon.ico
```



## Copyright

Some code used in this theme:

- [hexo-theme-typescript](https://github.com/artchen/hexo-theme-typescript) 

Copyright © GGICE

Please do not remove the "Theme [icer](https://github.com/GGICE/hexo-icer) designed & coded by [GGICE](https://ice.gs/)" text and links.

请不要删除页面底部的作者信息和链接。

