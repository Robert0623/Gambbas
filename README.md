# 감빠스
### 감성에 빠지는 spot의 줄임말로 나만의 감성 가득한 장소를 다른 사람과 함께 공유 가능한 서비스입니다.
#### 저희의 서비스가 궁금하시다면
#### [<img src='https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/youtube.svg' alt='youtube' height='40'>](https://youtu.be/m7i4y6Wfydo)
#### http://cloudh.shop

## 🧑🏻‍💻 제작 기간 및 팀원 소개
#### 기간 : 2021년 11월 1일 ~ 2021년 11월 5일
#### 3인 1조 팀 프로젝트
- 김다희 : 로그인 + 회원가입
- 서현우 : 포스팅
- 전종민 : 프로필

## 🛠 사용 기술
#### Languages
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
#### Frameworks, Platforms and Libraries
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
#### IDEs/Editors
![PyCharm](https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green)
#### Version Control
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
#### Social
![YouTube](https://img.shields.io/badge/<handle>-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)
#### Hosting/SaaS
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
#### Databases
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## 📝 요구사항
- JWT를 이용하여 로그인과 회원가입 구현
- 아이디, 닉네임 중복확인
- 비밀번호2차 확인
- 프로필 닉네임, 이미지 수정
- 게시물 업로드 및 삭제

## 🤦🏻 프로젝트 중 힘들었던 점이 있다면
- 프로젝트 첫 날 팀원 하차로 인한 인력 부족
- 비전공자 모임으로 인한 얕은 개발 지식
- CSS를 싫어하는 인원으로 구성된 팀(피카츄 3등분 사건)
- 협업 툴 사용 능력 부족
- 팀장을 제외한 팀원들이 이해심이 많아 팀장이 없어도 찾지 않음(팀장의 입지 확보 실패)

## 💯 해결한 문제
1. 게시글 작성 후, 메인페이지에 노출 시 사진이 잘려서 1/3씩 표시되는 오류 발생. 이미지쪽 문제인지 알았으나, css문제인 것을 확인 후 수정.

2. 메인페이지에서 게시글 하나를 삭제 시, 나머지 게시글의 사진이 같이 삭제되고 X박스가 뜨는 현상 발생.
이미지 파일의 이름이 중복되게 db에 저장되므로 이런현상이 발생하는 것을 확인했고, 강의노트와 구글링을 통해 datetime의 오늘시간, strftime 함수의 현재 시간을 파일명 뒤에붙여 db에 저장되는 파일의 이름을 다르게 생성. 이 작업을 통해 문제를 해결.

3. 각 유저의 프로필을 확인하고 개인 포스팅만 불러오는 과정에서 {% if status (username == payload["id"]) %} 조건항을 통해 특정한 유저의 post만 출력하려고 하였으나,
특정 유저의 post를 가져오는 것이 아닌 모든 유저의 post를 받고 있음을 확인.
서버에서 posts = list(db.posts.find({})) 해당 코드를 통해 DB posts 에서 모든 post를 가지고 오던 것을 posts = list(db.posts.find({"username": username})) 특정한 username의 post를 가져오도록 변경하여 적용.

## 🍻 개인 회고
#### 김다희 https://cloud-cuckoo-land.tistory.com/
#### 서현우 https://robert0623.tistory.com/
#### 전종민 https://coding-wil.tistory.com/
