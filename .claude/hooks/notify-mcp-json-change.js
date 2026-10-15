let data = "";
process.stdin.on("data", (chunk) => {
  data += chunk;
});
process.stdin.on("end", () => {
  try {
    const input = JSON.parse(data);
    const filePath = String(input.file_path || "").replace(/\\/g, "/");
    if (filePath.endsWith("/.mcp.json") || filePath === ".mcp.json") {
      console.log(
        JSON.stringify({
          systemMessage:
            ".mcp.json 파일이 변경되었습니다. 새로 추가되거나 변경된 MCP 서버 설정을 확인하세요.",
        })
      );
    }
  } catch {
    // 입력 파싱 실패 시 조용히 무시 (훅 실패로 작업을 막지 않음)
  }
});
