"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[329],{4414:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"dev-with-serverless","metadata":{"permalink":"/publication/blog/dev-with-serverless","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-10-11-serverless/index.md","source":"@site/blog/2023-10-11-serverless/index.md","title":"Serverless","description":"Serverless \ubc29\uc2dd\uc774 \ucd94\uad6c\ud558\ub294 \uc131\uacfc\ub294 \uc0c1\ub2f9\ud788 \uc774\uc0c1 \uc801\uc774\ub2e4. \uc720\uc9c0\ubcf4\uc218\uc640 \ubcc0\uacbd\uad00\ub9ac\ub97c \uc27d\uac8c \ub9cc\ub4e4\uace0, \uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c\uc758 \uc790\uc6d0 \uad00\ub9ac\ub97c \ud6a8\uc728\uc131\uc744 \ub192\uc778\ub2e4.","date":"2023-10-11T00:00:00.000Z","formattedDate":"October 11, 2023","tags":[{"label":"serverless","permalink":"/publication/blog/tags/serverless"},{"label":"aws","permalink":"/publication/blog/tags/aws"},{"label":"cloud-computing","permalink":"/publication/blog/tags/cloud-computing"}],"readingTime":8.8,"hasTruncateMarker":false,"authors":[{"name":"Eunho","title":"Software Engineer @ Intellectus","url":"https://www.linkedin.com/in/eunho/","imageURL":"https://media.licdn.com/dms/image/C5603AQHOMis43w0DAg/profile-displayphoto-shrink_800_800/0/1516981036906?e=1702512000&v=beta&t=Pbv2yix0CjSUMkBIfZ0hnLtDclSkutuebkLm9L8hbZw","key":"eunho"}],"frontMatter":{"slug":"dev-with-serverless","title":"Serverless","authors":["eunho"],"tags":["serverless","aws","cloud-computing"]},"nextItem":{"title":"Welcome","permalink":"/publication/blog/welcome"}},"content":"Serverless \ubc29\uc2dd\uc774 \ucd94\uad6c\ud558\ub294 \uc131\uacfc\ub294 \uc0c1\ub2f9\ud788 \uc774\uc0c1 \uc801\uc774\ub2e4. \uc720\uc9c0\ubcf4\uc218\uc640 \ubcc0\uacbd\uad00\ub9ac\ub97c \uc27d\uac8c \ub9cc\ub4e4\uace0, \uc6b4\uc601 \ud658\uacbd\uc5d0\uc11c\uc758 \uc790\uc6d0 \uad00\ub9ac\ub97c \ud6a8\uc728\uc131\uc744 \ub192\uc778\ub2e4.\\n\uacbd\ud5d8\uc5d0 \ube44\ucd94\uc5b4 \ubd24\uc744 \ub54c, \ud300 \ub2e8\uc704\ub85c \uc6c0\uc9c1\uc774\uace0 \uc788\ub294 \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c\ub294 \ubcc0\ud654\uc758 \uc815\ub3c4\uc5d0 \ube44\ub840\ud558\uc5ec \uc800\ud56d\uc774 \ubc1c\uc0dd\ud55c\ub2e4. \\nServerless \ubc29\uc2dd\uc774 \uc81c\uacf5\ud558\ub294 \uad6c\uc870\uc801\uc778 \uc7a5\uc810\uc744 \uc628\uc804\ud788 \ucde8\ud558\uba74\uc11c, \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud658\uacbd\uc5d0 \ub9de\uac8c \ucd5c\uc801\ud654 \ud558\ub294 \uc77c\uc740 \uae30\uc874\uc5d0 \ub3d9\uc791\ud558\uace0 \uc788\ub294 \uc5c5\ubb34 \ud504\ub85c\uc138\uc2a4\uc758 \uc131\uc219\ub3c4\uac00 \ub192\uc744\uc218\ub85d \ub192\uc740 \uc218\uc900\uc758 \ubcc0\ud654\ub97c \uc694\uad6c\ud55c\ub2e4.\\n\\n\ucf54\ub4dc \uc791\uc131\uc5d0 \uc0ac\uc6a9\ud558\ub294 \ud234\uc774\ub098 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4, \ud639\uc740 \uc0c8\ub85c\uc6b4 \uac1c\ubc1c \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ub3c4\uc785\uc740 Serverless \ubc29\uc2dd\uc744 \uc628\uc804\ud788 \uc801\uc6a9\ud558\ub294 \uac83\uc5d0 \ube44\ud558\uba74 \ub2e8\uc21c\ud55c \ubcc0\ud654\ub77c \ud560 \uc815\ub3c4\ub2e4.\\n\uc774 \ud3ec\uc2a4\ud2b8\uc5d0\uc11c \uacbd\ud5d8\uc744 \ubc14\ud0d5\uc73c\ub85c \ub2e4\uc74c\uc758 \uc8fc\uc81c\uc5d0 \ub300\ud574\uc11c \uc0dd\uac01\uc744 \ub098\ub220 \ubcf4\uace0\uc790 \ud55c\ub2e4:\\n- **\uc65c Serverless \ubc29\uc2dd\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?**\\n- **\ubc14\uafd4\uc57c \ud558\ub294 \uac83\ub4e4**\\n-  **\uc8fc\uc5b4\uc9c4 \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd\uc5d0\uc11c \uc131\uacf5\uc5d0 \uae30\uc5ec\ud558\uae30 \uc704\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc804\ub7b5\uacfc \uae30\uc220\uc801\uc778 \uad6c\ud604 \uc0ac\ub840**\\n\\n## \uc65c Serverless \ubc29\uc2dd\uc744 \uc120\ud0dd\ud574\uc57c \ud560\uae4c?\\n\\n\uc65c \ud574\uc57c \ud558\ub294\uc9c0  \ub530\ub77c\uc11c \uc5b4\ub5bb\uac8c \ud574\uc57c \ud560 \uac83\uc778\uac00\uac00 \uacb0\uc815\ub41c\ub2e4.\\n\\n\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5c5\uacc4\uc5d0\uc11c \'No Silver Bullet\'[^1]\uc740 \ub110\ub9ac \uc54c\ub824\uc9c4 \uba85\uc81c\uc774\ub2e4. \ud2b9\uc815 \uad00\uc810\uc5d0\uc11c \uc6b0\uc6d4\ud560 \uc218 \uc788\ub294 \uc5b4\ub5a4 \uc120\ud0dd\ub3c4 \ub2e4\ub978 \uad00\uc810\uacfc \uc0c1\ucda9(trade-off) \ub418\ub294 \uacbd\uc6b0\ub294 \ub9e4\uc6b0 \ud754\ud558\ub2e4.\\n\ubb34\uc5c7\ubcf4\ub2e4\ub3c4 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc740 \uc21c\uc218 \ucc3d\uc791\ubb3c\uc774 \uc544\ub2c8\ub77c \ube44\uc988\ub2c8\uc2a4\ub97c \uc9c0\uc6d0\ud558\uace0 \ud601\uc2e0\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\uae30 \ub54c\ubb38\uc5d0 \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd \ubcc0\ud654\uc5d0 \ub530\ub77c \uc801\uc751\ud574\uc57c \ud558\ub294 \uac83\uc740 \ud544\uc5f0\uc801\uc774\ub2e4.\\n\uc774\ub7ec\ud55c \ud2b9\uc131\uc5d0 \ube44\ucd94\uc5b4 Serverless \ubc29\uc2dd\uc758 \ub3c4\uc785\uc758 \uc774\uc720\ub294 \ub2e8\uc21c\ud558\uace0 \uc9c1\uad00\uc801\uc774\ub2e4. \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd\uc758 \uc6c0\uc9c1\uc784\uc744 \uc790\ub3d9\ucc28\uc640 \ube44\uad50\ud558\uba74 \uc774 \uc0dd\ud0dc\uacc4\ub294 \ud56d\uc0c1 accelerator-pedal\uc744 \ud798\uaecf \ubc1f\uace0 \uc788\ub2e4.\\n\ub2e8\uc21c\ud788 \ud2b9\uc815 \ubc29\ud5a5\uc73c\ub85c \uc6c0\uc9c1\uc774\uace0 \uc788\ub294\uac83\uc774 \uc544\ub2c8\ub77c \ud56d\uc0c1 \uac00\uc18d\uc744 \ud558\uace0 \uc788\ub294 \uac83\uc774\ub2e4. \uc5ed\uc0ac\uc801\uc73c\ub85c \uc774 \uc704\ud0dc\ub85c\uc6cc \ubcf4\uc774\ub294 \uc9c8\uc8fc\ub97c \uc9c0\uc18d\ud558\ub294 \ubc29\ubc95\uc740 \uac10\uc18d \uc7a5\uce58((brake))\ub97c \ubc1c\uc804\uc2dc\ud0a4\ub294 \uac83\uc774 \uc544\ub2c8\ub77c, \ub354 \ub2e8\ub2e8\ud55c \uc100\uc2dc(chassis)\uc640 \uc2a4\ud14c\ube4c\ub77c\uc774\uc800(stabilizer)\ub97c \ubcf4\uc644\ud558\uba74\uc11c \ub3d9\uc2dc\uc5d0 \ub354 \ube60\ub978 \uac00\uc18d \uc7a5\uce58\ub97c \ucd94\uac00\ud558\ub294 \uac83\uc774\ub2e4. Serverless \ubc29\uc2dd\uc740 \uc0c8\ub85c\uc6b4 \uac00\uc18d \uc7a5\uce58\uc774\ub2e4.\\n\\n\uc0b0\uc5c5 \ud604\uc7a5\uc5d0\uc11c\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc2dc\uc2a4\ud15c\uc744 \ud65c\uc6a9\ud574\uc11c \ube44\uc988\ub2c8\uc2a4 \uae30\ud68c\ub97c \ud655\uc7a5\ud558\uace0 \uc2e4\ud589\uc744 \uac00\uc18d\ud654 \ud558\uace0\uc788\ub2e4. \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc81c\ud488\uc758 \uad6c\ud604\uacfc \uc720\uc9c0\ubcf4\uc218\ub3c4 \uc774\ub7ec\ud55c \uc18d\ub3c4\uc5d0 \ubc1c\uc744 \ub9de\ucdb0\uc57c \ud55c\ub2e4. \uc774 \ubcc0\ud654\ub294 \ud2b9\uc815 \uc5ed\ub7c9\uc758 \uac15\ud654\ub97c \ud1b5\ud574 \ucd94\uaca9\ud558\ub294 \uac83\uc774\ub77c\uae30 \ubcf4\ub2e4 \uad6c\uc870\uc801\uc778 \uc9c4\ubcf4\ub97c \ub9d0\ud55c\ub2e4.\\n\\n\ub610 \ud55c\uac00\uc9c0 \uc8fc\ubaa9\ud574\uc57c \ud560 \uac83\uc740 \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305\uc774\ub77c\ub294 \ud328\ub7ec\ub2e4\uc784\uc774\ub2e4. \\n\\n## \ubc14\uafd4\uc57c \ud558\ub294 \uac83\ub4e4\\n\\n## \uc8fc\uc5b4\uc9c4 \ube44\uc988\ub2c8\uc2a4 \ud658\uacbd\uc5d0\uc11c \uc131\uacf5\uc5d0 \uae30\uc5ec\ud558\uae30 \uc704\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc804\ub7b5\uacfc \uae30\uc220\uc801\uc778 \uad6c\ud604 \uc0ac\ub840\\n\\nPoC \uc218\ud589\uc744 \ud1b5\ud574 \ubcf8\uaca9\uc801\uc778 \uad6c\ud604 \ub2e8\uacc4\uc5d0 \uc9c4\uc785\ud558\uae30 \uc804\uc5d0 \uc5ec\ub7ec\uac00\uc9c0 \uac00\uc124\uc744 \uac80\uc99d\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\uac00 \ud544\uc694\ud588\uace0, MVP \uad6c\ud604\uc744 \ud1b5\ud574 \ub0b4\ubd80 \uc774\ud574\ub2f9\uc0ac\uc790\ub098 \ub610\ub294 \ubd88\ud2b9\uc815 \uc0ac\uc6a9\uc790\uc5d0\uac8c\ub3c4 \uc6b0\ub9ac \uc544\uc774\ub514\uc5b4\ub97c \ub178\ucd9c\uc2dc\ucf1c \ud53c\ub4dc\ubc31\uc744 \uc218\uc9d1\ud574\uc57c \ud558\ub294 \uc77c\uc774 \ub9ce\uc558\ub2e4. \uc694\uc57d\ud558\uc790\uba74 \ube60\ub974\uace0 \ud6a8\uc728\uc801\uc774\uc5b4\uc57c \ud588\ub2e4. \ud55c\uac00\uc9c0 \uac15\uc870\ud558\uace0 \uc2f6\uc740 \uac83\uc740 \uad6c\ud604\ud558\ub294 \uac83 \uc790\uccb4\uac00 \ubaa9\uc801\uc774 \uc544\ub2c8\ub77c \uad6c\ud604\uccb4\ub97c \ud1b5\ud574\uc11c \uc544\uc774\ub514\uc5b4\uc5d0 \ub300\ud55c \ub370\uc774\ud130\ub97c \ud655\ubcf4\ud558\ub294 \uac83\uc774 \uc9c4\uc9dc \ubaa9\uc801\uc774\ub77c\ub294 \uac83\uc774\ub2e4.\\n\\n\uc774\ub7ec\ud55c \uc791\uc5c5\uc758 \ubc18\ubcf5\uc740 \uc0dd\uac01\ubcf4\ub2e4 \uc720\ucf8c\ud558\uc9c0 \uc54a\ub2e4. \ub2e8\uc21c\ud55c \uae30\ub2a5\uc774 \uc544\ub2c8\ub77c \uc544\uc8fc \uc881\uc740 \ubc94\uc704 \uc77c\uc9c0\ub77c\ub3c4 \ube44\uc988\ub2c8\uc2a4 \uc2dc\ub098\ub9ac\uc624\ub97c \uc2e4\ud589\uc2dc\ucf1c\uc57c \ud588\ub2e4. \uc720\uc758\ubbf8\ud55c \ub370\uc774\ud130\ub97c \ud655\ubcf4\ud558\uae30 \uc704\ud574\uc11c\ub294 \uc2dc\uc7a5\uc5d0\uc11c\uc758 \ube44\uad50 \uc6b0\uc704\ub97c \uc8fc\uc7a5\ud560 \uc218 \uc788\uc744 \uc815\ub3c4\ub294 \uc544\ub2c8\ub354\ub77c\ub3c4 \uc77c\ubc18 \uc0ac\uc6a9\uc790\ub4e4\uc774 \uc77c\uc815 \uc2dc\uac04 \uba38\ubb3c\uba74\uc11c \uc368\ubcfc \uc218 \uc788\uc744 \uc815\ub3c4\ub294 \ub3fc\uc57c \ud588\ub2e4. \ud2b8\ub798\ud53d\uc774 \uc5b4\ub290\uc815\ub3c4 \ubc1c\uc0dd\ud574\uc57c \ub370\uc774\ud130\uc5d0 \ub300\ud55c \ud574\uc11d\uc774 \uac00\uce58\uac00 \uc788\uac8c \ub418\ub294 \uacbd\uc6b0\ub4e4\ub3c4 \uc788\uae30\uc5d0 \ud2b9\uc815 \ubaa9\uc801\uc758 \ub9c8\ucf00\ud305\uc774\ub098 \ud64d\ubcf4 \uac19\uc740 \ud65c\ub3d9\uc744 \uc9c4\ud589\ud560 \uc218 \uc788\ub3c4\ub85d \uc2dc\uc2a4\ud15c\uc774 \uc9c0\uc18d\uc801\uc73c\ub85c \uc6b4\uc601\ub3fc\uc57c \ud588\ub2e4. \ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305 \uc11c\ube44\uc2a4\ub97c \uc804\ub7b5\uc801\uc73c\ub85c \ud65c\uc6a9 \ud588\uace0 \uac00\uc6a9\uc131\uc774\ub098 \uc131\ub2a5\uc5d0 \ub300\ud55c \uace0\ub824\ub97c \ucd5c\uc18c\ud654 \ud588\uc9c0\ub9cc \ube44\uc6a9\uc740 \ubb34\uc2dc\ud560 \uc218 \uc788\ub294 \uc218\uc900\uc774 \uc544\ub2c8\uc5c8\ub2e4.\\n\uc774\ubbf8 \uc54c\ub824\uc9c4 \ub9ce\uc740 \uc131\uacf5 \uc0ac\ub840\uc5d0\uc11c \ubbfc\ucca9\ud558\uac8c \ube44\uc988\ub2c8\uc2a4\ub97c \uc11c\ud3ec\ud2b8\ud558\ub294 \uc2dc\uc2a4\ud15c\uc744 \uc5b4\ub5bb\uac8c \uac1c\ubc1c\ud558\uba74 \uc88b\uc740\uc9c0\uc5d0 \ub300\ud574\uc11c \uc774\uc57c\uae30\ud558\uace0 \uc788\uc9c0\ub9cc, \uc798 \uc0dd\uac01\ud574 \ubcf4\uba74 \uadf8\ub7f0 \uc774\uc57c\uae30\ub4e4\uc740 \uc131\uacf5\ud588\uae30 \ub54c\ubb38\uc5d0 \uc131\ub9bd\ub418\ub294 \ub17c\ub9ac \uc778 \uacbd\uc6b0\uac00 \ub9ce\ub2e4. \ud604\uc2e4\uc740 \uc544\uc774\ub514\uc5b4\ub97c \uc544\ubb34\ub9ac \uc798 \uad6c\ud604\ud574\uc11c \uce58\uc5f4\ud55c \ub17c\uc758 \ub05d\uc5d0 \uacb0\uc815\ud55c \uc6b0\ub9ac \ube0c\ub79c\ub4dc\uc758 \ub3c4\uba54\uc778\uc5d0 \uc5f0\uacb0\uc2dc\ucf1c \uacf5\uac1c\ud574\ub3c4 \uc544\ubb34\uc77c\ub3c4 \uc77c\uc5b4\ub098\uc9c0 \uc54a\ub294\ub2e4\ub294 \uac83\uc774\ub2e4. \ud300 \ub0b4\ubd80\uc758 \uc5ec\ub7ec \uac00\uc124\uc744 \uc99d\uba85\ud558\uae30 \uc704\ud574 \ud14c\uc2a4\ud2b8\uc6a9 \ud2b8\ub798\ud53d\uc744 \ubc1c\uc0dd\uc2dc\ud0a4\ub294 \ub610 \ub2e4\ub978 \uac1c\ubc1c\uc744 \ud558\uac70\ub098, \uacc4\uc18d \uc3df\uc544\uc838 \ub098\uc624\ub294 \uc5ec\ub7ec \uac1c\ubc1c \ubc0f \uc6b4\uc601 \ub3c4\uad6c\ub4e4\uc744 \ucc3e\uc544\ubcf4\uba74\uc11c \uc5b4\ub5bb\uac8c \uc801\uc6a9\uc2dc\ucf1c\uc57c \ud560\uc9c0\ub97c \uace0\ubbfc\ud558\uba74\uc11c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc791\uc131\ud574\uc57c \ud55c\ub2e4.\\n\uadf8\ub798\uc11c \ud544\uc694\ud55c \uac83\uc740 \uc2dc\uac04\uc774\ub2e4. \ud544\uc694\ud55c \uad6c\ud604\uccb4\ub97c \ub354 \ube68\ub9ac \ub9cc\ub4e4\uc5b4\ub0b4\uace0, \ub610 \ud544\uc694\ud55c \ubb34\uc5b8\uac00\ub97c \ud574\uc57c \ud560 \uc2dc\uac04 \ub3d9\uc548 \ubc1c\uc0dd\ud558\ub294 \ube44\uc6a9\uc744 \uc904\uc774\uba74 \ubb34\uc5b8\uac00\ub97c \ud560 \uc218 \uc788\ub294 \uc2dc\uac04\uc774 \uc0dd\uae34\ub2e4.\\n\\n\uc774 \ubb38\uc81c\uc5d0 \ub300\ud55c \ub300\uc548\uc73c\ub85c \uc0dd\uac01\ud55c \uac83\uc774 PoC \ud639\uc740 MVP \uad6c\ud604\uc5d0\ub294 \uc0ac\uc6a9\ub7c9 \uae30\ubc18 \uacfc\uae08 \uc815\ucc45 \uc11c\ube44\uc2a4\ub97c \ucd5c\ub300\ud55c \ud65c\uc6a9\ud558\ub294 \uac83\uc774\uc5c8\uace0, \uadf8 \uc911 \ud558\ub098\uac00 Serverless \ub77c\ub294 \ud0a4\uc6cc\ub4dc\uc774\ub2e4. \uadf8\ub9ac\uace0 \uc774\ub807\uac8c \uad6c\ud604 \ud574 \ub193\uc740 \uc0c1\ud0dc\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc804\uae4c\uc9c0 \uacc4\uc18d \uc720\uc9c0\ud560 \uc218 \uc788\ub2e4\uba74 \ud544\uc694\ud55c \uae30\ub2a5\ub4e4\uc744 Microservice \ub85c \uc798 \uc124\uacc4\ud574\uc11c \uc7ac\uc0ac\uc6a9 \ud558\ub294 \uac83\uc774\ub2e4. \uc11c\ubc84\ub97c \uacc4\uc18d \uc720\uc9c0\ud560 \uc218 \uc5c6\ub294 \ud658\uacbd\uc5d0\uc11c\ub294 \uc18c\uc2a4\ucf54\ub4dc \ub808\ud3ec\uc9c0\ud1a0\ub9ac\uc5d0\uc11c \ub2e4\uc2dc \ud574\ub2f9 \ubd80\ubd84\uc744 \ubcf5\uc0ac\ud558\uac70\ub098 \ud328\ud0a4\uc9c0\ub97c \ubd88\ub7ec\uc654\uc5b4\uc57c \ud588\uc9c0\ub9cc Serverless \uc11c\ube44\uc2a4\uc5d0 \ubc30\ud3ec\ub41c Microservice \ub97c \ud638\ucd9c\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \ubc14\ub00c\ub294 \uac83\uc774\ub2e4.\\n\\n[^1]: Frederick P. Brooks Jr., [No Silver Bullet - Essence and Accident in Software Engineering](http://worrydream.com/refs/Brooks-NoSilverBullet.pdf)"},{"id":"welcome","metadata":{"permalink":"/publication/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-26-welcome/index.md","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"August 26, 2021","tags":[{"label":"facebook","permalink":"/publication/blog/tags/facebook"},{"label":"hello","permalink":"/publication/blog/tags/hello"},{"label":"docusaurus","permalink":"/publication/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"prevItem":{"title":"Serverless","permalink":"/publication/blog/dev-with-serverless"},"nextItem":{"title":"MDX Blog Post","permalink":"/publication/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/publication/blog/mdx-blog-post","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2021-08-01-mdx-blog-post.mdx","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"August 1, 2021","tags":[{"label":"docusaurus","permalink":"/publication/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"prevItem":{"title":"Welcome","permalink":"/publication/blog/welcome"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"}]}')}}]);