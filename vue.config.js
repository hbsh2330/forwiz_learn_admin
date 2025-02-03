module.exports = {
  // 개발 서버 설정
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081', // Spring Boot 서버 주소
        changeOrigin: true,
        pathRewrite: {
          '^/api': '' // '/api'를 제거
        }
      }
    }
  },
  // 빌드 설정
  publicPath: './',
  outputDir: '../project_backend/src/main/resources/static',
  productionSourceMap: false, // 소스 맵 비활성화
  lintOnSave: false, // Lint 경고 비활성화
};