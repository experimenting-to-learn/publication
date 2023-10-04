---
slug: codecatalyst-with-lambda
title: CodeCatalyst로 개발환경 구축하기
authors: [eunho]
tags: [serverless, aws, cloud-native-develop, CodeCatalyst]
---

[Amazon CodeCatalyst](https://aws.amazon.com/ko/codecatalyst/)는  AWS에서 제공하는 CDE (Cloud Development Environments) 서비스다.
CodeCatalyst는 프로젝트가 AWS의 서비스를 활용해서 설계 됐을 때 좋은 선택이다. 접근 권한 시스템인 AWS IAM 혹은 VPC 와 같은 네트워크 환경 구성을 사용할 수 있기 때문이다.

실제 사례를 통해서 Amazon CodeCatalyst를 이용해서 Serverless 개발환경을 구축하는 것을 단계적으로 알아본다.

- **Devfile: 개발환경 기본 컨테이너 이미지 및 의존성 패키지 설치**
- **codecatalyst/workflows: CI/CD 배포 자둥화 구성**


## Devfile: 개발환경 기본 컨테이너 이미지 및 의존성 패키지 설치

CodeCatayst에서 실질적인 개발을 위한 컴퓨팅 인스턴스를 제공하는 것은 Dev Environment 이다. 여기서는 Github에 생성된 코드 레포지토리를 Clone 해서 개발 인스턴스를 생성하도록 한다. 이 때 사용하는 컨테이너 베이스 이미지를 [Devfile](https://devfile.io/docs/2.0.0/what-is-a-devfile)를 이용해서 설정 할 수 있다.  레포지토리에 devfile.yaml 이 최상위 디렉토리(/)에 생성되어 있지 않다면 CodeCatayst의 기본 설정 베이스 이미지를 사용하며, 컨테이너에 미리 설치된 주요 패키지의 정보는 [AWS 문서](https://docs.aws.amazon.com/codecatalyst/latest/userguide/devenvironment-universal-image.html#devenvironment-universal-runtimes-1.0)에서 확인할 수 있다.
```yaml
schemaVersion: 2.0.0
metadata:
  name: aws-universal
  version: 1.0.1
  displayName: AWS Universal
  description: Stack with AWS Universal Tooling
  tags: ["aws", "al2"]
  projectType: "aws"
components:
  - name: aws-runtime
    container:
      image: public.ecr.aws/aws-mde/universal-image:latest
      mountSources: true
      volumeMounts:
        - name: docker-store
          path: /var/lib/docker
  - name: docker-store
    volume:
      size: 16Gi
```

본 사례에서는 nodejs 의 버전이 18 이상 필요했기 때문에, devfile.yaml 을 수정해서 레포지토리의 루트 위치에 추가했다.
```yaml
schemaVersion: 2.0.0
metadata:
  name: aws-universal
  version: 1.0.1
  displayName: AWS Universal
  description: Stack with AWS Universal Tooling
  tags: ["aws", "al2"]
  projectType: "aws"
components:
  - name: aws-runtime
    container:
      image: public.ecr.aws/aws-mde/universal-image:3.0
      mountSources: true
      volumeMounts:
        - name: docker-store
          path: /var/lib/docker
  - name: docker-store
    volume:
      size: 16Gi
```

> *컨테이너 베이스 이미지의 버전이 latest 인 경우  [Universal image 1.0 runtime versions](https://docs.aws.amazon.com/codecatalyst/latest/userguide/devenvironment-universal-image.html#devenvironment-universal-runtimes-1.0)을 참조 하며, 위에서 수정된 것과 같이 특정 버전([3.0](https://docs.aws.amazon.com/codecatalyst/latest/userguide/devenvironment-universal-image.html#devenvironment-universal-runtimes-3.0))을 명시하여 이미지를 선택할 수 있다.


## codecatalyst/workflows: CI/CD 배포 자둥화 구성

변경 사항에 대한 통합과 배포는 팀의 협업 방식에 맞추어 결정해야 한다. 여기서는 기본적으로 main 브랜치에 커밋이 발생하면 자동적으로 특정 AWS 계정 내에 개발 환경에 배포하는 것을 예로 설명한다. workflows는 yaml 파일 형태로 프로젝트의 해당 경로에 `.codecatalyst/workflows/` 위치 시킨다. 예제 에서는 간단하게 [Triggers](https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-add-trigger.html) 와 [Actions](https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-actions.html) 두 속성을 이용해서 메인 브랜치에 업데이트 발생 했을 때, 지정된 베이스 이미지에서 명령어를 실행하는 worklow이다.

```yaml
Name: onPushToMainRunDeployment
SchemaVersion: "1.0"
Triggers:
  - Type: PUSH
    Branches:
      - main
Actions:
  LambdaFunctionDeployment:
    Environment:
      Name: environemt-name
      Connections: 
       - Name: connection-name
         Role: role-name
    Identifier: aws/build@v1
    Compute:
      Type: EC2
    Inputs:
      Sources:
        - WorkflowSource
    Configuration:
      Container:
        Registry: ECR
        Image: public.ecr.aws/aws-mde/universal-image:3.0
      Steps:
        - Run: aws sts get-caller-identity
        - Run: yarn
        - Run: yarn run sls:deploy
```