# cwYoon.github.io

Chanwoong Yoon의 개인 홈페이지. 빌드 도구가 필요 없는 정적 사이트입니다.

## 배포

`main`에 push하면 1~2분 뒤 자동으로 반영됩니다.

- 저장소: `ChanWoong-Yoon/cwYoon.github.io`
- 주소: <https://chanwoong-yoon.github.io/cwYoon.github.io>

저장소 이름이 계정명(`ChanWoong-Yoon`)과 다르기 때문에 개인 페이지(`사용자명.github.io`)가 아니라 프로젝트 페이지로 서빙되고, 주소에 저장소 이름이 한 번 더 붙습니다. `https://cwyoon.github.io`는 이 사이트가 아닙니다. 주소를 짧게 쓰고 싶다면 저장소 이름을 `ChanWoong-Yoon.github.io`로 바꾸거나 커스텀 도메인을 연결하면 됩니다.

사이트 안의 경로는 전부 상대 경로라 어느 쪽이든 그대로 동작합니다.

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
