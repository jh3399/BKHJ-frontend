## TEAM3 Bikyohaejwo Project

###### 웹 애플리케이션 프로젝트 입니다.

##### 2023.05.01 ~ 2023.06.26 동안 Spring Boot, React, Python을 사용해 구현했습니다.

###### 저희는 금융정보 데이터 분석 기반, 대출상품 추천 솔루션 구축 이라는 주제로 진행하였습니다.

###### 과제1 :  React + java + SpringBoot + JPA + DB [MYSQL]기반의 웹어플리케이션 개발
###### 과제2 : Python 기반의 데이터분석: 수집(web scraping) + 정제(pandas) + 분석 + 시각화
###### 과제3 : Python 기반의 데이터 예측: AI 알고리즘 (선형회귀, 다항 션형회귀)을 활용하여 데이터 예측 시스템 구축

## 📚목차
* ##### 프로젝트 구조
* ##### 사용기술
* ##### 구현기능
* ##### 기능 실행화면
* ##### ELK
* ##### ERD설계
* ##### 트러블슈팅

## ✓프로젝트 구조
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/dbb51e2d-edaf-4dca-8763-da949b996a07)
## ✓사용기술


## ✓구현기능
*  ##### 게시판 기능
    * ###### 모든 게시글 및 특정 게시글 조회
    * ###### 특정 게시글 검색 (제목, 작성자, 작성일)
    * ###### 게시글 작성 [회원]
    * ###### 게시글 수정 [회원, 게시글 작성자]
    * ###### 게시글 삭제 [회원, 게시글 작성자]
* ##### 댓글 기능
    * ###### 댓글 작성 [회원]
    * ###### 댓글 수정 [회원]
    * ###### 댓글 삭제 [회원]
* ##### 파일업로드 기능
    * ###### 파일 업로드 [회원]
    * ###### 파일 다운로드
    * ###### 파일 수정 [회원, 게시글 작성자]
    * ###### 파일 삭제 [회원, 게시글 작성자]
* ##### 회원 기능
    * ###### 회원가입
    * ###### 로그인/로그아웃
    * ###### 회원탈퇴
    * ###### 회원정보수정
* ##### ELK Stack을 이용한 데이터 분석 및 시각화 기능
    * ###### CSV 데이터를 Elastic 검색으로 가져오고 React를 사용하여 시각화
* ##### 데이터 예측 기능
    * ###### 선형 회귀 분석을 사용하여 응답에서 로그인된 쿼리 값에 대한 데이터 검색 자동화 및 DB 업데이트
    * ###### 대출한도 및 대출 기간 입력에 따른 다항식 선형 회귀를 이용한 금리 예측

## ✓기능 실행화면
### 메인화면페이지
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/b6f6119c-6f5d-439a-9a5a-999c011f3f11)
## 게시판 기능
### 모든 게시글 및 특정 게시글 조회
* ###### 모든 게시글을 조회할 수 있습니다. 페이징 기능을 통해 한 페이지에서 최대 10개의 게시글이 조회됩니다.
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/0d75db69-c0dd-4576-b289-2dc858323ae1)
* ###### 게시글의 제목을 클릭하면, 게시글의 상세내용을 조회할 수 있습니다.
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/879a9e6e-35f6-4f0c-b801-5b1ee7afd95e)
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/7f42b980-ad6b-4533-957e-cb2392cfb979)
### 특정 게시글 검색 (제목, 작성자, 작성일)
* ###### 게시글의 제목과 작성자 또는 작성일로 게시글을 검색할 수 있습니다.
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/c343c4da-2053-44fd-8e40-bfea3be8b0b3)
### 게시글 작성
* ###### 로그인한 사용자는 게시글을 작성할 수 있습니다.
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/e7aba42c-816b-459d-92d6-beca733d813e)
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/8df4660d-39a4-4265-ae54-bbde74b4ef89)
* ###### 로그인하지 않았을 경우 글 작성이 제한됩니다.
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/2dc4bc96-abee-4310-a13b-190b097427d8)
### 게시글 수정
* ###### 게시글 작성자는 게시글을 수정할 수 있습니다.
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/fa85f4cf-7e8a-45d2-a906-14bee77ace31)
![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117276980/25dc46b3-3dfb-4a61-8274-9a10d6c7232a)





