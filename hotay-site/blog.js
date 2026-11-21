// Builds the Blog list (blog.html) and a single post (post.html) from posts.js.
// You do not need to edit this file.
(function () {
  var posts = window.POSTS || [];

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text) e.textContent = text;
    return e;
  }

  function figure(item) {
    var fig = el('figure', 'post-figure');
    var img = el('img');
    img.src = item.image;
    img.alt = item.alt || item.caption || '';
    img.loading = 'lazy';
    fig.appendChild(img);
    if (item.caption) fig.appendChild(el('figcaption', '', item.caption));
    return fig;
  }

  function table(t) {
    var wrap = el('div', 'table-wrap');
    var tbl = el('table', 'results');
    if (t.caption) tbl.appendChild(el('caption', '', t.caption));
    var cols = t.cols || [];
    var head = el('thead');
    var hr = el('tr');
    (t.head || []).forEach(function (h, i) {
      var th = el('th', cols[i] || '', h);
      hr.appendChild(th);
    });
    head.appendChild(hr);
    tbl.appendChild(head);
    var body = el('tbody');
    (t.rows || []).forEach(function (row) {
      var tr = el('tr');
      row.forEach(function (cell, i) {
        tr.appendChild(el('td', cols[i] || '', String(cell)));
      });
      body.appendChild(tr);
    });
    tbl.appendChild(body);
    wrap.appendChild(tbl);
    if (t.note) {
      var n = el('p', 'table-note', t.note);
      wrap.appendChild(n);
    }
    return wrap;
  }

  // A post body is a list. Each entry is one of:
  //   "plain text"                                  -> a paragraph
  //   { heading: "..." }                            -> a heading
  //   { text: "...", link: { label: "...", href: "https://..." } }  -> paragraph + link
  //   { image: "images/x.jpg", alt: "...", caption: "..." }         -> one photo
  //   { gallery: [ {image, alt, caption}, ... ] }   -> photos side by side
  //   { table: { caption, head: [...], rows: [[...]], cols: [...], note } } -> a table
  //   { note: "..." }                               -> small print
  function renderBody(box, items) {
    (items || []).forEach(function (item) {
      if (typeof item === 'string') {
        box.appendChild(el('p', '', item));
      } else if (item.heading) {
        box.appendChild(el('h2', 'article-h', item.heading));
      } else if (item.gallery) {
        var row = el('div', 'photo-row');
        item.gallery.forEach(function (g) { row.appendChild(figure(g)); });
        box.appendChild(row);
      } else if (item.image) {
        box.appendChild(figure(item));
      } else if (item.table) {
        box.appendChild(table(item.table));
      } else if (item.note) {
        box.appendChild(el('p', 'small-note', item.note));
      } else if (item.text) {
        var p = el('p', '', item.text + ' ');
        if (item.link && /^https?:\/\//.test(item.link.href)) {
          var a = el('a', '', item.link.label || item.link.href);
          a.href = item.link.href;
          a.target = '_blank';
          a.rel = 'noopener';
          p.appendChild(a);
        }
        box.appendChild(p);
      }
    });
  }

  // ----- Blog list -----
  var list = document.getElementById('posts');
  if (list) {
    if (!posts.length) {
      list.className = '';
      list.appendChild(el('p', 'lead', 'No posts yet. Please check back soon.'));
    }
    posts.forEach(function (p) {
      var card = el('a', 'post');
      card.href = 'post.html?id=' + encodeURIComponent(p.id);
      if (p.image) {
        var img = el('img');
        img.src = p.image;
        img.alt = p.imageAlt || p.title;
        img.loading = 'lazy';
        card.appendChild(img);
      }
      var body = el('div', 'body');
      if (p.date) body.appendChild(el('div', 'date', p.date));
      body.appendChild(el('h3', '', p.title));
      if (p.summary) body.appendChild(el('p', '', p.summary));
      body.appendChild(el('span', 'more', 'Read more →'));
      card.appendChild(body);
      list.appendChild(card);
    });
  }

  // ----- Single post -----
  var box = document.getElementById('post');
  if (box) {
    var id = new URLSearchParams(window.location.search).get('id');
    var post = posts.filter(function (p) { return p.id === id; })[0];
    if (!post) {
      box.appendChild(el('h1', '', 'Post not found'));
      box.appendChild(el('p', '', 'Sorry, we could not find that post.'));
    } else {
      document.title = post.title + ' | Ho Tay Boat Club';
      if (post.date) box.appendChild(el('div', 'date', post.date));
      box.appendChild(el('h1', '', post.title));
      if (post.image) {
        var pic = el('img', 'post-image');
        pic.src = post.image;
        pic.alt = post.imageAlt || post.title;
        box.appendChild(pic);
      }
      renderBody(box, post.body);
    }
  }
})();
