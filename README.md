# GOT'EM
- 주로 한정판 신발들의 사이즈정보, 착화감 등의 리뷰를 공유하는 게시판입니다.

## 1. 프로젝트 소개

**어떠한 데이터셋와 도구 및 기술을 사용했는지에 대한 설명과 엔드유저에게 보이는 웹서비스에 대한 소개**

  - 기술 스택<br>
    
    프론트엔드<br>
    - Javascript, HTML, CSS <br><br>
    
    백엔드<br>
    - Node.js, MongoDB
    <br><br>
    
    배포 <br>
    - Azure VM, NginX (백엔드, 프론트 분리하여 배포)
    
    <br>
  - 웹서비스에 대한 자세한 개요
    발매된 신발에 대한 정보를 얻을 수 있으며 유저간 신발 사용 후기를 공유 함으로 구매에 필요한 정보를 얻을 수 있다.<br>
    정보가 많이 있지만 입문자들이 시작하기에 어려운 부분들이 많아 정보들을 쉽게 접하게 하여 접근성을 높일 수 있다.

## 2. 프로젝트 목표

  - 프로젝트 아이디어 동기
  
    한정판 신발들은, 사이즈정보 착화감 정보 등 다양한 정보를 찾으려면, 제품마다 검색을 해서 후기를 
        찾아보아야 합니다.
    <br>
    
    입문자들 혹은 예비 구매자 또한 쉽게 해당제품에 대한 경험을 기반으로 작성된 솔직한 리뷰를 찾아볼 수 있도록하는 사이트를 구성해보았습니다.
    <br>
    실제 신발을 보유하고있는 사람이 착화감, 사이즈, 색상에 대한 후기를 필수로 선택하게하여 해당 제품의 리뷰를 수치화합니다.

## 3. 프로젝트 기능 설명

**웹서비스의 유용성, 편의성 및 시각화의 실용성에 대한 설명**

  ### 페이지별 기능
  - 랜딩페이지 : 회원가입, 로그인
  - 메인 페이지 : Top , Bottom 구조로, Top에는 인기제품 순으로 렌더링, Bottom 에는 발매일자를 기준으로 렌더링
  - 상세 페이지 : 아이템에 대한 정보 및 사진, 리뷰점수, 좋아요, 해당 상품의 게시판
  - 게시글 페이지 : 게시글 조회, 작성, 수정, 삭제, 댓글 기능 
  - 일반유저정보 페이지: 좋아요한 상품목록, 자신이 쓴 게시글 보기, 유저정보 변경(프로필 이미지,닉네임), 계정찾기(id,pw)
  - 관리자정보 페이지: 상품관리 , 상품등록, 공지관리
  
  ### 핵심 기능
  - 관리자가 상품을 등록하면 유저에게 보이게되고, 유저는 해당 상품에대해 관심표시(좋아요), 게시글을 작성할 수 있다.
  - 상품마다 독립적인 게시판이 존재한다. 유저는 해당 상품에 대한 게시글을 작성할 수 있다.
  - 상품에대한 글 작성시 착화감, 색상정보, 실제사이즈 정보를 필수로 입력하게하여 각 상품마다 리뷰를 누적한다.
  - 제품별로 누적된 리뷰를 수치화하여(선택한 인원 수) 시각화 한다.
  
  ### 프로젝트만의 차별점, 기대 효과 
  리뷰를 수치화하는 점에서 직관적인 리뷰를 확인할 수 있습니다. <br>
  이후 기능을 덧붙여 고도화 한다면(래플 정보,응모 정보제공 등) 사용성이 증가할 것 같습니다. 
  


## 4. 프로젝트 구성도
  - 와이어프레임 <br>
  https://www.figma.com/file/pgUaFcvrEzHnBOD7idcM2e/TEAM-7?node-id=0%3A1

  - DB Schema <br> 
  https://whimsical.com/schemas-9vDLdbNkui2JnGx3LFQ4Bg
  
  - API Guide <br>
  https://documenter.getpostman.com/view/18826480/UVXery1a#df6c703e-de2a-4713-868e-cf610ccbe76a

## 5. 프로젝트 팀원 역할 분담
| 이름 | 담당 업무 |
| ------ | ------ |
| 정민우 | 팀장/백엔드 개발 |
| 김예찬 | 프론트엔드 개발  |
| 안영민 | 프론트엔드 개발  |
| 이윤학 | 프론트엔드 개발  |