### CSV 데이터를 Elastic 검색으로 가져오고 React를 사용하여 시각화
이 프로젝트는 ELK(Elastic search, Logstash, Kibana) Stack을 활용하여 데이터 분석 및 시각화 기능을 보여줍니다. ELK Stack은 데이터 수집, 인덱싱, 분석 및 시각화를 지원하는 강력한 오픈 소스 도구 조합입니다.

이 프로젝트는 CSV 데이터를 확장성이 높은 검색 및 분석 엔진인 Elasticsearch로 가져오는 프로세스를 보여줍니다. 효율적인 저장 및 인덱싱을 위해 Excel 파일의 데이터를 CSV 형식으로 변환한 다음 Elastic 검색으로 가져왔습니다.

프로젝트의 프런트 엔드 부분은 사용자 인터페이스를 구축하기 위한 인기 있는 JavaScript 라이브러리인 React를 사용하여 구축됩니다. Elastic search에서 가져온 데이터는 React 응용 프로그램을 통해 시각화되고 사용자에게 표시됩니다. 이를 통해 대화형의 사용자 친화적인 데이터 탐색 및 분석이 가능합니다.

이 프로젝트는 Elasticsearch의 강력한 데이터 저장 및 검색 기능을 React로 구축된 동적이고 대응력이 뛰어난 사용자 인터페이스와 결합하여 데이터 분석 및 시각화를 위한 포괄적인 솔루션을 제공합니다.
### 선형 회귀 분석을 사용하여 응답에서 로그인된 쿼리 값에 대한 데이터 검색 자동화 및 DB 업데이트
이 프로젝트에서 데이터 예측 기능은 선형 회귀 및 다항식 선형 회귀와 같은 기계 학습 알고리즘을 활용합니다. 로그인한 쿼리 값은 React의 데이터베이스에서 자동으로 가져와 업데이트됩니다. 이를 통해 학습된 AI 모델을 기반으로 예측 금리를 실시간으로 검색하고 활용할 수 있습니다. 선형 회귀 알고리즘은 쿼리 값을 검색하고 업데이트하는 프로세스를 자동화하는 데 사용됩니다. 반면, 다항식 선형회귀는 대출한도와 대출기간 값을 입력하여 금리를 예측하는 데 활용됩니다. 결과 예측은 정확하며 대출 상품의 맥락에서 정보에 입각한 의사 결정을 가능하게 합니다.
### 대출한도 및 대출 기간 입력에 따른 다항식 선형 회귀를 이용한 금리 예측






홈페이지 화면 구성 [React]



![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/23ceeddd-f6ac-4a0c-92c4-9896549a3457)

![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/4a4f0dee-a8c4-4197-872c-b7a07262eabe)

![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/da52b200-8aea-49f8-8709-42a6f9ddcd9d)





파일 DB 및 권한 부여는 따로 적용

