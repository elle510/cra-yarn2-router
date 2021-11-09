# yarn berry with CRA

cra 로 프로젝트 생성하고 yarn berry 로 마이그레이션 해준다.

```sh
$ yarn --version
// 1.22.10

$ npx create-react-app my-app --template typescript
// cra 프로젝트 생성

$ cd my-app

$ rm -rf node_modules
$ rm -rf yarn.lock

$ yarn set version berry
// yarn berry 버전으로 변경 (해당 프로젝트에서만 local로 변경되는 것임)
// .yarn, .yarnrc.yml 생성됨
// .yarnrc.yml 파일에 nodeLinker: node-modules 로 되어 있다면 삭제(기존 node-modules 방식으로 관리됨)

$ yarn --version
// 3.1.0

$ yarn install
```

typescript 사용을 위해 typescript plugin 을 import 시켜준다.
자체 types를 포함하지 않는 패키지를 추가할 때 @types/ 패키지를 package.json 폴더에 종속성으로 자동으로 추가

```sh
$ yarn plugin import typescript
// .yarn/plugins/@yarnpkg/plugin-typescript.cjs 생성됨
```

vscode ide 설정
- extension 으로 zipfs 설치 (zip 아카이브에서 직접 파일을 읽을 수 있도록 VSCode에 지원을 추가)
- Editor SDK 설정 (typescript와 eslint 설정을 위해 명시적으로 활성화 필요)

```sh
$ yarn dlx @yarnpkg/sdks vscode
// typescript 와 eslint, prettier sdk 가 설치됨 (eslint, prettier 이미 설치 되어 있어야 설치됨)
```

- command + shift + p키 (맥북 기준)를 눌러 TypeScript: Select TypeScript Version..을 검색해 Use Workspace Version을 선택

Zero-Install 사용유무(.gitignore 파일 설정)

```sh
# Zero-Install 사용한다면
.yarn/*
!.yarn/cache
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/sdks
!.yarn/versions

# Zero-Install 사용하지 않는다면
.yarn/*
!.yarn/patches
!.yarn/releases
!.yarn/plugins
!.yarn/sdks
!.yarn/versions
.pnp.*
```

다른 registry(사내 저장소) 를 사용한다면 .yarnrc.yml 파일에 아래 내용 추가 설정

```sh
npmRegistryServer: 'http://nexus3.test.com/'
unsafeHttpWhitelist: 
  - nexus3.test.com
```
