"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4248],{6909:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=n(5893),c=n(1151);const i={slug:"semantic-search-with-vector-and-graph",title:"Graph DB\uc5d0 Vector \ub97c \ud1b5\ud569\ud558\uc5ec Semantic Search \uad6c\ud604\ud558\uae30",authors:["bogyung"],tags:["semantic-search"]},a=void 0,r={permalink:"/publication/blog/semantic-search-with-vector-and-graph",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-11-semactic_search_with_vector_and_graph/index.md",source:"@site/blog/2023-12-11-semactic_search_with_vector_and_graph/index.md",title:"Graph DB\uc5d0 Vector \ub97c \ud1b5\ud569\ud558\uc5ec Semantic Search \uad6c\ud604\ud558\uae30",description:"\uc774 \uae00\uc5d0\uc11c\ub294 \ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130\uc758 \uc0c9\uc778(Index) \ubc29\uc2dd\uacfc \ud65c\uc6a9 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uae30\uc220\uc801\uc73c\ub85c \uc124\uba85\ud55c\ub2e4. LLM \ubaa8\ub378 \uc790\uccb4\uc5d0 \ub300\ud55c \uae30\uc220\uc801\uc778 \uc124\uba85\uc774\ub098, \uc790\uc5f0\uc5b4 \ucc98\ub9ac(NLP)\uc5d0 \ub300\ud574 \uad6c\ud604(implementation) \uad00\uc810\uc758 \uc0c1\uc138\ud55c \uc124\uba85\uc740 \ud575\uc2ec \uc8fc\uc81c\uac00 \uc544\ub2c8\ub2e4.",date:"2023-12-11T00:00:00.000Z",formattedDate:"December 11, 2023",tags:[{label:"semantic-search",permalink:"/publication/blog/tags/semantic-search"}],readingTime:6.315,hasTruncateMarker:!1,authors:[{name:"bogyung",title:"Data Engineer @ Intellectus",url:"https://www.linkedin.com/in/%EB%B3%B4%EA%B2%BD-%EC%B0%A8-793a641a8/",imageURL:"https://media.licdn.com/dms/image/D5603AQEIyPu7ittZhg/profile-displayphoto-shrink_800_800/0/1699874754841?e=1708560000&v=beta&t=_Y-ZSxsHmRCY6xKA74q64TK3TGKYMCZR5djqtywgNw0",key:"bogyung"}],frontMatter:{slug:"semantic-search-with-vector-and-graph",title:"Graph DB\uc5d0 Vector \ub97c \ud1b5\ud569\ud558\uc5ec Semantic Search \uad6c\ud604\ud558\uae30",authors:["bogyung"],tags:["semantic-search"]},unlisted:!1,nextItem:{title:"AWS\uc5d0\uc11c Roles Anywhere\ub85c credential \uad00\ub9ac \ub300\uccb4\ud558\uae30",permalink:"/publication/blog/iam-role-anywhere"}},o={authorsImageUrls:[void 0]},h=[{value:"Semantic vs. Synthetic",id:"semantic-vs-synthetic",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\uc774 \uae00\uc5d0\uc11c\ub294 \ud14d\uc2a4\ud2b8(\uc790\uc5f0\uc5b4) \ub370\uc774\ud130\uc758 \uc0c9\uc778(Index) \ubc29\uc2dd\uacfc \ud65c\uc6a9 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c \uae30\uc220\uc801\uc73c\ub85c \uc124\uba85\ud55c\ub2e4. LLM \ubaa8\ub378 \uc790\uccb4\uc5d0 \ub300\ud55c \uae30\uc220\uc801\uc778 \uc124\uba85\uc774\ub098, \uc790\uc5f0\uc5b4 \ucc98\ub9ac(NLP)\uc5d0 \ub300\ud574 \uad6c\ud604(implementation) \uad00\uc810\uc758 \uc0c1\uc138\ud55c \uc124\uba85\uc740 \ud575\uc2ec \uc8fc\uc81c\uac00 \uc544\ub2c8\ub2e4.\n\ud14d\uc2a4\ud2b8 \uc784\ubca0\ub529\uc744 \uc774\uc6a9\ud55c \uac80\uc0c9 \uc2dc\uc2a4\ud15c\uc758 \uc804\ubc18\uc801\uc778 \uc124\uba85\uc740 ",(0,s.jsx)(t.a,{href:"blog/txt-index-with-vector-embeddings",children:"\uc774\uc804 \ud3ec\uc2a4\ud305"}),"\uc5d0\uc11c \ub2e4\ub8e8\uc5c8\ub2e4.\n\uc784\ubca0\ub529\uc744 \uc774\uc6a9\ud55c \ubca1\ud130 \uc720\uc0ac\ub3c4(Vector Similarity) \uae30\ubc18 \uc2dc\ub9e8\ud2f1 \uac80\uc0c9\uc744 \uc774\ud574 \ud558\uac70\ub098, Graph DB\ub97c \uc801\uc6a9\ud55c \uac80\uc0c9 \uae30\ub2a5 \uace0\ub3c4\ud654\uc5d0 \uad00\uc2ec\uc774 \uc788\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5d4\uc9c0\ub2c8\uc5b4\uc5d0\uac8c \ub3c4\uc6c0\uc774 \ub420 \uac83\uc774\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"semantic-vs-synthetic",children:"Semantic vs. Synthetic"}),"\n",(0,s.jsx)(t.p,{children:"\uc0ac\uc6a9\uc790\uac00 \uc790\uc5f0\uc5b4\ub97c \uc774\uc6a9\ud574 \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ucc3e\uae30 \uc704\ud55c \uae30\uc220 \uc911 \ube44\uad50\ud574\ubcfc \uc218 \uc788\ub294 \uac83\uc73c\ub85c \uc544\ub798\uc640 \uac19\uc740 \ub450 \ubc29\uc2dd\uc774 \uc788\ub2e4."}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"\uc9c1\uc811\uc801\uc778 \ud0a4\uc6cc\ub4dc \ub9e4\uce6d \uc744 \uc774\uc6a9\ud55c Synthetic Search(Keyword Search)"}),"\n",(0,s.jsx)(t.li,{children:"\ubca1\ud130 \uc720\uc0ac\ub3c4 \uce21\uc815(Vector Similarity)\uc744 \uc774\uc6a9\ud55c Semantic Search"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Synthetic Search\uc758 \ub300\ud45c\uc801\uc778 \uc608\ub85c n-gram\uc744 \uae30\ubc18\uc73c\ub85c Full-text search\ub97c \uc9c0\uc6d0\ud558\ub294 \ubc29\uc2dd\uc774 \uc788\ub294\ub370, \uc774\ub294 \uc804\ubb38\uc744 \uc77c\uc815 \ub2e8\uc704(n)\ub85c \ucabc\uac1c\uc5b4 \uac01\uac01\uc758 \ubd80\ubd84\ub4e4\uc744 \uc778\ub371\uc2a4\ub85c \ud65c\uc6a9\ud558\uc5ec \uac80\uc0c9 \uc815\ud655\ub3c4\ub97c \uc62c\ub9ac\ub294 \ubc29\ubc95\uc774\ub2e4. \uc6f9 \ube0c\ub77c\uc6b0\uc800\ub098 \uc77c\ubd80 \ud504\ub85c\uadf8\ub7a8\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 Ctrl + f(\ucc3e\uae30)\uae30\ub2a5\uc774 \ubc14\ub85c \ub300\ud45c\uc801\uc774\ub2e4. \uc774\ub294 \uc785\ub825\ub41c \uac80\uc0c9\uc5b4\uc758 \uc77c\uce58\ub97c \uac80\uc0ac\ud558\uae30 \ub54c\ubb38\uc5d0 \ub192\uc740 \uc815\ud655\ub3c4\uc758 \uc7a5\uc810\uc774 \uc788\uc9c0\ub9cc, \ubc18\ub300\ub85c \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uac80\uc0c9\uc5b4 \ub0b4\uc758 \uc624\ud0c0 \ubc1c\uc0dd\uc774\ub098 \uc798\ubabb\ub41c \ub744\uc5b4\uc4f0\uae30 \uac19\uc740 \ubb38\ubc95\uc801 \ucc28\uc774\ub85c \uae30\ub300\ud558\ub294 \uac80\uc0c9 \uacb0\uacfc\ub97c \uc5bb\uc9c0 \ubabb\ud560 \uc218\ub3c4 \uc788\ub2e4. \ub610\ud55c \uc778\ub371\uc2a4 \ub2e8\uc704 \ub370\uc774\ud130\uac00 \ubcc4\ub3c4\ub85c \uc800\uc7a5\ub418\uace0 \uc815\ub82c\ub418\uae30 \ub54c\ubb38\uc5d0 \uc778\ub371\uc2a4 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc758 \uc6a9\ub7c9\uacfc \ubcc0\uacbd\uc5d0 \ub530\ub978 \uc7ac \uc800\u11bc\ub824\u11af \uacfc\uc815\uc5d0\uc11c \ubd80\ud558\uac00 \ubc1c\uc0dd\ud558\ub294 \ub2e8\uc810\uc774 \uc788\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:"\ub610\ud55c, \ub370\uc774\ud130\uc758 \uc758\ubbf8\ub860\uc801 \uc5f0\uad00\uc131\uc744 \ubc18\uc601\ud560 \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0 \ube44\uc2b7\ud55c \uc758\ubbf8\ub97c \uac00\uc9c4 \ub370\uc774\ud130\ub97c \ucc3e\ub294 \ub370 \uc5b4\ub824\uc6c0\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7f0 \ud55c\uacc4\ub97c \uadf9\ubcf5\ud558\uace0 \ubcf4\uc644\ud558\ub294 \ubc29\ubc95\uc73c\ub85c Vector Similarity\ub97c \ud65c\uc6a9\ud558\ub294 \uac83\uc774 Semantic Search \uc758 \uc5ec\ub7ec \ubc29\uc2dd \uc911 \ud558\ub098\uac00 \uc788\ub2e4.\nSemantic Search\ub294 \uc790\uc5f0\uc5b4\uc758 \uc758\ubbf8\ub860\uc801 \uc694\uc18c\ub97c \ubc18\uc601\ud558\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc5d0\uc11c \ub354 \ud48d\ubd80\ud55c \uac80\uc0c9 \uacb0\uacfc\ub97c \uc81c\uacf5\ubc1b\uc744 \uc218 \uc788\ub2e4. \uc784\ubca0\uc77c \uae30\uc220\uc744 \uc774\uc6a9\ud574\uc11c \ub2e8\uc5b4\ub97c \ubca1\ud130\ud654\ub85c \ud45c\ud604\ud558\uba74 \uc720\uc0ac\uc131\uc744 \uacc4\uc0b0\ud560 \uc218 \uc788\uc73c\ubbc0\ub85c \uc774\ub7ec\ud55c \uac80\uc0c9 \ubc29\uc2dd\uc744 \uad6c\ud604\ud558\ub294 \uac83\uc774 \uac00\ub2a5\ud558\ub2e4. \uc0ac\uc6a9\uc790\uac00 \uc785\ub825\ud55c \uac80\uc0c9\uc5b4\uc640 \uad00\ub828\ub41c \uc815\ubcf4\ub97c \ub354\uc6b1 \ud6a8\uacfc\uc801\uc73c\ub85c \ucc3e\uc744 \uc218 \uc788\ub2e4."}),"\n",(0,s.jsxs)(t.p,{children:["\uba3c\uc800 \ub2e8\uc5b4\ub97c \ucef4\ud4e8\ud130\uac00 \ucc98\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ub2e4\ucc28\uc6d0\uc758 \ubca1\ud130\ub85c \ubcc0\uacbd\uc2dc\ud0a4\ub294 Text Embedding\uc774 \ud544\uc694\ud558\ub2e4.  \uc784\ubca0\ub529 \ubc29\ubc95\uc774\ub098 \ubca1\ud130 \uc720\uc0ac\ub3c4\uc5d0 \ub300\ud55c \uc124\uba85\uc740 \uc774\uc804 ",(0,s.jsx)(t.a,{href:"blog/txt-index-with-vector-embeddings",children:"\ud3ec\uc2a4\ud2b8\ub97c"})," \ucc38\uace0\ud558\uba74 \ub41c\ub2e4."]}),"\n",(0,s.jsx)(t.p,{children:"\ud14d\uc2a4\ud2b8 \uc784\ubca0\ub529\uc740 (\uc77c\ubc18\uc801\uc73c\ub85c) \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub378\uc744 \ud559\uc2b5\uc2dc\ud0ac \uc218\ub85d \uc131\ub2a5\uc774 \ud5a5\uc0c1\ub418\uba70, \uc5ec\ub7ec \ud30c\ub77c\ubbf8\ud130/\uc784\ubca0\ub529 \ucc28\uc6d0 \ub4f1\uc744 \uc870\uc815\ud574\uc57c \ud55c\ub2e4. \uc9c1\uc811 \uc784\ubca0\ub529 \ubaa8\ub378\uc744 \uad6c\ucd95\ud558\uace0 \ucda9\ubd84\ud55c \uc591\uc758 \ub370\uc774\ud130\ub97c \ud559\uc2b5 \uc2dc\ud0a4\uace0, \ucda9\ubd84\ud55c \ud558\ub4dc\uc6e8\uc5b4 \uc790\uc6d0\uc744 \uc774\uc6a9\ud574\uc11c \ub3d9\uc791 \uc2dc\ud0a4\ub294 \uc77c\uc740 \uae30\uc220\uc801 \ub09c\uc774\ub3c4\ub098 \ube44\uc6a9 \uba74\uc5d0\uc11c \uc26c\uc6b4 \uc77c\uc774 \uc544\ub2c8\ub2e4. \ucd5c\uadfc\uc5d0\ub294 LLM \uae30\ubc18\uc758 \uc11c\ube44\uc2a4\ub4e4\uc774 \uc81c\uacf5\ud558\ub294 \uc784\ubca0\ub529 API\uac00 \uc88b\uc740 \ub300\uc548\uc774 \ub420 \uc218 \uc788\ub2e4. \uc0c1\uc6a9 \uc218\uc900\uc758 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 \ub9cc\ud07c \uacb0\uacfc \uba74\uc5d0\uc11c\ub3c4 \ub192\uc740 \ud488\uc9c8\uc744 \uc81c\uacf5\ud558\uba70, \ubaa8\ub378 \uc0dd\uc131\uc744 \uc704\ud55c \ud559\uc2b5\uacfc \ucd94\ub860\uc5d0 \ud544\uc694\ud55c \ud558\ub4dc\uc6e8\uc5b4 \uc790\uc6d0\uc744 \uacf5\uc720\ud558\ub294 \ubaa8\ub378\uc774\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\ub7c9 \ub9cc\ud07c\uc758 \ud569\ub9ac\uc801\uc778 \ube44\uc6a9\uc744 \uae30\ub300\ud560 \uc218 \uc788\ub2e4. OpenAI\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Embedding API\ub3c4 \uadf8 \uc911 \ud558\ub098 \uc774\ub2e4. API \uc0ac\uc6a9\ub7c9\uc5d0 \ub530\ub77c \uc77c\uc815 \ube44\uc6a9(23\ub144 6\uc6d4 \uae30\uc900 0.0001$/1K token)\uc774 \ubc1c\uc0dd\ud55c\ub2e4. \ubb34\uc5c7\ubcf4\ub2e4 NLP \uc11c\ube44\uc2a4\ub97c \uac1c\ubc1c\ud558\ub294 \ucd08\uae30 \ub2e8\uacc4\uc5d0\uc11c \ud569\ub9ac\uc801\uc778 \ube44\uc6a9\uacfc \uc131\ub2a5\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \ubaa8\ub378 \uc0dd\uc131\uc758 \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 \ube44\uacf5\uac1c \uc774\uc9c0\ub9cc, \uacbd\uc6b0\uc5d0 \ub530\ub77c\uc11c\ub294 \uc601\uc5b4 \uc678 \uc5b8\uc5b4\uc5d0 \ub300\ud574\uc11c\ub3c4 \uc720\uc758\ubbf8\ud55c \uacb0\uacfc\ub97c \uc5bb\uc744 \uc218 \uc788\ub2e4\ub294 \uac83\uc740 \uc7a5\uc810 \uc911 \ud558\ub098 \uc774\ub2e4."}),"\n",(0,s.jsx)(t.p,{children:"\ud558\uae30\ub294 \ub370\ubaa8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \ub3d9\uc791 \ubaa8\uc2b5\uc73c\ub85c \uc774\ubaa8\uc9c0(Emoji) \ub370\uc774\ud130\ub97c GloVe \ubc29\uc2dd\uc73c\ub85c twitter \uc5d0\uc11c \uc0dd\uc131\ub41c corpus \ub97c \uc9c1\uc811 \ud6c8\ub828\uc2dc\ucf1c \uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c \uc9c1\uc811 \ub3d9\uc791\uc2dc\ud0a8 \ubaa8\ub378\uacfc OpenAI \uc758 \uc784\ubca0\ub529 API\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac01\uac01 \uc785\ub825 \uac80\uc0c9\uc5b4\uc5d0 \ub300\ud574 \uad00\ub828\uc131\uc774 \uc788\ub294 \uacb0\uacfc\ub97c \ud45c\uc2dc\ud55c \uac83\uc774\ub2e4."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.img,{alt:"demo-screenshot-01",src:n(6698).Z+"",width:"1502",height:"811"}),(0,s.jsx)(t.em,{children:"demo screenshot"}),"\n",(0,s.jsx)(t.img,{alt:"demo-screenshot-02",src:n(9825).Z+"",width:"1367",height:"768"}),(0,s.jsx)(t.em,{children:"demo screenshot"}),"\n",(0,s.jsx)(t.img,{alt:"demo-screenshot-03",src:n(4198).Z+"",width:"1556",height:"766"}),(0,s.jsx)(t.em,{children:"demo screenshot"})]})]})}function l(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6698:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/demo-screenshot-01-291afc3fd1c73333fe03373895c23080.png"},9825:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/demo-screenshot-02-3569b9e75c5099e657d1bdb33b4fc4da.png"},4198:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/demo-screenshot-03-7a553ddadc93b151882347ec5e7d1881.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var s=n(7294);const c={},i=s.createContext(c);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);