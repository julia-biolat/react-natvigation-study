# react-natvigation-study


React Navigation이란.?
React-Native에서 사용하는 화면 이동을 위한 라이브러리
Stack, BottomTab, Drawer등 앱 개발시 많이 사용하는 화면 이동에 대해 각 플랫폼 환경에 맞도록 쉽게 변환 해 주도록 되어있음

구성요소
Navigator + Screen
Navigator : Navigation이 어떤 구조로 되어있는지 나타내는 컴포넌트

What is Stack Navigator?
Stack과 동일한 자료 구조로 화면을 그리는 Navigator
제일 마지막에 들어온 화면이 제일 먼저 없어짐
React-Navigation에서 필요한 애니메이션등은 구현 됨
Stack Navigator : JS로 작성, 자유도 높음
Native Stack Navigator : Native로 작성 자유도 낮음

What is Drawer Navigator?
슬라이드를 통해서 이동할 Screen들을 나타내는 Navigator
Drawer에 대한 open, close, toggle등 기본적인 기능들을 함수로 제공
Gmail, LinkedIn등에서 사용

What is Tab Navigator?
가장 흔하게 앱에서 볼 수 있는 UI
기본적으로 하단에 탭의 형태로 제공
Material UI를 통해서 제공하는 별도 UI도 제공(Material Bottom Tabs Navigator, Material Top Tabs Navigator)


Glossary of terms (Navigator)
화면을 어떻게 그려줄지 결정해주는 리액트 컴포넌트 (aka 책 겉표지)
Navigation Container : 전체 Navigator를 관리해주는 역활 

Glossary of terms (Router)
Navigation의 상태나 동작을 제어해주는 함수의 집합.
주로 화면간 데이터 전달을 위해 사용


Glossary of terms (Screen)
 화면을 그려주는 컴포넌트 (aka. 책에서 종이 한장)

Glossary of terms (Navigation Prop, Route Prop)
- Navigation Prop : 화면 이동에 대한 함수들을 공통으로 제공
- Route Prop : 파라미터를 받아오거나 어떤 화면인지 이름을 알 수 있는 값들을 제공 해주는 역활 

Glossary of terms (Navigation State)
현재 React Navigation이 어떤 상태인지를 알 수 있는 값
주로 Stack Navigator 이전 Stack에 어떤 Screen이 있는지 찾기 위해 사용

Glossary of terms (Route)
Screen의 Name, Key, Param등을 저장하는 개념
어떤 화면인지 식별 하기 위해 사용.
Navigation State 하위에 Routes라는 배열에서 찾을수 있음.


Stack Navigator Screen options (presentation)
Stack Navigator에서 화면 이동 애니메이션에 대한 설정 옵션
Card : 오른쪽에서 왼쪽으로 이동하는 애니메이션
Modal : 아래에서 위로 이동하는 애니메이션 

Tab Navigator Screen options (backBehavior)
Android에서 H/W Back Button을 눌렀을때 어떻게 이동 하는지 지정
firstRoute : 선언상 제일 처음에 있는 탭으로 이동
initialRoute : 최초 지정한 탭으로 이동
order : 탭을 선언한 순으로 이동
history : 이동한 히스토리 역순으로 이동

Nesting Navigator란 ?
- Navigator의 Screen을 Component가 아닌 다른 Navigator로 선언하는 것.
- 주로, Presentation을 다르게 선언하거나, 조건에 따라 Navigator의 분기가 필요할때 사용

Glossary of terms (Navigator)
화면을 어떻게 그려줄지 결정해주는 리액트 컴포넌트 (aka 책 겉표지)
Navigation Container : 전체 Navigator를 관리해주는 역활 

Glossary of terms (Router)
- Navigation의 상태나 동작을 제어해주는 함수의 집합.
- 주로 화면간 데이터 전달을 위해 사용

Glossary of terms (Screen)
- 화면을 그려주는 컴포넌트 (aka. 책에서 종이 한장)

Glossary of terms (Navigation Prop, Route Prop)
- Navigation Prop : 화면 이동에 대한 함수들을 공통으로 제공
- Route Prop : 파라미터를 받아오거나 어떤 화면인지 이름을 알 수 있는 값들을 제공 해주는 역활 

Glossary of terms (Navigation State)
현재 React Navigation이 어떤 상태인지를 알 수 있는 값
주로 Stack Navigator 이전 Stack에 어떤 Screen이 있는지 찾기 위해 사용

Glossary of terms (Route)
Screen의 Name, Key, Param등을 저장하는 개념
어떤 화면인지 식별 하기 위해 사용.
Navigation State 하위에 Routes라는 배열에서 찾을수 있음.


Stack Navigator Screen options (presentation)
Stack Navigator에서 화면 이동 애니메이션에 대한 설정 옵션
Card : 오른쪽에서 왼쪽으로 이동하는 애니메이션
Modal : 아래에서 위로 이동하는 애니메이션 

Tab Navigator Screen options (backBehavior)
Android에서 H/W Back Button을 눌렀을때 어떻게 이동 하는지 지정
firstRoute : 선언상 제일 처음에 있는 탭으로 이동
initialRoute : 최초 지정한 탭으로 이동
order : 탭을 선언한 순으로 이동
history : 이동한 히스토리 역순으로 이동

Nesting Navigator란 ?
- Navigator의 Screen을 Component가 아닌 다른 Navigator로 선언하는 것.
- 주로, Presentation을 다르게 선언하거나, 조건에 따라 Navigator의 분기가 필요할때 사용


Nesting Navigator 사용시 주의점
1) Navigator는 각자의 History를 가지고 있음 
2) Navigator에서 Screen Param은 전달되지 않음 
3) B Navigator에서 동작할수 없으면 A Navigator로 전달
4) Navigator A의 이벤트를 Navigator B에서 받아 볼 수는 없음, focus, blur등. 필요한 경우 getParent로 찾아 등록해야 함
5) Tab, Drawer의 하위 Navigator일 경우 Tab 또는 Drawer에 가려짐 

DeepLink
- 특정 URL을 누르게 되면 지정한 화면으로 이동 하는것.
- 앱마다 유효한 scheme을 가지고 있는것 

Universal Link, App Links
무단으로 Scheme을 빼앗아 가는 현상을 막기 위함
각각 플랫폼에서의 도메인 인증단계를 통과 해야함

Action
화면 이동에 대한 명령어를 담고 있는 Object
ex) 책에서 N페이지로 이동, 이전페이지로 돌아가기 등

Action 구조
type : 어떤작업인지 나타내는 식별자
payload : 추가 정보가 포함되어있음. (parameter)

CommonAction
navigate : 특정 화면으로 이동하는 action – name, key, parameter
reset : 현재 상태를 지정한 상태로 변경해주는 action – login, logout
goBack : 이전 히스토리로 이동해주는 action

StackAction
push : 새로운 화면을 최상단에 넣는것
pop : 현재 보이고 있는 화면을 꺼내는것 

StackAction push vs CommonAction navigate
push : 제일 마지막 화면으로 계속 넣는 Action
push A, push B, push A Action이 발생한다면 B screen->A screen으로 바뀌어서 모든 Screen이 모두 A로 바뀜

TabAction
jumpTo : 탭간 이동 해야 할때 사용
