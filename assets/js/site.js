/* ------------------------------------------------------------------
   site.js — data/*.js 의 내용을 페이지에 그립니다.
   일반적인 경우 이 파일은 수정할 필요가 없습니다.
------------------------------------------------------------------ */

(function () {
  "use strict";

  /* ---------- helpers ---------- */

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function mount(id, html) {
    var node = document.getElementById(id);
    if (node) node.innerHTML = html;
  }

  function has(value) {
    return typeof value === "string" && value.trim() !== "";
  }

  /* ---------- left rail ---------- */

  function railHTML() {
    var current = document.body.dataset.page || "";

    var portrait = has(PROFILE.photo)
      ? '<img src="' + esc(PROFILE.photo) + '" alt="' + esc(PROFILE.name) +
        '" onerror="this.remove()">'
      : "";

    var meta = [PROFILE.role, PROFILE.affiliation, PROFILE.institution, PROFILE.location]
      .filter(has)
      .map(function (line) { return "<span>" + esc(line) + "</span>"; })
      .join("");

    var nav = NAV.map(function (item) {
      var active = item.href === current ? ' aria-current="page"' : "";
      return '<li><a href="' + esc(item.href) + '"' + active + ">" +
             esc(item.label) + "</a></li>";
    }).join("");

    var links = (PROFILE.links || []).filter(function (link) { return has(link.url); });
    if (has(PROFILE.email)) {
      links.unshift({ label: "Email", url: "mailto:" + PROFILE.email });
    }
    var linksHTML = links.length
      ? '<ul class="rail-links">' + links.map(function (link) {
          return '<li><a href="' + esc(link.url) + '">' + esc(link.label) + "</a></li>";
        }).join("") + "</ul>"
      : "";

    return (
      '<div class="portrait-frame"><span>' + esc(PROFILE.initials) + "</span>" + portrait + "</div>" +
      '<div class="rail-identity">' +
        '<p class="rail-name">' + esc(PROFILE.name) + "</p>" +
        '<p class="rail-meta">' + meta + "</p>" +
      "</div>" +
      '<nav class="nav" aria-label="Sections"><ul>' + nav + "</ul></nav>" +
      linksHTML
    );
  }

  function footHTML() {
    return "<p>&copy; " + new Date().getFullYear() + " " + esc(PROFILE.name) +
           ". Built as a static site on GitHub Pages.</p>";
  }

  /* ---------- publications ---------- */

  function authorsHTML(authors) {
    var aliases = (PROFILE.aliases || []).map(function (a) {
      return a.replace(/[\s.,-]/g, "").toLowerCase();
    });
    return authors.map(function (author) {
      var key = author.replace(/[\s.,-]/g, "").toLowerCase();
      return aliases.indexOf(key) !== -1
        ? '<span class="me">' + esc(author) + "</span>"
        : esc(author);
    }).join(", ");
  }

  var LINK_LABELS = { pdf: "PDF", doi: "DOI", code: "Code", project: "Project", slides: "Slides" };

  function pubHTML(pub) {
    var links = pub.links || {};
    var linkHTML = Object.keys(LINK_LABELS)
      .filter(function (key) { return has(links[key]); })
      .map(function (key) {
        return '<a href="' + esc(links[key]) + '">' + LINK_LABELS[key] + "</a>";
      }).join("");

    var venue = has(pub.venue) ? "<em>" + esc(pub.venue) + "</em>" : "";
    if (has(pub.note)) {
      venue += (venue ? " " : "") + '<span class="pub-note">' + esc(pub.note) + "</span>";
    }

    return '<article class="pub">' +
      '<h3 class="pub-title">' + esc(pub.title) + "</h3>" +
      '<p class="pub-authors">' + authorsHTML(pub.authors || []) + "</p>" +
      (venue ? '<p class="pub-venue">' + venue + "</p>" : "") +
      (linkHTML ? '<div class="pub-links">' + linkHTML + "</div>" : "") +
      "</article>";
  }

  function publicationsByYear(list) {
    var years = [];
    list.forEach(function (pub) {
      if (years.indexOf(pub.year) === -1) years.push(pub.year);
    });
    years.sort(function (a, b) { return b - a; });

    return years.map(function (year) {
      var group = list.filter(function (pub) { return pub.year === year; });
      return '<h2 class="pub-year">' + esc(year) + "</h2>" +
             group.map(pubHTML).join("");
    }).join("");
  }

  /* ---------- research ---------- */

  function topicHTML(topic) {
    var figure = "";
    if (topic.figure && has(topic.figure.src)) {
      figure = '<figure class="figure"><img src="' + esc(topic.figure.src) +
        '" alt="' + esc(topic.figure.caption || topic.title) + '">' +
        (has(topic.figure.caption)
          ? "<figcaption>" + esc(topic.figure.caption) + "</figcaption>"
          : "") +
        "</figure>";
    }

    var tags = (topic.tags && topic.tags.length)
      ? '<ul class="tags">' + topic.tags.map(function (tag) {
          return "<li>" + esc(tag) + "</li>";
        }).join("") + "</ul>"
      : "";

    return '<section class="topic">' +
      "<h2>" + esc(topic.title) + "</h2>" +
      (has(topic.lede) ? '<p class="topic-lede">' + esc(topic.lede) + "</p>" : "") +
      figure +
      (topic.body || []).map(function (para) { return "<p>" + esc(para) + "</p>"; }).join("") +
      tags +
      "</section>";
  }

  /* ---------- CV ---------- */

  function entryHTML(entry) {
    var bullets = (entry.bullets && entry.bullets.length)
      ? "<ul>" + entry.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>"
      : "";

    return '<div class="entry">' +
      '<div class="entry-period">' + esc(entry.period) + "</div>" +
      "<div>" +
        '<p class="entry-title">' + esc(entry.title) + "</p>" +
        (has(entry.org) ? '<p class="entry-org">' + esc(entry.org) + "</p>" : "") +
        (has(entry.detail) ? '<p class="entry-detail">' + esc(entry.detail) + "</p>" : "") +
        bullets +
      "</div></div>";
  }

  function skillHTML(group) {
    return '<div class="skill-group">' +
      "<h3>" + esc(group.group) + "</h3>" +
      "<p>" + group.items.map(esc).join(", ") + "</p>" +
      "</div>";
  }

  /* ---------- page wiring ---------- */

  document.addEventListener("DOMContentLoaded", function () {
    mount("rail", railHTML());
    mount("foot", footHTML());

    var page = document.body.dataset.page;

    if (page === "index.html") {
      mount("statement", esc(PROFILE.statement));
      mount("intro", PROFILE.intro.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join(""));
      mount("interests", PROFILE.interests.map(function (i) {
        return "<li>" + esc(i) + "</li>";
      }).join(""));

      var selected = PUBLICATIONS.filter(function (pub) { return pub.selected; }).slice(0, 3);
      mount("selected", selected.map(pubHTML).join(""));
    }

    if (page === "publications.html") {
      mount("publications", publicationsByYear(PUBLICATIONS.slice()));
    }

    if (page === "research.html") {
      mount("research", RESEARCH.map(topicHTML).join(""));
    }

    if (page === "cv.html") {
      if (has(PROFILE.cvPdf)) {
        mount("cv-actions", '<a href="' + esc(PROFILE.cvPdf) + '">Download the PDF version</a>');
      }
      mount("cv-education", CV.education.map(entryHTML).join(""));
      mount("cv-experience", CV.experience.map(entryHTML).join(""));
      mount("cv-skills", CV.skills.map(skillHTML).join(""));

      var recent = PUBLICATIONS.slice(0, 5).map(function (pub) {
        return entryHTML({
          period: String(pub.year),
          title: pub.title,
          org: pub.venue,
          detail: (pub.authors || []).join(", ")
        });
      }).join("");
      mount("cv-publications", recent +
        '<p class="selected-note"><a href="publications.html">See the full publication list</a></p>');
    }
  });
})();
