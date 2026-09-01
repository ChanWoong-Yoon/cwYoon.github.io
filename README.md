# cwYoon.github.io

Chanwoong Yoon의 개인 홈페이지. 빌드 도구가 필요 없는 정적 사이트입니다.

## 배포

1. GitHub에서 `cwYoon.github.io` 이름으로 저장소를 만듭니다. (개인 페이지 저장소는 이름이 `사용자명.github.io`여야 하며 public이어야 합니다.)
2. 이 폴더의 내용물을 저장소 루트에 올립니다.

   ```bash
   cd cwYoon.github.io
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/cwYoon/cwYoon.github.io.git
   git push -u origin main
   ```
3. 저장소 Settings → Pages에서 Source를 `main` 브랜치 루트로 지정합니다.
4. 1~2분 뒤 `https://cwyoon.github.io` 에서 확인할 수 있습니다.

로컬에서 미리 보려면 `index.html`을 브라우저로 열면 됩니다. 별도 서버가 필요 없습니다.

## 구조

```
index.html            About (홈)
publications.html     논문 목록
research.html         연구 주제
cv.html               웹 CV
data/profile.js       이름, 소속, 소개, 외부 링크, 네비게이션
data/publications.js  논문 목록
data/research.js      연구 주제
data/cv.js            학력, 경력, 스킬
assets/css/style.css  전체 스타일
assets/js/site.js     데이터를 페이지에 렌더링 (수정 불필요)
assets/img/           프로필 사진, 연구 그림
assets/cv/            CV PDF
```

HTML 파일은 뼈대만 갖고 있고, 내용은 전부 `data/`의 네 파일에서 나옵니다. 평소 수정할 곳은 `data/`뿐입니다.

## 자주 하는 수정

**논문 추가** — `data/publications.js` 배열 맨 위에 객체를 하나 넣습니다. 연도 그룹은 자동으로 만들어지고, `authors`에 `profile.js`의 `aliases`와 일치하는 이름이 있으면 굵게 표시됩니다. `selected: true`를 주면 홈의 Selected work에도 올라갑니다 (최대 3편).

**프로필 사진** — `assets/img/profile.jpg`로 저장하세요. 정사각형에 가까운 이미지가 가장 잘 나옵니다. 파일이 없으면 이니셜 `CY`가 대신 표시됩니다.

**외부 링크** — `data/profile.js`의 `links`에서 `url`을 채우면 그때부터 화면에 나타납니다. 비어 있는 항목은 숨겨집니다. 이메일은 `email` 필드에 적으면 목록 맨 위에 붙습니다.

**CV PDF** — 파일을 `assets/cv/`에 넣고 `profile.js`의 `cvPdf`에 경로를 적으면 CV 페이지 상단에 다운로드 링크가 생깁니다.

**연구 그림** — `data/research.js`의 `figure.src`에 이미지 경로를 넣으세요. 비어 있으면 그림 없이 글만 렌더링됩니다.

**페이지 추가** — 기존 HTML 하나를 복사해 `data-page` 값을 새 파일명으로 바꾸고, `profile.js`의 `NAV` 배열에 항목을 추가하면 모든 페이지의 메뉴에 반영됩니다.

## 참고

- `data/` 안의 논문·이력 내용은 형식을 보여주기 위한 예시입니다. 실제 정보로 교체하세요. `TODO` 주석이 붙은 소속·직함도 마찬가지입니다.
- CV 페이지는 인쇄 스타일이 적용되어 있어, 브라우저에서 바로 인쇄하거나 PDF로 저장하면 사이드바 없이 본문만 깔끔하게 나옵니다.
- 폰트는 Google Fonts의 IBM Plex Sans를 불러옵니다. 오프라인에서도 쓰려면 폰트 파일을 `assets/`에 받아 `@font-face`로 바꾸면 됩니다.