[file DB.txt](https://github.com/Hooddduck/BKHJ-frontend/files/11624647/file.DB.txt)





**개발 순서**

회원 로그인 [token, security] -> 게시판[ back -> front ] ->   댓글 [ back -> front] -> 파일 [ back -> front] 



**로그인 구현 순서** 

Spring Boot + Spring Security 애플리케이션을 빌드

설명: Token을 이용한, 로그인/ 로그아웃
사용자는 새 계정에 가입(등록)하거나 사용자 이름과 비밀번호로 로그인할 수 있습니다.
사용자의 역할(관리자, 중재자, 사용자)에 따라 사용자가 리소스에 액세스할 수 있는 권한을 부여한다.


![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/3a259be2-a9f3-4c1c-8775-e4a4ea30eeff)


============================================================================
스프링 시큐리티

– WebSecurityConfig보안 구현의 핵심[단, 현재 filterchain으로 대체중(deprecated)] =>입니다.

보호 자원에 대한 cors, csrf, 세션 관리, 규칙을 구성한다. 

또한 아래 요소를 포함하는 기본 구성을 확장하고 사용자 정의할 수 있습니다.

– 인터페이스에는 사용자 이름 UserDetailsService 으로 User를 로드하는 메서드가 있으며 Spring Security가 인증 및 유효성 검사에 사용할 수 있는 개체를 반환한다. 

– UserDetails인증 개체를 구축하는 데 필요한 정보(예: 사용자 이름, 암호, 권한)를 포함한다.

– UsernamePasswordAuthenticationToken 로그인 요청에서 {사용자 이름, 비밀번호}를 가져오고 AuthenticationManager이를 사용하여 로그인 계정을 인증합니다.

– 개체의 유효성을 검사하는 AuthenticationManager이 있습니다 . 성공하면 완전히 채워진 인증 개체(부여된 권한 포함)를 반환한다. DaoAuthenticationProviderUserDetailsServicePasswordEncoderUsernamePasswordAuthenticationTokenAuthenticationManager

– OncePerRequestFilterAPI에 대한 각 요청에 대해 단일 실행을 만듭니다. JWT 구문 분석 및 유효성 검사, 사용자 세부 정보 로드( 사용 ), 인증 확인( 사용 ) doFilterInternal()을 구현하는 방법을 제공합니다 .
[UserDetailsServiceUsernamePasswordAuthenticationToken 사용]

– AuthenticationEntryPoint [인증 오류]를 포착합니다.

- Repository에는 UserRepository와 RoleRepository가 포함되어 있으며, 이들은 데이터베이스와 작업하기 위해 사용됩니다. 이들은 Controller에 import되어 사용됩니다.
- 
- Controller는 OncePerRequestFilter에 의해 필터링된 요청을 받아서 처리합니다.

AuthController는 회원 가입 및 로그인 요청을 처리합니다.

TestController는 역할 기반 검증을 통해 보호된 리소스에 접근하는 메서드를 처리합니다.

================================================================================

* 중요 React 화면에서 꼭 auth-header.js에 있는 token을 통해서 api연결을 해야 합니다.


지금까지 로그인 관련 Back관련 설명이였습니다.


React login 관련 front

다음과 같이 JWT 및 HttpOnly 쿠키를 사용하여 로그인, 로그아웃 및 등록이 포함된 React Hooks 애플리케이션을 빌드합니다.

로그인/로그아웃, 회원가입 페이지가 있습니다.
양식 데이터는 백엔드로 전송되기 전에 프런트 엔드에서 유효성을 검사합니다.
사용자의 역할(관리자, 중재자, 사용자)에 따라 탐색 모음 항목이 자동으로 변경됩니다.

[순서 설명]

App 컴포넌트는 React Router (BrowserRouter)와 함께 사용되는 컨테이너입니다. 상태에 따라 Navbar에서 항목을 표시할 수 있습니다.

Login 및 Register 페이지에는 데이터 제출을 위한 폼을 만든다. (react-validation 라이브러리를 지원합니다). 

이들 페이지는 auth.service의 메서드를 호출하여 로그인/회원 가입 요청을 수행합니다.

auth.service의 메서드는 HTTP 요청을 수행하기 위해 axios를 사용합니다. 

또한 이러한 메서드 내에서 브라우저 로컬 스토리지에 사용자 프로필을 저장하거나 가져옵니다.

Home 페이지는 모든 방문자에게 공개됩니다.

Profile 페이지는 로그인 작업이 성공한 후에 사용자 정보를 표시합니다.

BoardUser, BoardModerator, BoardAdmin 페이지는 사용자의 역할에 따라 표시됩니다. 이들 페이지에서는 user.service를 사용하여 웹 API의 보호된 리소스에 액세스합니다.

user.service의 메서드는 보호된 리소스에 액세스하기 위해 인증 요청을 수행하기 위해 axios를 사용합니다 (HttpOnly 쿠키에 JWT를 사용합니다).

[회원정보 수정, 회원 탈퇴 기능은 CRUD기능으로, 게시판 수정 삭제를 확인하시고 응용이 필요합니다]

코드는 git에서 확인 필요


![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/e9002347-eab3-4ae1-a4b3-2424b95a847b)



![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/e6ecbb7c-f26b-44eb-9607-d8278b37b2b7)



![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/1c4f7d6b-3474-44b0-8050-106895839a26)



![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/00dfd6f5-bc86-40ec-a178-6e24bffbdb48)



![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/68069adf-2976-4352-9a5b-6a5c4b4ffc54)




![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/6850480c-5b68-4622-b4af-02840ed9c8db)







다음으로는,

**게시판 관련 순서** 입니다.

게시판 back관련 부분입니다. 해당 부분은 단순 CRUD 이므로, 순서만 적어놓도록 하겠습니다.

application.properties [mysql 및 추가 되는 기능에 따른 연결 설정 => pom.xml [가장 중요]=> BoardController [ @CrossOrigin(origins = "*")
 @RestController @RequestMapping("/api/auth")] 해당 부분이 중요함 token, security 부분 확인=> Board.java=> BoardRepository.java => BoardService.java => BoardSerivceImpl.java


게시판 front 부분입니다.

AddBoard.jsx => EditBoard.jsx => => viewBoard.jsx => App.js=>   Navbar.js=> Board.service.js
[게시판 추가]     [게시판 수정]        [게시판 보기]    [화면구성] [header]     [Restapi연결=> Springboot에 있는 url을 react를 가져오고, BaseUrl형태로 정리]


게시판 리스트 형태입니다. [ 검색 기능 및 페이징 기능은 리액트 자체적인 코드로 처리 하였습니다 ]




![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/b3e7cba6-3abc-43df-8fea-90b77f5c736f)



게시글 등록 입니다.



![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/2d1e1b2f-7dfb-4d85-9a8b-c7f0f9c0a45a)






글 제목을 클릭하면 ViewBoard로 들어가집니다. 해당 부분에 작성자이면, 수정 및 삭제가 가능합니다.


![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/af0a16e8-ad5e-4341-9ed0-3fb8abb164bb)





![image](https://github.com/Hooddduck/BKHJ-frontend/assets/117277093/7dfccc6a-e73f-4a23-a8f7-576f4e8e68de)




====================================================================================================

수요일까지 이거 보고 무조건 설정하셈.

1. 파이참 설치, [**아나콘다** 설치 무조건 경로 잘 확인] => 파이참에 file -> settings -> Add Interprter -> Exisiting [ 아나콘다 무조건 체크 하고 설치]

파이참 메인 화면 가서


from flask import Flask, make_response
import requests
import pandas as pd
from urllib.parse import urlencode
import xml.etree.ElementTree as ET
import io

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    base_url = 'https://apis.data.go.kr/B553701/LoanProductSearchingInfo/LoanProductSearchingInfo/getLoanProductSearchingInfo'
    service_key = '6N8AyrU0fUoSYr2GUOsvAxlP0HKCse3E4tmVVACTY9CVzngxvmvZuWd%2FcNQGcCmxjQCynXGNhj13jEuR1snJQQ%3D%3D'

    params = {
        'pageNo': '1',
        'numOfRows': '329',
        'type': 'xml',
        'finPrdNm': '파서'
    }

    url = f"{base_url}?{urlencode(params)}&serviceKey={service_key}"

    response = requests.get(url, verify=True)
    response.encoding = 'UTF-8'
    contents = response.text

    # XML 파싱
    root = ET.fromstring(contents)

    # 원하는 항목들
    desired_tags = ['seq', 'finPrdNm', 'usge', 'lnLmt', 'irt', 'maxRdptTrm', 'rdptMthd', 'trgt', 'age', 'incm', 'rsdAreaPamtEqltIstm', 'ofrInstNm', 'cnpl', 'jnMthd', 'ovItrYr', 'rltSite', 'prdOprPrid']

    # XML을 JSON으로 변환
    json_data = []
    for item in root.iter('item'):
        item_data = {}
        for child in item:
            if child.tag in desired_tags:
                if child.text:
                    item_data[child.tag] = child.text.encode('UTF-8').decode('UTF-8')
                else:
                    item_data[child.tag] = ''
        json_data.append(item_data)

    # JSON을 데이터프레임으로 변환
    df = pd.DataFrame(json_data)

    # CSV 파일로 저장
    csv_data = df.to_csv(index=False, encoding='utf-8-sig')

    # 파일 다운로드 응답 생성
    response = make_response(csv_data)
    response.headers.set('Content-Type', 'text/csv')
    response.headers.set('Content-Disposition', 'attachment', filename='data.csv')

    return response

if __name__ == '__main__':
    app.run(debug=True)


해당 코드 작성 [ 작성하면 설치하라는 부분이 많이 나옴 다 설치 필요]

실행하면, http://127.0.0.1:5000/api/data 검색 

csv 파일 자동으로 다운로드 됨

그 다음 step은 ELK 들어가서 주소: http://localhost:5601/  왼쪽 카테고리 클릭 -> Kibana -> machinelearning -> Data Visualizer -> Import data [csv 파일 등록] -> 그리고 import 시키는대로 파일 이름은 product로 통일 부탁드립니다.

이게 완료되면, react 코드 들어가서, cors를 무시해야되서
visual에 터미널 켜서 yarn add install http-proxy-middleware 



product.js[생성] 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoanProduct = () => {
  const [loanProducts, setLoanProducts] = useState([]);
  const [searchTerms, setSearchTerms] = useState({
    finPrdNm: "",
    irt: "",
    lnLmt: "",
    usge: "",
    maxRdptTrm: "",
    ofrInstNm: ""
  });
  const [filteredLoanProducts, setFilteredLoanProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetchLoanProducts();
  }, []);

  useEffect(() => {
    filterLoanProducts();
  }, [loanProducts, searchTerms]);

  const fetchLoanProducts = async () => {
    try {
      const response = await axios.get('/api');
      const data = response.data.hits.hits.map(hit => hit._source);
      setLoanProducts(data);
    } catch (error) {
      console.error("Error retrieving loan products:", error);
    }
  };

  const filterLoanProducts = () => {
    const filteredProducts = loanProducts.filter(loanProduct => {
      return Object.entries(searchTerms).every(([key, value]) => {
        const fieldValue = loanProduct[key] || "";
        return fieldValue.toLowerCase().includes(value.toLowerCase());
      });
    });
    setFilteredLoanProducts(filteredProducts);
  };

  const handleSearch = (e, field) => {
    setSearchTerms(prevState => ({
      ...prevState,
      [field]: e.target.value
    }));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderLoanProducts = () => {
    if (filteredLoanProducts.length === 0) {
      return <p>No loan products found.</p>;
    }

    return currentItems.map((loanProduct) => (
      <div key={loanProduct.seq}>
        <h3>상품명: {loanProduct.finPrdNm}</h3>
        <p>금리: {loanProduct.irt}</p>
        <p>대출한도: {loanProduct.lnLmt}</p>
        <p>용도: {loanProduct.usge}</p>
        <p>총대출기간: {loanProduct.maxRdptTrm}</p>
        <p>제공기관: {loanProduct.ofrInstNm}</p>
        {/* Add more fields as needed */}
        <Link to={`/loan/${loanProduct.seq}`}>
          <button>자세히보기</button>
        </Link>
      </div>
    ));
  };

  // Paginate the loan products based on the current page and items per page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLoanProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages for pagination
  const totalPages = Math.ceil(filteredLoanProducts.length / itemsPerPage);

  return (
    <div>
      <h1>Loan Products</h1>
      <div>
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerms.finPrdNm}
          onChange={e => handleSearch(e, "finPrdNm")}
        />
        <input
          type="text"
          placeholder="Search by interest rate"
          value={searchTerms.irt}
          onChange={e => handleSearch(e, "irt")}
        />
        <input
          type="text"
          placeholder="Search by loan limit"
          value={searchTerms.lnLmt}
          onChange={e => handleSearch(e, "lnLmt")}
        />
        <input
          type="text"
          placeholder="Search by usage"
          value={searchTerms.usge}
          onChange={e => handleSearch(e, "usge")}
        />
        <input
          type="text"
          placeholder="Search by maximum repayment term"
          value={searchTerms.maxRdptTrm}
          onChange={e => handleSearch(e, "maxRdptTrm")}
        />
        <input
          type="text"
          placeholder="Search by offering institution"
          value={searchTerms.ofrInstNm}
          onChange={e => handleSearch(e, "ofrInstNm")}
        />
      </div>
      {renderLoanProducts()}
      <div>
        {/* Render pagination */}
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoanProduct;


SetupProxy.js [생성]

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9200', // Replace with your Elasticsearch endpoint
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/product/_doc/_search?size=186' // Replace with your Elasticsearch path
      },
    })
  );
};


ProductService.js [생성]

import axios from "axios";

const API_URL = "https://cors-anywhere.herokuapp.com/http://localhost:9200/product/_doc/_search?size=186";

const getProductData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.hits.hits.map(hit => hit._source);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

export { getProductData };
















