# CLAUDE.md

이 문서는 프로젝트의 일관성을 유지하고, AI 어시스턴트가 코드를 작성할 때 준수해야 할 핵심 지침을 정의합니다.

## 코딩 규칙

### 1. 네이밍 규칙

- **변수/함수:** `camelCase` (예: `currentUser`, `getAnalysisData`)
- **컴포넌트:** `PascalCase` (예: `AnalysisResult`)
- **타입/인터페이스:** `PascalCase` (예: `type UserProfile`, `type DogDto`)
- **상수/환경 변수:** `UPPER_SNAKE_CASE` (예: `MAX_UPLOAD_SIZE`)
- **파일 이름:** 컴포넌트는 `PascalCase.tsx`, 유틸/훅은 `camelCase.ts`
- **Boolean:** `is`, `has`, `should` 접두사 사용
- **이벤트 핸들러:** 내부 함수는 `handle*`, Props로 전달할 때는 `on*`

### 2. 함수 및 컴포넌트 작성

- 모든 컴포넌트와 함수는 **Arrow Function**으로 작성합니다.
- **명시적 반환 타입**을 필수로 지정합니다. (함수형 컴포넌트는 `React.FC` 대신 직접 반환 타입 지정 권장)
- 줄임말을 사용하지 않습니다: `btn` (✗) → `button` (✓), `idx` (✗) → `index` (✓)

### 3. 디렉토리 구조 및 경로

- **절대 경로 사용:** `@/*` 경로를 사용합니다.
- **도메인 기반 분리:** 아래 디렉토리는 내부를 도메인(예: `auth`, `analysis`, `hospital`)별로 분리하여 관리합니다.
  - `src/apis/{domain}`: API 연동 로직 및 인스턴스
  - `src/components/{domain}`: 도메인 전속 컴포넌트 및 UI
  - `src/hooks/{domain}`: 특정 기능에 종속된 비즈니스 로직 훅
  - `src/types/{domain}`: 도메인 모델 및 API 통신 타입 정의
- **기타 디렉토리:**
  - `src/app`: 라우팅 및 페이지 레이아웃
  - `src/constants`: 전역 상수 및 도메인별 고정 데이터
  - `src/stores`: Zustand 기반의 상태 관리 저장소
  - `src/styles`: 전역 CSS 및 디자인 시스템 정의
  - `src/utils`: `cn.ts` 등 도메인에 관계없는 유틸리티/라이브러리 설정

### 4. 스타일링 규칙

- 인라인 스타일 대신 Tailwind 클래스를 우선 사용합니다.
- 복잡한 조건부 클래스는 `cn()` 유틸리티를 활용합니다.
- 하드코딩된 값 대신 CSS 변수 기반의 토큰을 사용합니다.
- px 단위 사용을 최소화하고 rem 또는 Tailwind 스케일을 사용합니다.
